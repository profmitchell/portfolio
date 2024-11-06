"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music2, Book, Play, Info } from "lucide-react";

export default function CohensConceptsApp() {
  const [selectedConcept, setSelectedConcept] = useState(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Cohen&apos;s Concepts</h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Interactive music theory learning platform
          </p>
        </div>

        <Tabs defaultValue="theory" className="space-y-8">
          <TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto">
            <TabsTrigger value="theory">Theory</TabsTrigger>
            <TabsTrigger value="practice">Practice</TabsTrigger>
          </TabsList>

          <TabsContent value="theory" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Music2 className="h-5 w-5" />
                    Scales
                  </CardTitle>
                  <CardDescription>
                    Learn about different types of scales and their applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Play className="mr-2 h-4 w-4" /> Start Learning
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="practice" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Book className="h-5 w-5" />
                    Scale Recognition
                  </CardTitle>
                  <CardDescription>
                    Practice identifying different scales by ear
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Play className="mr-2 h-4 w-4" /> Start Exercise
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}