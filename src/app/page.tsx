"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useAuth } from "@/contexts/AuthContext";
import {
  BookOpen,
  ArrowRight,
  Users,
  Star,
  TrendingUp,
  Crown,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link
            href={user ? "/dashboard" : "/"}
            className="flex items-center gap-2"
          >
            <BookOpen className="h-6 w-6" />
            <h1 className="text-xl font-bold">MathForge</h1>
          </Link>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <Button variant="ghost" asChild>
              <Link href="/auth">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/premium">
                <Crown className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="container py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              MathForge <span className="text-primary">Roadmap</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Interactive roadmap with comprehensive topic coverage,
              high-quality A* solutions, and community discussion features. Your
              path to mathematical excellence starts here.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/topics">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need to excel
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Comprehensive tools and resources designed specifically for
                A-Level and IB mathematics students.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-5xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">
                    Topic Navigator
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Visual roadmap showing all topics with progress tracking and
                    difficulty indicators.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">
                    Solution Library
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Searchable database of A* quality written solutions and
                    video explanations.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">
                    Discussion Forum
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Topic-specific areas where students collaborate on
                    problem-solving.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Practice Mode</h3>
                  <p className="mt-2 text-muted-foreground">
                    Interactive problem sets with hints and step-by-step
                    solution reveals.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">
                    Personal Dashboard
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Track progress, bookmark problems, and receive personalized
                    recommendations.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">
                    Quality Content
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    All content reviewed by experienced mathematics educators
                    and top students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} MathForge. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/help">Help</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
