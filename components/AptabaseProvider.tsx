"use client";

import { AptabaseProvider as BaseProvider } from "@aptabase/react";
import { ReactNode } from "react";

interface AptabaseProviderProps {
  children: ReactNode;
}

export function AptabaseProvider({ children }: AptabaseProviderProps) {
  const key = process.env.NEXT_PUBLIC_APTABASE_KEY;

  if (!key) {
    if (process.env.NODE_ENV === "development") {
      console.warn("Aptabase key not found in environment variables.");
    }
    return <>{children}</>;
  }

  return (
    <BaseProvider appKey={key}>
      {children}
    </BaseProvider>
  );
}
