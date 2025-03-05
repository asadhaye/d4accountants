'use client';

import { Skeleton } from "@/components/ui/skeleton";

export function CardSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton variant="card" />
      <div className="space-y-2">
        <Skeleton variant="text" className="w-[200px]" />
        <Skeleton variant="text" className="w-[160px]" />
      </div>
    </div>
  );
}

export function ArticleSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton variant="text" className="h-8 w-[250px]" />
      <Skeleton variant="text" className="w-[350px]" />
      <div className="space-y-3">
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" className="w-4/5" />
      </div>
    </div>
  );
}

export function TableRowSkeleton() {
  return (
    <div className="flex items-center space-x-4 py-3">
      <Skeleton variant="avatar" />
      <div className="space-y-2 flex-1">
        <Skeleton variant="text" className="w-[200px]" />
        <Skeleton variant="text" className="w-[150px]" />
      </div>
    </div>
  );
}

export function FormSkeleton() {
  return (
    <div className="space-y-4 w-full max-w-md">
      <Skeleton variant="text" className="h-8 w-[150px]" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-[100px]" />
    </div>
  );
}
