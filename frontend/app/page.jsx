"use client";

import IButton from "@/components/IComponents/IButton";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <IButton onClick={() => alert("HEY")}>Get Started</IButton>
    </main>
  );
}
