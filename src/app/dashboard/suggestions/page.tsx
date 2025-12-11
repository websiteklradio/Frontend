import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { SongSuggestion } from "@/lib/types";

const suggestions: SongSuggestion[] = [];

export default function SuggestionsPage() {
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
            <p className="text-sm text-muted-foreground text-center p-8">
              The song suggestions feature is currently being rebuilt.
            </p>
        </CardContent>
      </Card>

    </div>
  )
}
