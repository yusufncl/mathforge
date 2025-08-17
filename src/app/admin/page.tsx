"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-10 w-full bg-background border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/dashboard" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <h1 className="text-xl font-bold">MathForge</h1>
          </Link>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <Card>
          <CardHeader>
            <CardTitle>Admin Panel</CardTitle>
            <CardDescription>
              Administrative features are currently under development.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>This page will contain admin functionality in the future.</p>
            <Button className="mt-4" asChild>
              <Link href="/dashboard">Back to Dashboard</Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
