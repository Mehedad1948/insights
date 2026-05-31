"use client";

import { NuqsAdapter } from "nuqs/adapters/next/app";

import { QueryProvider, ThemeProvider } from "@/providers";

import { ModalProvider } from "./modal-provider";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <NuqsAdapter>
          <QueryProvider>
            <ModalProvider />
            {children}
          </QueryProvider>
      </NuqsAdapter>
    </ThemeProvider>
  );
}
