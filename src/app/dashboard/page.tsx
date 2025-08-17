"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useAuth } from "@/contexts/AuthContext";
import PomodoroTimer from "@/components/PomodoroTimer";

import {
  BookOpen,
  BookMarked,
  MessageSquare,
  BarChart2,
  Clock,
  Star,
  TrendingUp,
  Crown,
  Flame,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Mock daily question - in a real app this would come from the backend
const getDailyQuestion = () => {
  const today = new Date().toDateString();
  // Simple hash to get consistent daily question
  const hash = today.split("").reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);

  const questions = [
    "Find the derivative of f(x) = x³ + 2x² - 5x + 1",
    "Solve the equation: 2x² - 8x + 6 = 0",
    "Calculate the integral of ∫(3x² + 4x - 2)dx",
    "Find the probability of getting exactly 3 heads in 5 coin flips",
    "Determine the limit: lim(x→2) (x² - 4)/(x - 2)",
  ];

  return questions[Math.abs(hash) % questions.length];
};

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  const dailyQuestion = getDailyQuestion();
  const currentStreak = 7; // Mock streak data

  // Mock data for the dashboard
  const recentTopics = [
    { id: 1, name: "Differentiation", progress: 75 },
    { id: 2, name: "Integration", progress: 45 },
    { id: 3, name: "Vectors", progress: 90 },
    { id: 4, name: "Probability", progress: 60 },
  ];

  const recommendedTopics = [
    { id: 5, name: "Differential Equations" },
    { id: 6, name: "Complex Numbers" },
    { id: 7, name: "Statistical Hypothesis Testing" },
  ];

  const recentDiscussions = [
    {
      id: 1,
      title: "Help with integration by parts",
      replies: 5,
      topic: "Integration",
    },
    {
      id: 2,
      title: "Solving differential equations",
      replies: 3,
      topic: "Differential Equations",
    },
    {
      id: 3,
      title: "Understanding vector products",
      replies: 8,
      topic: "Vectors",
    },
  ];

  const overallProgress = 68;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background border-b">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-6">
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
            <Link href="/admin" className="text-sm font-medium">
              Admin
            </Link>
            <Link
              href="/premium"
              className="text-sm font-medium flex items-center gap-1 text-amber-600 dark:text-amber-400"
            >
              <Crown className="h-4 w-4" />
              Premium
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <PomodoroTimer />
            <Button variant="outline" size="sm">
              Profile
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 container py-6">
        <div className="grid gap-6 md:grid-cols-6">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex flex-col space-y-2">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 px-3 py-2 bg-accent rounded-md"
              >
                <BarChart2 className="h-4 w-4" />
                <span className="text-sm font-medium">Dashboard</span>
              </Link>
              <Link
                href="/topics"
                className="flex items-center gap-2 px-3 py-2 hover:bg-accent rounded-md"
              >
                <BookMarked className="h-4 w-4" />
                <span className="text-sm font-medium">Topics</span>
              </Link>
              <Link
                href="/solutions"
                className="flex items-center gap-2 px-3 py-2 hover:bg-accent rounded-md"
              >
                <Star className="h-4 w-4" />
                <span className="text-sm font-medium">Solutions</span>
              </Link>
              <Link
                href="/practice"
                className="flex items-center gap-2 px-3 py-2 hover:bg-accent rounded-md"
              >
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-medium">Practice</span>
              </Link>
              <Link
                href="/forum"
                className="flex items-center gap-2 px-3 py-2 hover:bg-accent rounded-md"
              >
                <MessageSquare className="h-4 w-4" />
                <span className="text-sm font-medium">Forum</span>
              </Link>
            </div>
            <Separator />
            <div className="p-3 bg-muted rounded-md">
              <h3 className="text-sm font-medium mb-2">Overall Progress</h3>
              <Progress value={overallProgress} className="h-2 mb-2" />
              <p className="text-xs text-muted-foreground">
                {overallProgress}% Complete
              </p>
            </div>
          </div>

          {/* Main Dashboard Content */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Current Streak
                  </CardTitle>
                  <Flame className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-500">
                    {currentStreak}
                  </div>
                  <p className="text-xs text-muted-foreground">days in a row</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Topics Completed
                  </CardTitle>
                  <BookMarked className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12/32</div>
                  <p className="text-xs text-muted-foreground">
                    37.5% of total topics
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Problems Solved
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">248</div>
                  <p className="text-xs text-muted-foreground">
                    +22 from last week
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Forum Activity
                  </CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18</div>
                  <p className="text-xs text-muted-foreground">
                    Posts and replies this month
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Daily Question Card */}
            <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-orange-200 dark:border-orange-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Flame className="h-5 w-5 text-orange-500" />
                    <CardTitle className="text-lg">Daily Challenge</CardTitle>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-orange-600 border-orange-600"
                  >
                    Keep your streak!
                  </Badge>
                </div>
                <CardDescription>
                  Complete today's question to maintain your {currentStreak}-day
                  streak
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-white dark:bg-gray-900 rounded-md mb-4">
                  <p className="font-mono text-sm">{dailyQuestion}</p>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Solve Daily Question
                </Button>
              </CardContent>
            </Card>

            {/* Tabs for different sections */}
            <Tabs defaultValue="recent">
              <TabsList>
                <TabsTrigger value="recent">Recent Activity</TabsTrigger>
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
              </TabsList>

              {/* Recent Activity Tab */}
              <TabsContent value="recent" className="space-y-4">
                <h3 className="text-lg font-medium">Recently Viewed Topics</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {recentTopics.map((topic) => {
                    // Map topic names to correct route IDs
                    const topicRouteMap: Record<string, string> = {
                      Differentiation: "calculus-differentiation",
                      Integration: "calculus-integration",
                      Vectors: "algebra-vectors",
                      Probability: "statistics-probability",
                    };
                    const routeId =
                      topicRouteMap[topic.name] ||
                      topic.name.toLowerCase().replace(/\s+/g, "-");

                    return (
                      <Link key={topic.id} href={`/topics/${routeId}`}>
                        <Card className="cursor-pointer hover:shadow-md transition-shadow">
                          <CardHeader className="pb-2">
                            <CardTitle>{topic.name}</CardTitle>
                            <CardDescription className="flex items-center gap-2">
                              <Clock className="h-3 w-3" /> Last viewed 2 days
                              ago
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm">Progress</span>
                              <span className="text-sm font-medium">
                                {topic.progress}%
                              </span>
                            </div>
                            <Progress value={topic.progress} className="h-2" />
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </TabsContent>

              {/* Recommended Tab */}
              <TabsContent value="recommended" className="space-y-4">
                <h3 className="text-lg font-medium">Recommended Topics</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {recommendedTopics.map((topic) => (
                    <Card key={topic.id}>
                      <CardHeader>
                        <CardTitle>{topic.name}</CardTitle>
                        <CardDescription>
                          Recommended based on your progress
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between">
                          <Button size="sm">Start Learning</Button>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Discussions Tab */}
              <TabsContent value="discussions" className="space-y-4">
                <h3 className="text-lg font-medium">Recent Discussions</h3>
                <div className="space-y-4">
                  {recentDiscussions.map((discussion) => (
                    <Card key={discussion.id}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">
                          {discussion.title}
                        </CardTitle>
                        <CardDescription>
                          Topic: {discussion.topic}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">
                            {discussion.replies} replies
                          </span>
                          <Button size="sm" variant="outline">
                            View Discussion
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <div className="flex justify-center">
                    <Button variant="outline">View All Discussions</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Math Roadmap. All rights reserved.
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
