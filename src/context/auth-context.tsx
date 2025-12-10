'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  role: 'Station Head' | 'Creative' | 'Technical' | 'PR' | 'Design' | 'Video' | 'RJ' | 'Guest';
  avatarId: string;
};

const users: User[] = [
  { id: '1', name: 'Station Head', email: 'station.head@klradio.com', role: 'Station Head', avatarId: '1' },
  { id: '2', name: 'RJ Riff', email: 'rj.riff@klradio.com', role: 'RJ', avatarId: '1' },
  { id: '3', name: 'Creative Carla', email: 'carla.c@klradio.com', role: 'Creative', avatarId: '1' },
  { id: '4', name: 'Techie Tom', email: 'tom.t@klradio.com', role: 'Technical', avatarId: '1' },
  { id: '5', name: 'PR Penelope', email: 'penelope.p@klradio.com', role: 'PR', avatarId: '1' },
];

type AuthContextType = {
  user: User | null;
  users: User[];
  setUser: (user: User | null) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(users[0]);

  return (
    <AuthContext.Provider value={{ user, users, setUser }}>
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
