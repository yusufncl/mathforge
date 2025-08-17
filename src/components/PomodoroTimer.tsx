"use client";

import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

interface PomodoroTimerProps {
  className?: string;
}

export default function PomodoroTimer({ className = "" }: PomodoroTimerProps) {
  return (
    <Button variant="ghost" size="sm" className={className}>
      <Clock className="h-5 w-5" />
    </Button>
  );
}
