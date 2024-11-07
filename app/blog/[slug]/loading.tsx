export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="h-10 w-32 bg-muted rounded-lg animate-pulse mb-8" />
        
        <div className="rounded-lg border p-8 space-y-8">
          <div className="space-y-4">
            <div className="h-12 w-3/4 bg-muted rounded-lg animate-pulse" />
            <div className="flex gap-4">
              <div className="h-6 w-24 bg-muted rounded-lg animate-pulse" />
              <div className="h-6 w-24 bg-muted rounded-lg animate-pulse" />
              <div className="h-6 w-24 bg-muted rounded-lg animate-pulse" />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="h-4 w-full bg-muted rounded-lg animate-pulse" />
            <div className="h-4 w-5/6 bg-muted rounded-lg animate-pulse" />
            <div className="h-4 w-4/5 bg-muted rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}