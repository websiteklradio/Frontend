'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SoundWave } from '../ui/sound-wave';
import { AudioWave } from '../ui/audio-wave';
import { SIGNALING_URL, LIVE_STREAM_ROOM_ID, WEBRTC_CONFIG } from '@/lib/webrtc';
import { useToast } from '@/hooks/use-toast';
import 'webrtc-adapter';

export function ListenLiveSection() {
  const { toast } = useToast();

  const [streamState, setStreamState] = useState<
    'offline' | 'connecting' | 'live'
  >('offline');

  const audioRef = useRef<HTMLAudioElement>(null);
  const peerRef = useRef<RTCPeerConnection | null>(null);
  const socketRef = useRef<WebSocket | null>(null);
  const listenerIdRef = useRef<string | null>(null);
  const pingRef = useRef<NodeJS.Timeout | null>(null);

  const cleanupConnection = useCallback(() => {
    if (pingRef.current) clearInterval(pingRef.current);

    socketRef.current?.close();
    peerRef.current?.close();

    socketRef.current = null;
    peerRef.current = null;
    listenerIdRef.current = null;

    if (audioRef.current) audioRef.current.srcObject = null;

    setStreamState('offline');
  }, []);

  const handleTuneIn = useCallback(async () => {
    if (streamState !== 'offline') {
      cleanupConnection();
      return;
    }

    setStreamState('connecting');
    toast({ title: 'Connecting to Live Stream...' });

    const pc = new RTCPeerConnection(WEBRTC_CONFIG);
    peerRef.current = pc;

    pc.ontrack = (event) => {
      if (!audioRef.current) return;

      audioRef.current.srcObject = event.streams[0];
      audioRef.current.muted = false;
      audioRef.current.volume = 1;
      audioRef.current.playsInline = true;
      audioRef.current.setAttribute('playsinline', 'true');

      setTimeout(() => audioRef.current?.play().catch(() => {}), 0);

      setStreamState('live');
    };

    pc.onicecandidate = (event) => {
      if (event.candidate && socketRef.current && listenerIdRef.current) {
        socketRef.current.send(JSON.stringify({
          type: 'candidate',
          candidate: event.candidate,
          listenerId: listenerIdRef.current,   // ✅ FIXED
        }));
      }
    };

    const ws = new WebSocket(SIGNALING_URL);
    socketRef.current = ws;

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: 'join',
        roomId: LIVE_STREAM_ROOM_ID,
        role: 'listener',
      }));

      // 🔥 MOBILE KEEPALIVE
      pingRef.current = setInterval(() => {
        ws.readyState === WebSocket.OPEN &&
          ws.send(JSON.stringify({ type: 'ping' }));
      }, 15000);
    };

    ws.onmessage = async (event) => {
      const data = JSON.parse(event.data);

      if (data.type === 'offer') {
        listenerIdRef.current = data.listenerId;

        await pc.setRemoteDescription(data.offer);
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);

        ws.send(JSON.stringify({
          type: 'answer',
          answer: pc.localDescription,
          listenerId: data.listenerId,
        }));
      }

      if (data.type === 'candidate') {
        await pc.addIceCandidate(data.candidate);
      }
    };

    ws.onclose = cleanupConnection;
    ws.onerror = cleanupConnection;

  }, [cleanupConnection, streamState, toast]);

  useEffect(() => cleanupConnection, [cleanupConnection]);

  return (
    <section className="container mx-auto px-4 py-20">
      <Card>
        <CardContent className="flex flex-col items-center">
          <Button onClick={handleTuneIn} disabled={streamState === 'connecting'}>
            {streamState === 'live' ? 'Disconnect' : 'Tune In'}
          </Button>
          <audio ref={audioRef} hidden />
        </CardContent>
      </Card>
    </section>
  );
}
