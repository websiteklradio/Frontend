'use client';

import { createContext, useContext, useState, ReactNode, useCallback, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import type { SongSuggestion } from '@/lib/types';
import api, { setAuthToken } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

type User = {
  id: string;
  name: string;
  username: string;
  role: 'Station Head' | 'Creative' | 'Technical' | 'PR' | 'Designing' | 'Video Editing' | 'RJ' | 'Broadcasting' | 'Guest';
  avatarId: string;
};

const roleRedirects: { [key: string]: string } = {
  'station_head': '/dashboard',
  'rj': '/dashboard/rj-wing',
  'creative': '/dashboard/creative',
  'technical': '/dashboard/technical',
  'pr': '/dashboard/pr',
  'designing': '/dashboard/designing',
  'video_editing': '/dashboard/video-editing',
  'broadcasting': '/dashboard/broadcasting',
};

// Frontend roles to backend roles mapping
const roleMapping: { [key: string]: string } = {
  'Station Head': 'station_head',
  'Creative': 'creative',
  'Technical': 'technical',
  'PR': 'pr',
  'RJ': 'rj',
  'Broadcasting': 'broadcasting',
  'Designing': 'designing',
  'Video Editing': 'video_editing',
};


type AssignedNewsItem = {
    id: string;
    title: string;
    summary: string;
    source: string;
}

type AuthContextType = {
  user: User | null;
  users: User[];
  loading: boolean;
  login: (role: string, username: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  songSuggestions: SongSuggestion[];
  addSongSuggestion: (suggestion: Omit<SongSuggestion, 'id' | 'submittedAt' | 'status'>) => void;
  setSongSuggestions: (suggestions: SongSuggestion[]) => void;
  assignedNews: AssignedNewsItem[];
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [songSuggestions, setSongSuggestions] = useState<SongSuggestion[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();

  const handleLoginSuccess = useCallback((userData: any, token: string) => {
    localStorage.setItem('token', token);
    setAuthToken(token);
    setUser(userData);
    const redirectPath = roleRedirects[userData.role] || '/dashboard';
    router.push(redirectPath);
  }, [router]);
  
  useEffect(() => {
    const initializeApp = async () => {
      setLoading(true);
      const token = localStorage.getItem('token');
      if (token) {
        setAuthToken(token);
        try {
          const response = await api.get('/auth/me');
          if (response.data) {
            setUser(response.data.user);
            const currentPath = pathname;
            const isAuthPage = currentPath === '/login';
            if (isAuthPage) {
              const redirectPath = roleRedirects[response.data.user.role] || '/dashboard';
              router.push(redirectPath);
            }
          } else {
            localStorage.removeItem('token');
            setAuthToken(null);
            if (!['/', '/login'].includes(pathname)) {
              router.push('/login');
            }
          }
        } catch (error) {
          console.error('Session verification failed', error);
          localStorage.removeItem('token');
          setAuthToken(null);
          if (!['/', '/login'].includes(pathname)) {
            router.push('/login');
          }
        }
      } else {
        const isDashboard = pathname.startsWith('/dashboard');
        if (isDashboard) {
            router.push('/login');
        }
      }
      
      setLoading(false);
    };
    initializeApp();
  }, [pathname, router]);
  
  const login = useCallback(async (role: string, username: string, password: string): Promise<{ success: boolean; error?: string }> => {
    const backendRole = roleMapping[role] || role;
    try {
      const response = await api.post('/auth/login', { username, role: backendRole, password }); 
      const { user: userData, token } = response.data;
      handleLoginSuccess(userData, token);
      return { success: true };
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Login failed. Please try again.';
      return { success: false, error: errorMessage };
    }
  }, [handleLoginSuccess]);
  
  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('token');
    setAuthToken(null);
    router.push('/login');
  }, [router]);
  
  const addSongSuggestion = useCallback(async (suggestion: Omit<SongSuggestion, 'id' | 'submittedAt' | 'status'>) => {
     try {
      const response = await api.post('/public/song-suggestion', suggestion);
      // Assuming the backend returns the newly created suggestion
      setSongSuggestions(prev => [response.data, ...prev]);
    } catch (error) {
      console.error('Failed to submit song suggestion:', error);
      toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: 'Could not submit your song suggestion. Please try again later.',
      });
    }
  }, [toast]);

  useEffect(() => {
    if (!loading && !user && !['/login', '/'].includes(pathname) && !pathname.startsWith('/_next')) {
        router.push('/login');
    }
  }, [user, loading, pathname, router]);

  return (
    <AuthContext.Provider value={{ 
        user, 
        users: [], 
        loading,
        login, 
        logout, 
        songSuggestions,
        addSongSuggestion,
        setSongSuggestions,
        assignedNews: []
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
