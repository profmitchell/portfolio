import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code, Music, Palette, Shapes, ArrowRight } from "lucide-react";

const apps = [
  {
    title: "Cohen's Concepts",
    description: "Interactive music theory learning platform",
    icon: Music,
    href: "/apps/cohens-concepts",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    features: [
      "Interactive lessons",
      "Real-time feedback",
      "Progress tracking",
      "Custom exercises"
    ]
  },
  {
    title: "Audio to Keyframes",
    description: "Convert audio to animation keyframes",
    icon: Code,
    href: "/apps/audio-keyframes",
    color: "text-green-500",
    bgColor: "bg-green-50",
    features: [
      "Audio visualization",
      "Export to various formats",
      "Real-time preview",
      "Custom parameters"
    ]
  },
  {
    title: "Visual Generator",
    description: "Create visual art from audio input",
    icon: Palette,
    href: "/apps/visual-generator",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    features: [
      "Real-time generation",
      "Multiple visual styles",
      "Audio input support",
      "Export capabilities"
    ]
  },
  {
    title: "Shader Park Builder",
    description: "Create beautiful shaders with an intuitive visual interface",
    icon: Shapes,
    href: "/apps/shader-builder",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    features: [
      "Visual shader editor",
      "Real-time preview",
      "Code generation",
      "Export options"
    ]
  }
];

export default function AppsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Interactive Apps
          </h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Explore our collection of music production and creative tools
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {apps.map((app, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${app.bgColor}`}>
                      <app.icon className={`h-6 w-6 ${app.color}`} />
                    </div>
                    <div>
                      <CardTitle>{app.title}</CardTitle>
                      <CardDescription>{app.description}</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {app.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Button asChild className="w-full">
                      <Link href={app.href}>
                        Launch App <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}