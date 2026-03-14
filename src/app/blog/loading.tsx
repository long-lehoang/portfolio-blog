export default function BlogLoading() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="h-10 w-32 bg-muted rounded-lg mx-auto mb-4 animate-pulse" />
        <div className="h-5 w-64 bg-muted rounded-lg mx-auto mb-12 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-xl bg-card border border-border p-6 animate-pulse"
            >
              <div className="h-4 w-24 bg-muted rounded mb-3" />
              <div className="h-6 w-3/4 bg-muted rounded mb-2" />
              <div className="h-4 w-full bg-muted rounded mb-2" />
              <div className="h-4 w-2/3 bg-muted rounded mb-4" />
              <div className="flex gap-2">
                <div className="h-5 w-16 bg-muted rounded-full" />
                <div className="h-5 w-16 bg-muted rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
