"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {signIn} from 'next-auth/react';

export function LoginForm({ className, ...props }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      setName("");
      setEmail("");
      setPassword("");

      return signIn(undefined, { callbackUrl: "/" });
    } catch (error) {
      console.error(error);
      alert("Failed to register user. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Register an account</h1>
        <p className="text-muted-foreground text-sm text-balance">Enter your email below to register an account</p>
      </div>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input onChange={(e) => setName(e.target.value)} id="name" type="text" name="name" placeholder="Adib Muhammad Maros" required />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-3">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" required />
          </div>
          <Button type="submit" className="w-full cursor-pointer">
            Register
          </Button>
        </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <a href="/api/auth/signin" className="underline underline-offset-4">
          Sign in
        </a>
      </div>
    </form>
  );
}
