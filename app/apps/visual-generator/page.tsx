import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Music, Download } from "lucide-react";

export default function VisualGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Visual Generator
          </h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Create visual art from audio input
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Music className="h-5 w-5" />
              Audio Input
            </CardTitle>
            <CardDescription>
              Upload audio or use microphone input
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Button>Upload Audio</Button>
              <Button variant="outline">Use Microphone</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Visual Output
            </CardTitle>
            <CardDescription>
              Generated visual art will appear here
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">No visualization yet</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}