"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useAuth } from "@/contexts/AuthContext";
import { ChevronRight, BookOpen, Crown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Topic {
  id: string;
  title: string;
  description: string;
  subtopics?: Topic[];
  totalQuestions?: number;
  completedQuestions?: number;
}

const allTopics: Topic[] = [
  {
    id: "calculus",
    title: "Calculus",
    description: "Differentiation, integration, and applications",
    totalQuestions: 45,
    completedQuestions: 32,
    subtopics: [
      {
        id: "calculus-differentiation",
        title: "Differentiation",
        description: "Rules and techniques for finding derivatives",
        totalQuestions: 15,
        completedQuestions: 12,
      },
      {
        id: "calculus-integration",
        title: "Integration",
        description: "Methods and applications of integration",
        totalQuestions: 20,
        completedQuestions: 15,
      },
      {
        id: "calculus-differential-equations",
        title: "Differential Equations",
        description: "Solving first and second order differential equations",
        totalQuestions: 10,
        completedQuestions: 5,
      },
    ],
  },
  {
    id: "algebra",
    title: "Algebra",
    description: "Equations, functions, and transformations",
    totalQuestions: 38,
    completedQuestions: 28,
    subtopics: [
      {
        id: "algebra-quadratics",
        title: "Quadratic Equations",
        description: "Solving and graphing quadratic equations",
        totalQuestions: 12,
        completedQuestions: 10,
      },
      {
        id: "algebra-functions",
        title: "Functions",
        description: "Domain, range, and function transformations",
        totalQuestions: 16,
        completedQuestions: 12,
      },
      {
        id: "algebra-logarithms",
        title: "Logarithms & Exponentials",
        description: "Properties and equations involving logarithms",
        totalQuestions: 10,
        completedQuestions: 6,
      },
    ],
  },
  {
    id: "statistics",
    title: "Statistics",
    description: "Data analysis, probability, and distributions",
    totalQuestions: 30,
    completedQuestions: 18,
    subtopics: [
      {
        id: "statistics-probability",
        title: "Probability",
        description: "Basic probability concepts and theorems",
        totalQuestions: 12,
        completedQuestions: 8,
      },
      {
        id: "statistics-distributions",
        title: "Probability Distributions",
        description: "Binomial, normal, and other distributions",
        totalQuestions: 10,
        completedQuestions: 6,
      },
      {
        id: "statistics-hypothesis-testing",
        title: "Hypothesis Testing",
        description: "Statistical tests and confidence intervals",
        totalQuestions: 8,
        completedQuestions: 4,
      },
    ],
  },
  {
    id: "mechanics",
    title: "Mechanics",
    description: "Forces, motion, and physical systems",
    totalQuestions: 25,
    completedQuestions: 10,
    subtopics: [
      {
        id: "mechanics-kinematics",
        title: "Kinematics",
        description: "Motion in one and two dimensions",
        totalQuestions: 10,
        completedQuestions: 5,
      },
      {
        id: "mechanics-forces",
        title: "Forces & Newton's Laws",
        description: "Applications of Newton's laws of motion",
        totalQuestions: 10,
        completedQuestions: 4,
      },
      {
        id: "mechanics-energy",
        title: "Work, Energy & Power",
        description: "Conservation of energy and related concepts",
        totalQuestions: 5,
        completedQuestions: 1,
      },
    ],
  },
];

export default function TopicsPage() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
  const { user } = useAuth();
  const router = useRouter();

  const handleTopicClick = (topicId: string) => {
    if (expandedTopic === topicId) {
      setExpandedTopic(null);
    } else {
      setExpandedTopic(topicId);
    }
  };

  const handleSubtopicClick = (topicId: string) => {
    // Navigate to topic detail page to show subtopics and questions
    router.push(`/topics/${topicId}`);
  };

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
        <Card className="w-full bg-white shadow-md">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl font-bold">
                  All Mathematics Topics
                </CardTitle>
                <CardDescription>
                  Explore A-Level and IB Mathematics topics. Sign in to track
                  your progress and access practice problems.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {allTopics.map((topic) => (
                <div
                  key={topic.id}
                  className="border rounded-lg overflow-hidden"
                >
                  <div
                    className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                    onClick={() => handleTopicClick(topic.id)}
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-blue-500" />
                      <div>
                        <h3 className="font-medium text-lg">{topic.title}</h3>
                        <p className="text-sm text-gray-500">
                          {topic.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <ChevronRight
                        className={`h-5 w-5 transition-transform ${expandedTopic === topic.id ? "rotate-90" : ""}`}
                      />
                    </div>
                  </div>

                  {expandedTopic === topic.id && topic.subtopics && (
                    <div className="bg-gray-50 border-t">
                      {topic.subtopics.map((subtopic) => (
                        <div
                          key={subtopic.id}
                          className="p-3 pl-12 border-b last:border-b-0 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                          onClick={() => handleSubtopicClick(subtopic.id)}
                        >
                          <div className="flex items-center gap-3">
                            <BookOpen className="h-4 w-4 text-blue-500" />
                            <div>
                              <h4 className="font-medium">{subtopic.title}</h4>
                              <p className="text-xs text-gray-500">
                                {subtopic.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 min-w-[120px]">
                            {subtopic.totalQuestions && (
                              <div className="flex flex-col items-end gap-1">
                                <div className="text-xs text-gray-500">
                                  {subtopic.completedQuestions || 0}/
                                  {subtopic.totalQuestions}
                                </div>
                                <Progress
                                  value={
                                    ((subtopic.completedQuestions || 0) /
                                      subtopic.totalQuestions) *
                                    100
                                  }
                                  className="h-2 w-20"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Ready to start learning?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {user
                      ? "Welcome back! You can now submit answers and track your progress."
                      : "Sign in to submit answers, track your progress, and join our community discussions."}
                  </p>
                  {!user && (
                    <Button asChild>
                      <Link href="/auth">Sign In to Get Started</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
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
