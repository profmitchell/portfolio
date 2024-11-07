import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code, Music, Palette, Shapes } from "lucide-react";

export const metadata: Metadata = {
  title: 'Mitchell Cohen - Music Producer & Developer',
  description: 'Portfolio of Mitchell Cohen - Music Producer, Developer, and Visual Artist',
};

const apps = [
  {
    title: "Shader Builder",
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
  },
  // ... other apps
];

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Creative Tools & Apps
          </h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            A collection of tools for music production, visual art, and creative coding
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {apps.map((app) => (
            <Link key={app.title} href={app.href}>
              <div className="group relative overflow-hidden rounded-lg border p-6 hover:shadow-lg transition-all">
                <div className={`absolute inset-[-150%] -z-10 h-[400%] w-[400%] rotate-45 ${app.bgColor} opacity-50 transition-all group-hover:scale-150`} />
                <div className={`inline-flex rounded-lg ${app.bgColor} p-3 ${app.color}`}>
                  <app.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold">{app.title}</h3>
                <p className="mt-2 text-muted-foreground">{app.description}</p>
                <ul className="mt-4 space-y-2">
                  {app.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}