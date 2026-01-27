export const SIGNALING_URL = "wss://webrtc-signaling-backend.onrender.com/ws"
export const STUN_SERVER = "stun:stun.l.google.com:19302"
export const LIVE_STREAM_ROOM_ID = "kl-radio-live-stream"

// Production-ready WebRTC configuration.
// A TURN server is essential for real-world applications to handle
// complex network situations (like mobile networks or corporate firewalls).
export const WEBRTC_CONFIG: RTCConfiguration = {
    iceServers: [
        { urls: STUN_SERVER },
        // UNCOMMENT AND ADD YOUR TURN SERVER CREDENTIALS FOR PRODUCTION
        // {
        //   urls: "turn:your-turn-server.com:443",
        //   username: "YOUR_TURN_USERNAME",
        //   credential: "YOUR_TURN_PASSWORD"
        // }
    ]
};
