'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { NavbarKL } from '@/components/ui/navbar-kl';
import { SiteFooter } from '@/components/site-footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  {
    role: 'Station Head',
    name: 'Dr. Emily Carter',
    avatarId: 'station-head',
  },
  {
    role: 'Deputy Station Head',
    name: 'Mr. Benjamin Hayes',
    avatarId: 'deputy-station-head',
  },
  {
    role: 'RJ Head',
    name: 'Alex "DJ Vibe" Chen',
    avatarId: 'rj-head',
  },
  {
    role: 'Creative Head',
    name: 'Sophia Rodriguez',
    avatarId: 'creative-head',
  },
  {
    role: 'Technical Head',
    name: 'Marcus Thorne',
    avatarId: 'technical-head',
  },
  {
    role: 'Broadcasting Head',
    name: 'Isabella Grant',
    avatarId: 'broadcasting-head',
  },
  {
    role: 'Video Editing Head',
    name: 'Leo Kim',
    avatarId: 'video-editing-head',
  },
  {
    role: 'PR Head',
    name: 'Chloe Davis',
    avatarId: 'pr-head',
  },
  {
    role: 'Designing Head',
    name: 'Olivia Martinez',
    avatarId: 'designing-head',
  },
];

export default function OurTeamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <NavbarKL />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h1 className="font-headline text-5xl font-bold tracking-tighter md:text-6xl">
            Meet the Team
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            The driving force behind KL Radio, a collective of passionate minds dedicated to bringing you the best audio experience.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => {
              const memberImage = PlaceHolderImages.find(p => p.id === member.avatarId);
              return (
                <Card key={member.role} className="text-center transition-transform transform hover:scale-105 hover:shadow-primary/20 hover:shadow-lg">
                  <CardHeader>
                    <div className="relative mx-auto h-40 w-40">
                      {memberImage && (
                        <Image
                          src={memberImage.imageUrl}
                          alt={`Photo of ${member.name}`}
                          fill
                          className="rounded-full object-cover"
                          data-ai-hint={memberImage.imageHint}
                        />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                    <p className="text-md text-primary font-medium">{member.role}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
