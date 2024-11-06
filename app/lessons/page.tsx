"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music, Users, Laptop, Clock } from "lucide-react";

const services = [
  {
    title: "Private Lessons",
    description: "One-on-one instruction tailored to your goals",
    icon: Music,
    price: "$75/hour",
    features: [
      "Personalized curriculum",
      "Flexible scheduling",
      "All skill levels welcome",
      "Virtual or in-person options"
    ]
  },
  {
    title: "Group Workshops",
    description: "Learn with peers in an interactive environment",
    icon: Users,
    price: "$45/person",
    features: [
      "Small group sizes (4-6 people)",
      "Topic-focused sessions",
      "Collaborative learning",
      "Monthly workshops"
    ]
  },
  {
    title: "Production Consulting",
    description: "Professional guidance for your music projects",
    icon: Laptop,
    price: "$100/hour",
    features: [
      "Project review and feedback",
      "Technical assistance",
      "Mix consultation",
      "Career guidance"
    ]
  }
];

export default function LessonsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Book Lessons</h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Learn music production, sound design, and more through personalized instruction
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.price}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Clock className="mr-2 h-4 w-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardContent className="pt-0">
                  <Button className="w-full">Book Now</Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Schedule a Session</CardTitle>
            <CardDescription>Select a date and time that works for you</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="calendar" className="space-y-4">
              <TabsList>
                <TabsTrigger value="calendar">Calendar</TabsTrigger>
                <TabsTrigger value="availability">Availability</TabsTrigger>
              </TabsList>
              <TabsContent value="calendar" className="space-y-4">
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
              </TabsContent>
              <TabsContent value="availability" className="space-y-4">
                <div className="grid gap-2">
                  {["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"].map((time) => (
                    <Button key={time} variant="outline" className="w-full justify-start">
                      <Clock className="mr-2 h-4 w-4" /> {time}
                    </Button>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}