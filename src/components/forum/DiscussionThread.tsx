"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { ThumbsUp, MessageSquare, Flag, Share2 } from "lucide-react";

interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  votes: number;
  isAnswer: boolean;
}

interface DiscussionThreadProps {
  id?: string;
  title?: string;
  content?: string;
  author?: {
    name: string;
    avatar: string;
  };
  timestamp?: string;
  tags?: string[];
  votes?: number;
  views?: number;
  comments?: Comment[];
}

export default function DiscussionThread({
  id = "1",
  title = "How do I solve this integration by parts problem?",
  content = "I'm struggling with this integration by parts problem. Can someone help me understand the steps?",
  author = {
    name: "MathStudent123",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MathStudent123",
  },
  timestamp = "2 hours ago",
  tags = ["calculus", "integration", "a-level"],
  votes = 5,
  views = 42,
  comments = [],
}: DiscussionThreadProps) {
  return (
    <div className="w-full max-w-4xl mx-auto bg-background p-4 rounded-lg">
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold">{title}</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <span>Asked {timestamp}</span>
                <span>•</span>
                <span>Viewed {views} times</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Button
                variant="ghost"
                size="sm"
                className="flex flex-col items-center"
              >
                <ThumbsUp className="h-5 w-5" />
                <span className="mt-1">{votes}</span>
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-muted">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none">
            <p className="whitespace-pre-line">{content}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{author.name}</span>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4 mr-1" /> Share
            </Button>
            <Button variant="ghost" size="sm">
              <Flag className="h-4 w-4 mr-1" /> Report
            </Button>
          </div>
        </CardFooter>
      </Card>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">
          {comments.length} Answers
        </h3>
        {comments.length === 0 && (
          <p className="text-muted-foreground">
            No answers yet. Be the first to help!
          </p>
        )}
      </div>
    </div>
  );
}
