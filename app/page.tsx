import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Music, Code, Palette, Download, Calendar, Headphones } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-b from-primary/20 via-primary/10 to-background" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            Mitchell Cohen
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto">
            Music Producer • Developer • Visual Artist
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/music">
                Explore My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Music Production</h2>
              <p className="text-muted-foreground">
                Explore my portfolio of original music, collaborations, and sound design work.
              </p>
              <Button asChild>
                <Link href="/music">
                  Listen Now <Headphones className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Music className="h-12 w-12 text-muted-foreground" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Creative Apps</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Music className="w-8 h-8" />
                </div>
                <CardTitle>Audio to Keyframes</CardTitle>
                <CardDescription>
                  Convert audio into animation keyframes for visual sync
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/apps/audio-keyframes">Launch App</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Code className="w-8 h-8" />
                </div>
                <CardTitle>VST Manager</CardTitle>
                <CardDescription>
                  Organize and manage your VST plugins efficiently
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/apps/vst-manager">Launch App</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Palette className="w-8 h-8" />
                </div>
                <CardTitle>MIDI Generator</CardTitle>
                <CardDescription>
                  AI-powered MIDI pattern generator
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/apps/midi-generator">Launch App</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Resource Library</h2>
            <p className="text-muted-foreground">
              Download free plugins, templates, samples, and presets
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {["VST Plugins", "DAW Templates", "Sample Packs", "Presets"].map((category) => (
              <Card key={category} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Link href="/resources">Browse {category}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Book Lessons Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Music className="h-12 w-12 text-muted-foreground" />
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Book Lessons</h2>
                <p className="text-muted-foreground">
                  Learn music production, sound design, and more through personalized instruction.
                </p>
                <Button asChild className="w-fit">
                  <Link href="/lessons">
                    Schedule Now <Calendar className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}