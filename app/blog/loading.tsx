import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <div className="h-12 w-32 bg-muted rounded-lg animate-pulse mx-auto" />
          <div className="h-6 w-64 bg-muted rounded-lg animate-pulse mx-auto" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="flex flex-col">
              <CardHeader>
                <div className="h-6 w-3/4 bg-muted rounded-lg animate-pulse" />
                <div className="h-4 w-1/2 bg-muted rounded-lg animate-pulse mt-2" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-muted rounded-lg animate-pulse" />
                  <div className="h-4 w-5/6 bg-muted rounded-lg animate-pulse" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}