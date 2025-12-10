

import { Radio } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar';
import { MainNav } from '@/components/dashboard/main-nav';
import { DashboardHeader } from '@/components/dashboard/header';
import { AuthProvider } from '@/context/auth-context';
import Image from 'next/image';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader className="border-b">
            <div className="flex items-center gap-2 p-2">
              <Image src="https://ik.imagekit.io/z5fowzj2wr/Screenshot%202025-12-10%20171402.png?updatedAt=1765367128945" alt="KL Radio Logo" width={24} height={24} className="size-6" />
              <h1 className="font-headline text-lg font-semibold">KL Radio</h1>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <MainNav />
          </SidebarContent>
        </Sidebar>
        <SidebarInset className="flex flex-col">
          <DashboardHeader />
          <main className="flex-1 overflow-auto p-4 sm:px-6 sm:py-0">
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </AuthProvider>
  );
}
