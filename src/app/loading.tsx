import { Skeleton } from "../components/ui/skeleton";
import { Card, CardContent, CardHeader } from "../components/ui/card";

const TableSkeleton = () => (
  <Card className="bg-card border-border">
    <CardHeader>
      <div className="flex items-center gap-3">
        <Skeleton className="h-8 w-8 rounded-md" />
        <div className="space-y-2">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-48" />
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="flex-1 space-y-1">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-16" />
            </div>
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default function Loading() {
  return (
    <main className="min-h-screen bg-background p-4 sm:p-6 md:p-8">
      <header className="mb-8 max-w-4xl">
         <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground">Pulse</h1>
        <p className="text-muted-foreground mt-2">The latest on-chain alpha, delivered in real-time.</p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TableSkeleton />
        <TableSkeleton />
        <TableSkeleton />
      </div>
    </main>
  );
}
