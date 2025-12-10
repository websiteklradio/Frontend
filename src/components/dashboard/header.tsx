'use client';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { UserNav } from './user-nav';
import { useAuth } from '@/context/auth-context';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function DashboardHeader() {
  const { user, setUser, users } = useAuth();
  
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <SidebarTrigger className="sm:hidden" />
       <div className="hidden md:flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Viewing as:</span>
        <Select
          value={user?.id}
          onValueChange={(userId) => {
            const selectedUser = users.find((u) => u.id === userId);
            if (selectedUser) {
              setUser(selectedUser);
            }
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select user" />
          </SelectTrigger>
          <SelectContent>
            {users.map((u) => (
              <SelectItem key={u.id} value={u.id}>
                {u.name} ({u.role})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="relative ml-auto flex flex-1 items-center justify-end gap-2 md:grow-0">
        <UserNav />
      </div>
    </header>
  );
}
