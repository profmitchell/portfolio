import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Waveform, Play, Download } from "lucide-react";

export default function AudioKeyframesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Audio to Keyframes
          </h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Convert audio files into animation keyframes
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Waveform className="h-5 w-5" />
              Upload Audio
            </CardTitle>
            <CardDescription>
              Select an audio file to begin the conversion process
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-8 text-center">
              <p className="text-muted-foreground">
                Drag and drop your audio file here or click to browse
              </p>
              <Button className="mt-4">Select File</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}