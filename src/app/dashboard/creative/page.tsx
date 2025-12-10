'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, Upload, RefreshCw, Pen, Trash } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAuth } from '@/context/auth-context';

// Mock Data
const mockScripts = [
  { id: 's1', title: 'Morning Rush Intro', lastEdited: '2 hours ago' },
  { id: 's2', title: 'Rock On - Special Guest Segment', lastEdited: '1 day ago' },
  { id: 's3', title: 'Weekend Countdown Opener', lastEdited: '3 days ago' },
];

const mockNews = [
  {
    id: 'n1',
    title: 'City Marathon Causes Road Closures',
    source: 'City News Wire',
    assignedTo: null,
  },
  {
    id: 'n2',
    title: 'Local Band "The Wanderers" Releases New Album',
    source: 'Music Today',
    assignedTo: 'RJ Riff',
  },
  {
    id: 'n3',
    title: 'Tech Expo 2024 happening this weekend',
    source: 'Tech Chronicle',
    assignedTo: null,
  },
];

export default function CreativePage() {
  const { users } = useAuth();
  const rjs = users.filter(u => u.role === 'RJ');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">
          Creative Wing
        </h1>
        <p className="text-muted-foreground">
          Write scripts, fetch news, and assign tasks to RJs.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Scripts Management */}
        <Card>
          <CardHeader>
            <CardTitle>Scripts</CardTitle>
            <CardDescription>
              Write, upload, and edit scripts for the shows.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Last Edited</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockScripts.map((script) => (
                  <TableRow key={script.id}>
                    <TableCell className="font-medium">{script.title}</TableCell>
                    <TableCell>{script.lastEdited}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Pen className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive/80 hover:text-destructive">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Upload Script
            </Button>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Write Script
            </Button>
          </CardFooter>
        </Card>

        {/* News Fetching and Assignment */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
                <div>
                    <CardTitle>News Feed</CardTitle>
                    <CardDescription>
                        Fetch the latest news and assign it to RJs.
                    </CardDescription>
                </div>
                <Button variant="outline">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Fetch News
                </Button>
            </div>
          </CardHeader>
          <CardContent>
             <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>News Title</TableHead>
                  <TableHead>Assign To</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockNews.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.source}</p>
                    </TableCell>
                    <TableCell className="w-[180px]">
                      <Select defaultValue={item.assignedTo || undefined}>
                        <SelectTrigger>
                          <SelectValue placeholder="Assign to RJ..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="unassigned">Unassigned</SelectItem>
                          {rjs.map(rj => (
                            <SelectItem key={rj.id} value={rj.name}>{rj.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
