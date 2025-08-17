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
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, CheckCircle, AlertCircle } from "lucide-react";

interface Topic {
  id: string;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  completed: boolean;
  progress: number;
}

interface TopicRoadmapProps {
  topics?: Topic[];
  onTopicSelect?: (topicId: string) => void;
}

const defaultTopics: Topic[] = [
  {
    id: "calculus",
    title: "Calculus",
    description: "Differentiation, integration, and applications",
    difficulty: "medium",
    completed: false,
    progress: 35,
  },
  {
    id: "algebra",
    title: "Algebra",
    description: "Equations, functions, and transformations",
    difficulty: "medium",
    completed: false,
    progress: 75,
  },
  {
    id: "statistics",
    title: "Statistics",
    description: "Data analysis, probability, and distributions",
    difficulty: "medium",
    completed: false,
    progress: 20,
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "easy":
      return "bg-green-100 text-green-800 hover:bg-green-200";
    case "medium":
      return "bg-amber-100 text-amber-800 hover:bg-amber-200";
    case "hard":
      return "bg-red-100 text-red-800 hover:bg-red-200";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200";
  }
};

const TopicRoadmap: React.FC<TopicRoadmapProps> = ({
  topics = defaultTopics,
  onTopicSelect = () => {},
}) => {
  return (
    <Card className="w-full bg-white shadow-md">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl font-bold">
              Mathematics Roadmap
            </CardTitle>
            <CardDescription>
              Track your progress through A-Level and IB Mathematics topics
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm text-muted-foreground">
              Overall Progress: <span className="font-medium">42%</span>
            </div>
            <Progress value={42} className="w-32" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {topics.map((topic) => (
            <div key={topic.id} className="border rounded-lg overflow-hidden">
              <div
                className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                onClick={() => onTopicSelect(topic.id)}
              >
                <div className="flex items-center gap-3">
                  {topic.completed ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <BookOpen className="h-5 w-5 text-blue-500" />
                  )}
                  <div>
                    <h3 className="font-medium text-lg flex items-center gap-2">
                      {topic.title}
                      <Badge
                        className={`${getDifficultyColor(topic.difficulty)} font-normal text-xs`}
                      >
                        {topic.difficulty}
                      </Badge>
                    </h3>
                    <p className="text-sm text-gray-500">{topic.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      {topic.progress}%
                    </span>
                    <Progress value={topic.progress} className="w-24" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {topics.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <AlertCircle className="h-12 w-12 text-gray-300 mb-3" />
              <h3 className="text-lg font-medium text-gray-900">
                No topics found
              </h3>
              <p className="text-gray-500 mt-1">
                No topics available at the moment.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopicRoadmap;
