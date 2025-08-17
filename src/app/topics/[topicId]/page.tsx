"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useAuth } from "@/contexts/AuthContext";
import { ChevronLeft, BookOpen, Crown } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function TopicDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const topicId = params.topicId as string;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navigation */}
      {user && (
        <nav className="bg-background border-b">
          <div className="container flex items-center gap-6 py-3">
            <Link href="/dashboard" className="text-sm font-medium">
              Dashboard
            </Link>
            <Link href="/topics" className="text-sm font-medium">
              Topics
            </Link>
            <Link href="/solutions" className="text-sm font-medium">
              Solutions
            </Link>
            <Link href="/practice" className="text-sm font-medium">
              Practice
            </Link>
            <Link href="/forum" className="text-sm font-medium">
              Forum
            </Link>
            <Link
              href="/premium"
              className="text-sm font-medium flex items-center gap-1 text-amber-600 dark:text-amber-400"
            >
              <Crown className="h-4 w-4" />
              Premium
            </Link>
            {!user && (
              <Button asChild>
                <Link href="/auth">Sign In</Link>
              </Button>
            )}
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className="flex-1 container py-6">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => router.push("/topics")}
            className="mb-4"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Topics
          </Button>

          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">
              {topicId
                .replace("-", " ")
                .replace(/\b\w/g, (l) => l.toUpperCase())}
            </h1>
            <p className="text-muted-foreground text-lg">
              Practice questions and resources for this topic.
            </p>
          </div>
        </div>

        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">Topic Content</CardTitle>
            <CardDescription>
              This topic page is currently under development.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Practice questions and detailed explanations will be available
              here soon.
            </p>
            {!user && (
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Sign in to start practicing
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Create an account to access practice questions, track your
                    progress, and get personalized recommendations.
                  </p>
                  <Button asChild>
                    <Link href="/auth">Sign In to Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
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
