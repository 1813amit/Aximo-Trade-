"use client";

import { Button } from "../components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-background p-4">
      <h2 className="font-headline text-2xl font-bold mb-4 text-destructive-foreground">Something went wrong!</h2>
      <p className="text-muted-foreground mb-6 max-w-md">
        We've encountered an unexpected issue. You can try to refresh the page or click the button below to try again.
      </p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
