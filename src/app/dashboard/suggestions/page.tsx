'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/auth-context";
import { SuggestionsTable } from "./components/suggestions-table";

export default function SuggestionsPage() {
  const { songSuggestions, setSongSuggestions } = useAuth();
  
  return (
    <div className="space-y-6">
       <div>
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">
          Song Suggestions
        </h1>
        <p className="text-muted-foreground">
          Review and manage song requests from listeners.
        </p>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Incoming Requests</CardTitle>
            <CardDescription>A list of song suggestions submitted by your listeners.</CardDescription>
        </CardHeader>
        <CardContent>
           {songSuggestions.length > 0 ? (
              <SuggestionsTable suggestions={songSuggestions} setSuggestions={setSongSuggestions} />
           ) : (
             <p className="text-sm text-muted-foreground text-center p-8">
               No song suggestions have been submitted yet.
             </p>
           )}
        </CardContent>
      </Card>

    </div>
  )
}
