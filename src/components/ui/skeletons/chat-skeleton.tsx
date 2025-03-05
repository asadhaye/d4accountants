'use client';

import { Skeleton } from "@/components/ui/skeleton";

export function ChatMessageSkeleton() {
  return (
    <div className="flex items-start space-x-4 p-4">
      <Skeleton variant="avatar" />
      <div className="space-y-2 flex-1">
        <Skeleton variant="text" className="w-[100px]" />
        <Skeleton className="h-20 w-full rounded-lg" />
      </div>
    </div>
  );
}

export function ChatInterfaceSkeleton() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="space-y-4">
        <Skeleton className="h-8 w-[200px] mx-auto" />
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <ChatMessageSkeleton key={i} />
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-10" />
        </div>
      </div>
    </div>
  );
}
