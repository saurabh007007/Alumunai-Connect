"use client";

import type React from "react";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
            <span className="hidden font-bold sm:inline-block">connect</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="flex items-center space-x-2">
            {isSignedIn ? (
              <>
                <Button variant="ghost" asChild className="px-3 py-2">
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <>
                <Button variant="ghost" asChild className="px-3 py-2">
                  <Link href="/sign-in">Sign In</Link>
                </Button>
                <Button asChild className="px-3 py-2">
                  <Link href="/sign-up">Sign Up</Link>
                </Button>
              </>
            )}
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
