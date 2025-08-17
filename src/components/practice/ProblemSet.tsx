"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  ChevronLeft,
  HelpCircle,
  CheckCircle,
  XCircle,
  BookOpen,
} from "lucide-react";

interface Problem {
  id: string;
  question: string;
  difficulty: "easy" | "medium" | "hard";
  marks: number;
  hints: string[];
  solution: string;
}

interface ProblemSetProps {
  title?: string;
  topic?: string;
  problems?: Problem[];
  onComplete?: () => void;
}

export default function ProblemSet({
  title = "Calculus Problem Set",
  topic = "Differentiation",
  problems = [
    {
      id: "prob-1",
      question: "Find the derivative of f(x) = 3x² + 2x - 5",
      difficulty: "easy",
      marks: 3,
      hints: [
        "Remember the power rule for differentiation.",
        "For a term ax^n, the derivative is nax^(n-1).",
      ],
      solution: "f'(x) = 6x + 2",
    },
  ],
  onComplete = () => {},
}: ProblemSetProps) {
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showHints, setShowHints] = useState<Record<string, number>>({});
  const [feedback, setFeedback] = useState<
    Record<string, "correct" | "incorrect" | null>
  >({});

  const currentProblem = problems[currentProblemIndex];
  const progress = ((currentProblemIndex + 1) / problems.length) * 100;

  const handleAnswerChange = (answer: string) => {
    setUserAnswers({
      ...userAnswers,
      [currentProblem.id]: answer,
    });
  };

  const showNextHint = () => {
    const currentHintIndex = showHints[currentProblem.id] || 0;
    if (currentHintIndex < currentProblem.hints.length) {
      setShowHints({
        ...showHints,
        [currentProblem.id]: currentHintIndex + 1,
      });
    }
  };

  const checkAnswer = () => {
    const isCorrect = Math.random() > 0.5;
    setFeedback({
      ...feedback,
      [currentProblem.id]: isCorrect ? "correct" : "incorrect",
    });
  };

  const nextProblem = () => {
    if (currentProblemIndex < problems.length - 1) {
      setCurrentProblemIndex(currentProblemIndex + 1);
    } else {
      onComplete();
    }
  };

  const prevProblem = () => {
    if (currentProblemIndex > 0) {
      setCurrentProblemIndex(currentProblemIndex - 1);
    }
  };

  const getDifficultyVariant = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "secondary";
      case "medium":
        return "default";
      case "hard":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-background">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-muted-foreground">Topic: {topic}</p>
        <div className="mt-2">
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-right mt-1">
            Problem {currentProblemIndex + 1} of {problems.length}
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CardTitle className="text-xl">
                Problem {currentProblemIndex + 1}
              </CardTitle>
              <div className="flex items-center gap-2">
                <Badge
                  variant={getDifficultyVariant(currentProblem.difficulty)}
                >
                  {currentProblem.difficulty}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {currentProblem.marks} marks
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-md">
              <div className="text-lg">{currentProblem.question}</div>
            </div>

            {/* Hints section */}
            {showHints[currentProblem.id] &&
              showHints[currentProblem.id] > 0 && (
                <div className="mt-4">
                  <h4 className="font-medium mb-2 flex items-center">
                    <HelpCircle className="h-4 w-4 mr-1" />
                    Hints:
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {currentProblem.hints
                      .slice(0, showHints[currentProblem.id])
                      .map((hint, index) => (
                        <li key={index} className="text-sm">
                          {hint}
                        </li>
                      ))}
                  </ul>
                </div>
              )}

            {/* Answer input */}
            <div className="mt-4">
              <h4 className="font-medium mb-2">Your Answer:</h4>
              <Textarea
                placeholder="Enter your solution here..."
                value={userAnswers[currentProblem.id] || ""}
                onChange={(e) => handleAnswerChange(e.target.value)}
                rows={4}
                className="w-full"
              />
            </div>

            {/* Feedback alert */}
            {feedback[currentProblem.id] && (
              <div
                className={`mt-4 p-3 rounded-md ${
                  feedback[currentProblem.id] === "correct"
                    ? "bg-green-50 border border-green-200"
                    : "bg-red-50 border border-red-200"
                }`}
              >
                <div className="flex items-center">
                  {feedback[currentProblem.id] === "correct" ? (
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-500 mr-2" />
                  )}
                  <span>
                    {feedback[currentProblem.id] === "correct"
                      ? "Correct! Well done."
                      : "Not quite right. Try again or check the solution."}
                  </span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div>
            <Button
              variant="outline"
              onClick={prevProblem}
              disabled={currentProblemIndex === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-1" /> Previous
            </Button>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              onClick={showNextHint}
              disabled={
                (showHints[currentProblem.id] || 0) >=
                currentProblem.hints.length
              }
            >
              <HelpCircle className="h-4 w-4 mr-1" /> Hint
            </Button>
            <Button onClick={checkAnswer}>Check Answer</Button>
            <Button variant="outline" onClick={nextProblem}>
              {currentProblemIndex < problems.length - 1 ? (
                <>
                  Next <ChevronRight className="h-4 w-4 ml-1" />
                </>
              ) : (
                "Complete"
              )}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
