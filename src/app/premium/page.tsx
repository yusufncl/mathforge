"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  BookOpen,
  Check,
  Crown,
  Star,
  Users,
  GraduationCap,
  Zap,
  MessageCircle,
  FileText,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function PremiumPage() {
  const features = [
    {
      icon: <FileText className="h-5 w-5" />,
      title: "In-Depth Solutions",
      description:
        "Detailed step-by-step solutions with explanations for every problem",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Priority Support",
      description:
        "Get faster responses and dedicated support from our expert team",
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Exclusive Questions",
      description:
        "Access to MathForge-only premium questions and practice sets",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Advanced Analytics",
      description: "Detailed progress tracking and performance insights",
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: "Video Explanations",
      description: "High-quality video walkthroughs for complex problems",
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Unlimited Practice",
      description: "No limits on practice problems and mock exams",
    },
  ];

  const accountTypes = [
    {
      type: "Normal Account",
      icon: <Users className="h-6 w-6" />,
      description: "Perfect for individual learners",
      price: "£30",
      period: "per year",
      features: [
        "All premium features",
        "Unlimited access",
        "Priority support",
        "Advanced analytics",
      ],
    },
    {
      type: "Student Account",
      icon: <GraduationCap className="h-6 w-6" />,
      description: "Designed for A-Level & IB students",
      price: "£30",
      period: "per year",
      features: [
        "All premium features",
        "Student-focused content",
        "Exam preparation tools",
        "Study group access",
      ],
      popular: true,
    },
    {
      type: "Educational Account",
      icon: <BookOpen className="h-6 w-6" />,
      description: "For teachers and educational institutions",
      price: "£30",
      period: "per year",
      features: [
        "All premium features",
        "Classroom management",
        "Student progress tracking",
        "Bulk assignment tools",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <h1 className="text-xl font-bold">MathForge</h1>
          </Link>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <Button variant="ghost" asChild>
              <Link href="/auth">Sign In</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Crown className="h-8 w-8 text-amber-500" />
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                MathForge <span className="text-amber-500">Premium</span>
              </h1>
            </div>
            <p className="text-lg leading-8 text-muted-foreground mb-10">
              Unlock the full potential of your mathematical journey with
              premium features, in-depth solutions, and exclusive content
              designed for excellence.
            </p>
          </div>
        </section>

        {/* Premium Features */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Premium Features
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to excel in A-Level and IB Mathematics
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/20">
                      <div className="text-amber-600 dark:text-amber-400">
                        {feature.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Choose Your Account Type
              </h2>
              <p className="text-lg text-muted-foreground">
                All account types include the same premium features at the same
                great price
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {accountTypes.map((account, index) => (
                <Card
                  key={index}
                  className={`relative ${account.popular ? "border-amber-500 shadow-lg scale-105" : ""}`}
                >
                  {account.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-amber-500 text-white px-3 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <div className="text-primary">{account.icon}</div>
                    </div>
                    <CardTitle className="text-xl">{account.type}</CardTitle>
                    <CardDescription className="mb-4">
                      {account.description}
                    </CardDescription>
                    <div className="text-center">
                      <span className="text-4xl font-bold">
                        {account.price}
                      </span>
                      <span className="text-muted-foreground ml-2">
                        {account.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {account.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${account.popular ? "bg-amber-500 hover:bg-amber-600" : ""}`}
                      asChild
                    >
                      <Link href="/auth">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Ready to Excel in Mathematics?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of students who have improved their grades with
                MathForge Premium
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/auth">Start Your Premium Journey</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/">Learn More</Link>
                </Button>
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
