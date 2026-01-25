import { NavbarKL } from '@/components/ui/navbar-kl';
import { SiteFooter } from '@/components/site-footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <NavbarKL />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h1 className="font-headline text-5xl font-bold tracking-tighter md:text-6xl">
            Upcoming Events
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Stay tuned for our upcoming events. This page is under construction.
          </p>
          <div className="mt-16 flex justify-center">
            <Card className="w-full max-w-md">
                <CardHeader className="items-center text-center">
                    <Calendar className="h-12 w-12 text-primary" />
                    <CardTitle className="text-2xl">Events Calendar Coming Soon</CardTitle>
                    <CardDescription>We're working on bringing you a full schedule of exciting events from KL Radio.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-center text-muted-foreground">Check back later for updates!</p>
                </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
