'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Mic, Newspaper, Podcast, Megaphone } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const mockTodaysScript = {
  id: '1',
  show: 'Story Time',
  title: '“SISTER”',
  content: `Hi hello namastey miru vintunaru kl radio the voice of kluains with me your rj……. vachesa andi vachesa malli mi mundhuku maroo kotha story tho vachesaa eroju nen chpaboye story deni gurinchi ante Eddari anna la muddula chelli katha…

General ga miru enno bondings gurinchi viney untaru for example akka-chelli, akka-thammudu, bava-bamaridhi, anna-chelli, vadina-maradhalu… kani na kadha koncham special ye .. kadhu kadhu chala special andi..

Chinnapati nundi amma, nanna, friends villey na lokam ga perigina nenu .Prapancham anty na drustilo villu mugurey ani chala gattiga fix awtuna rojulu avi.. School ki veladam allari chyadam malli sayantraniki intiki vachi amma nanna nalatho muchatlu veyadam edy pani ga chestuna days avi..

Entha anandani bayataki natichina edho oka moment lo nak antu evaryna sibiling unty bagundu eppudyna tattukoleni badha vachina pattani santhosham vachina chepukovadaniki nak antu oka manishi undalani na “KALA”.

But manakemo siblings leru kani chala mandhi okadanivey kadha chala happy ga undi untav , nikem siblings leru godavapadey valu undaru prasantaga undochu ani chala chepey vaalu but Unavalaki aa value eppatiki teliyadhu okavela adi manishyna …vastuvayna…

mana manasuki ledha mana sheriraniki degaraga undapudu dani viluva asalu teliyadhu .. Konni days ki friends degara una sare oka teliyani loneliness vachesindi adi entha la impact chsindi anty edyna anipisty okari chpadama ledha Manalo maname dachukundama aney oka pedda question mark na mind lo raise ayindi?? Appati varaku una friends ye tarvatha ela mayamayaro teliyadhu oka certain time tarvatha nak antu evaru leru nak anandani echey amma, dairyam chpey nanna tappa..

Konni sarlu narakam ela untadi anty anni untay kani share chskovali anukunapudu oka correct person manatho undaru amma,nanna ki enni chpukuna inka muta matalu dachukuney dani..Ela chala badhaga , koncham anandanga gadustuna na chinni jindagi loki oka eddari manushulani aa devudu varam ga pampadu..Valley na pranamga anukuntuna ma annayalu ..

A nimisham varaku oka Annaya prema ela untado , vala caring oka ammayi life lo entha impact chupistado asalu minimum idea leni naku tattukoleni prema, muta kataleni anandani parichayam chsaru.Appati varaku devudini nak enduku evarini thoduga evaledhu ani tittukuna nenu aa nimisham nundi chance dorikina prati saari devudiki thanks chpadam start chsa..

manam cheesy prati prayers aa devudu vintado vinaro teliyadhu kani nenu korukuna na santhoshani ma Annaya la Roopam lo na life lo oka pedda varam la aa devudi naku echadu..Siblings kakapoyina , oka thalli pegu pancukuni puttakapoyina na pyna vaalu chupinchey prema ee lokam lo evaru chupinchi undaremo (doubt enduku asalu undaru).

Annaya ani pilichina prati saari tanu enta panilo una sare aa pilupu loni ardham chpakundaney ardham chskuntadu ma bangaramyna Annaya..Ye janma lo punynam chskunano teliyadhu kani oka mulla chettu chuttu oka kavacham la na chuttu vala prema eppati alane undalani korukutuna..

Prati brother-sisters kadha lo kotukovadame vini untaru kani na kadha lo yedchina prati saari tana bhujam ye nak oka Raksha la tana mataley naku oka dairyam la untundi.. Oka nanna tana kuthurini enta allaaru mudhuga penchukuntaru nannu ma annayalu anta kana ekkuva ganey chuskuntaru … DISTANCE DOES’NT MATTER ee line miru chala lovestories lo viney untaru kani ma ee anadamyna bonding lo adey main character ni play chsindi Annaya ani call chsina prati saari call cut chsi vacheylopu na kala mundu pratysham ayeyvadu..

Chpey situation yeppud raledhu kani Annaya without you I’m nothing okavela ni character ye na life lo lekapoty ela untado kuda uhinchukoleni situation . Evari disti tagalakunda prathi janma lo niku SONTHA chellila putalani aa devudini korukuntu ni allari chelli… malli repu marenoo kotha stories tho mi mundhuku vachesthaam….. vintune vundandi kl radio the voice of kluains……. Entha manchiga thana gurinchi chpindhi Akshaya putti…..
Nenu mi rj…….. signing off.`,
};

