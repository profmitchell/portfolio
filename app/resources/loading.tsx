export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <div className="animate-pulse space-y-8">
        <div className="h-8 bg-muted rounded w-1/3 mx-auto"></div>
        <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-64 bg-muted rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );
}