"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Share2, Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SolutionViewerProps {
  problemId?: string;
  problemTitle?: string;
  problemDescription?: string;
  difficulty?: "easy" | "medium" | "hard" | "expert";
  topic?: string;
  solution?: string;
}

const SolutionViewer = ({
  problemId = "prob-123",
  problemTitle = "Integration by Parts",
  problemDescription = "Evaluate the integral using integration by parts.",
  difficulty = "medium",
  topic = "Calculus",
  solution = "Step 1: Apply integration by parts formula...\nStep 2: Simplify the result...",
}: SolutionViewerProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "hard":
        return "bg-orange-500";
      case "expert":
        return "bg-red-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="bg-background w-full max-w-5xl mx-auto rounded-xl shadow-lg">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl font-bold">
                {problemTitle}
              </CardTitle>
              <CardDescription className="mt-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{topic}</Badge>
                  <div
                    className={`h-2 w-2 rounded-full ${getDifficultyColor(difficulty)}`}
                  />
                  <span className="text-sm">
                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </span>
                </div>
              </CardDescription>
            </div>
            <Button variant="ghost" size="icon">
              <Bookmark />
            </Button>
          </div>
          <div className="mt-2 p-4 bg-muted rounded-md">
            <p className="font-mono">{problemDescription}</p>
          </div>
        </CardHeader>

        <CardContent>
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Solution</h3>
            <div className="font-mono whitespace-pre-line">{solution}</div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between border-t pt-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Button variant="ghost" size="sm">
                <ThumbsUp className="h-4 w-4 mr-1" />
                Helpful
              </Button>
              <Button variant="ghost" size="sm">
                <ThumbsDown className="h-4 w-4 mr-1" />
                Not Helpful
              </Button>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-1" /> Share
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SolutionViewer;