const mockTodaysNews = [
    {
        id: '1',
        title: 'City Marathon This Weekend',
        summary: 'The annual city marathon is happening this Sunday. Several roads will be closed from 6 AM to 12 PM. Plan your travel accordingly.',
        source: 'City Traffic Dept.'
    },
];

const initialMockPodcasts = [
    {
        id: '1',
        title: 'The Rock Chronicles - Episode 4',
        topic: 'Interview with "The Wanderers"',
        status: 'Recording Pending',
        completed: false
    }
];

const mockAnnouncements = [
  {
    id: 1,
    title: 'New Primetime Show: "Midnight Grooves"',
    date: 'July 25, 2024',
    content: 'Tune in every weekday at 10 PM for the smoothest jazz and R&B tracks to wind down your day. Hosted by DJ Alex.',
  },
  {
    id: 2,
    title: 'Annual KL Radio Fest Announced!',
    date: 'July 22, 2024',
    content: 'Get ready for the biggest music event of the year! The KL Radio Fest is back with an amazing lineup. Tickets go on sale August 1st.',
  }
];

export default function RJWingPage() {
  const [podcasts, setPodcasts] = useState(initialMockPodcasts);

  const handlePodcastCompletionChange = (podcastId: string) => {
    setPodcasts(currentPodcasts =>
      currentPodcasts.map(podcast =>
        podcast.id === podcastId ? { ...podcast, completed: !podcast.completed, status: !podcast.completed ? 'Recording Complete' : 'Recording Pending' } : podcast
      )
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">
          Your Dashboard, RJ
        </h1>
        <p className="text-muted-foreground">
          Everything you need for your upcoming show is right here.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Mic className="h-6 w-6" />
              <div>
                <CardTitle>Today's Live Script: {mockTodaysScript.show}</CardTitle>
                <CardDescription>All segments for your show today.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96">
              <div className="space-y-4 pr-4 whitespace-pre-wrap">
                  <h3 className="font-semibold text-base">{mockTodaysScript.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{mockTodaysScript.content}</p>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                    <Newspaper className="h-6 w-6" />
                    <div>
                        <CardTitle>Today's News</CardTitle>
                        <CardDescription>News items to cover in your segments.</CardDescription>
                    </div>
                </div>
              </CardHeader>
               <CardContent>
                <ScrollArea className="h-40">
                  <div className="space-y-4">
                    {mockTodaysNews.map((item) => (
                      <div key={item.id} className="p-4 border rounded-lg">
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{item.summary}</p>
                          <p className="text-xs text-muted-foreground/70 mt-2">Source: {item.source}</p>
                      </div>
                    ))}
                     {mockTodaysNews.length === 0 && (
                        <p className="text-sm text-center text-muted-foreground py-10">No news assigned for today.</p>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <Megaphone className="h-6 w-6" />
                        <div>
                            <CardTitle>Recent Announcements</CardTitle>
                            <CardDescription>Latest station announcements.</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-40">
                        <div className="space-y-4">
                            {mockAnnouncements.map((announcement) => (
                                <div key={announcement.id} className="p-4 border rounded-lg">
                                    <h3 className="font-semibold">{announcement.title}</h3>
                                    <p className="text-xs text-muted-foreground mt-1">{announcement.date}</p>
                                    <p className="text-sm text-muted-foreground mt-2">{announcement.content}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Podcast className="h-6 w-6" />
            <div>
              <CardTitle>Assigned Podcasts</CardTitle>
              <CardDescription>Podcast episodes assigned to you for recording.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {podcasts.length > 0 ? (
            <div className="space-y-4">
              {podcasts.map((podcast) => (
                <div key={podcast.id} className="p-4 border rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{podcast.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">Topic: {podcast.topic}</p>
                    <p className="text-sm font-medium text-primary mt-2">{podcast.status}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`completed-${podcast.id}`}
                      checked={podcast.completed}
                      onCheckedChange={() => handlePodcastCompletionChange(podcast.id)}
                    />
                    <Label htmlFor={`completed-${podcast.id}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Mark as Complete
                    </Label>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-center text-muted-foreground py-10">No podcasts assigned to you at the moment.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
