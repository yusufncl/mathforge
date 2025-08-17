"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/icons";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useAuth } from "@/contexts/AuthContext";
import { BookOpen, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AuthPage() {
  const [showEmailSignIn, setShowEmailSignIn] = useState(false);
  const [showEmailSignUp, setShowEmailSignUp] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { signUp, signIn, signInWithProvider } = useAuth();
  const router = useRouter();

  const handleSocialAuth = async (provider: "google" | "github") => {
    try {
      setLoading(true);
      setError(null);
      const { error } = await signInWithProvider(provider);
      if (error) {
        setError(error.message);
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      setLoading(true);
      setError(null);
      const { error } = await signIn(email, password);
      if (error) {
        setError(error.message);
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const { error } = await signUp(email, password);
      if (error) {
        setError(error.message);
      } else {
        setError(null);
        alert("Check your email for the confirmation link!");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (showEmailSignIn) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-10 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="container flex h-16 items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              <h1 className="text-xl font-bold">MathForge</h1>
            </div>
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              <Button variant="ghost" asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Sign In Form */}
        <main className="flex-1 flex items-center justify-center py-12">
          <div className="mx-auto max-w-md w-full">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Sign In</CardTitle>
                <CardDescription>
                  Enter your email and password to sign in
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleEmailSignIn} className="space-y-4">
                  {error && (
                    <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
                      {error}
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      required
                      disabled={loading}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Signing In..." : "Sign In"}
                  </Button>
                </form>
                <div className="mt-4 text-center">
                  <Button
                    variant="link"
                    className="p-0 h-auto"
                    onClick={() => setShowEmailSignIn(false)}
                  >
                    Back to login options
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  if (showEmailSignUp) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-10 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="container flex h-16 items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              <h1 className="text-xl font-bold">MathForge</h1>
            </div>
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              <Button variant="ghost" asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Sign Up Form */}
        <main className="flex-1 flex items-center justify-center py-12">
          <div className="mx-auto max-w-md w-full">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Create Account</CardTitle>
                <CardDescription>
                  Enter your details to create a new account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleEmailSignUp} className="space-y-4">
                  {error && (
                    <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
                      {error}
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Create a password"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      required
                      disabled={loading}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
                <div className="mt-4 text-center">
                  <Button
                    variant="link"
                    className="p-0 h-auto"
                    onClick={() => setShowEmailSignUp(false)}
                  >
                    Back to social login options
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <h1 className="text-xl font-bold">MathForge</h1>
          </div>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <Button variant="ghost" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Authentication Options */}
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="mx-auto max-w-md w-full">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                {isSignUp ? "Get Started" : "Welcome Back"}
              </CardTitle>
              <CardDescription>
                {isSignUp
                  ? "Create your account to begin your mathematics journey"
                  : "Sign in to continue your mathematics journey"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                {error && (
                  <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md mb-4">
                    {error}
                  </div>
                )}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleSocialAuth("google")}
                  disabled={loading}
                >
                  <Icons.google className="mr-2 h-4 w-4" />
                  Continue with Google
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleSocialAuth("github")}
                  disabled={loading}
                >
                  <Icons.gitHub className="mr-2 h-4 w-4" />
                  Continue with GitHub
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or
                  </span>
                </div>
              </div>
              {isSignUp ? (
                <Button
                  className="w-full"
                  onClick={() => setShowEmailSignUp(true)}
                >
                  Continue with Email
                </Button>
              ) : (
                <Button
                  className="w-full"
                  onClick={() => setShowEmailSignIn(true)}
                >
                  Sign in with Email
                </Button>
              )}
            </CardContent>
          </Card>
          <div className="mt-4 text-center text-sm">
            <span className="text-muted-foreground">
              {isSignUp
                ? "Already have an account? "
                : "Don't have an account? "}
            </span>
            <Button
              variant="link"
              className="p-0 h-auto"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign in" : "Sign up"}
            </Button>
          </div>
        </div>
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
