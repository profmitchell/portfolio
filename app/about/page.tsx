import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Palette, Music, Laptop, GraduationCap, ExternalLink } from "lucide-react";
import { SiYoutube, SiLinkedin, SiSoundcloud } from "react-icons/si";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Music producer, developer, educator, and visual artist based in Boston
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Background</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Mitchell Cohen is a multifaceted musician, composer, producer, and educator with over two decades of experience in the music industry. He currently serves as an Assistant Professor in the Electronic Production and Design Department at Berklee College of Music, where he imparts his extensive knowledge in courses such as Introduction to Music Technology and Producing with Apple&apos;s Logic Pro X.
              </p>
              <p className="text-muted-foreground">
                Cohen&apos;s musical journey commenced at the age of seven with private piano lessons, laying a solid foundation for his future endeavors. After earning his degree from Berklee, he embarked on nationwide tours, contributed to the establishment of professional recording studios, and composed for a diverse array of artists and companies.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary"><Music className="mr-1 h-4 w-4" /> Music Production</Badge>
                <Badge variant="secondary"><Code className="mr-1 h-4 w-4" /> Development</Badge>
                <Badge variant="secondary"><Palette className="mr-1 h-4 w-4" /> Visual Arts</Badge>
                <Badge variant="secondary"><GraduationCap className="mr-1 h-4 w-4" /> Education</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notable Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Film Composition and Audio Restoration</h3>
                  <p className="text-sm text-muted-foreground">
                    Composed music and restored film dialogue for the short film &ldquo;Retail Blues,&rdquo; a project recognized on IMDb.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Music Production</h3>
                  <p className="text-sm text-muted-foreground">
                    Co-composed and produced &ldquo;Lil Holy&rdquo; by WHATUPRG, garnering over 1.3 million Spotify plays and reaching #7 on iTunes&apos; hip-hop charts.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Collaborative Works</h3>
                  <p className="text-sm text-muted-foreground">
                    Co-composed &ldquo;Radhe Shyam Vibrations&rdquo; with DJ Mantra, featuring John de Kadt and Grammy-nominated Dave Stringer.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Live Performances</h3>
                  <p className="text-sm text-muted-foreground">
                    Performed at venues including the Country Music Hall of Fame, RE/MAX Freedom Balloon Festival, Middle East nightclub, Miami Beach EDITION, and Spirit of Boston.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Connect & Follow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" size="lg" className="gap-2 hover-lift" asChild>
                <a href="https://college.berklee.edu/electronic-production-design/faculty/mitchell-cohen" target="_blank" rel="noopener noreferrer">
                  <GraduationCap className="h-5 w-5" />
                  Berklee Faculty Profile
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="gap-2 hover-lift" asChild>
                <a href="https://www.linkedin.com/in/mitchellcohenhp" target="_blank" rel="noopener noreferrer">
                  <SiLinkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="gap-2 hover-lift" asChild>
                <a href="https://www.youtube.com/@mitchellrcohen" target="_blank" rel="noopener noreferrer">
                  <SiYoutube className="h-5 w-5" />
                  YouTube
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="gap-2 hover-lift" asChild>
                <a href="https://soundcloud.com/mitchellrcohen" target="_blank" rel="noopener noreferrer">
                  <SiSoundcloud className="h-5 w-5" />
                  SoundCloud
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Teaching & Development</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              As an Assistant Professor at Berklee College of Music, Mitchell specializes in music technology education, teaching courses in digital audio workstations, music production, and sound design. His expertise extends to developing custom VSTs, samples, and instruments, contributing to advancements in music technology.
            </p>
            <p className="text-muted-foreground">
              His dedication to music education and innovation continues to inspire and influence the next generation of musicians and producers, combining traditional musical knowledge with cutting-edge technology.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}