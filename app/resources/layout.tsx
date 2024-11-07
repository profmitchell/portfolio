"use client";

import { Suspense } from "react";

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-12 text-center">
        Loading resources...
      </div>
    }>
      {children}
    </Suspense>
  );
}