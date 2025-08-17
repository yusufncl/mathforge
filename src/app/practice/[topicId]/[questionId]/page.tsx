"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useAuth } from "@/contexts/AuthContext";
import { BookOpen, Crown, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function QuestionPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const topicId = params.topicId as string;
  const questionId = params.questionId as string;

  if (!user) {
    router.push("/auth");
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full bg-background border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/dashboard" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <h1 className="text-xl font-bold">MathForge</h1>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
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
          </nav>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container py-6">
        <div className="w-full max-w-4xl mx-auto">
          <div className="mb-6">
            <Button
              variant="ghost"
              onClick={() => router.push(`/topics/${topicId}`)}
              className="mb-4"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Questions
            </Button>

            <h2 className="text-2xl font-bold">Question {questionId}</h2>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Practice Question</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                This question is currently being developed. Check back soon for
                interactive practice problems.
              </p>
              <Button onClick={() => router.push(`/topics/${topicId}`)}>
                Back to Topic
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
