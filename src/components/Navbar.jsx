"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { LogIn, LogOut, UserPlus, Layout } from "lucide-react";

export default function Navbar({ session }) {
  // Now using session passed as a prop instead of useSession hook
  
  return (
    <div className="w-full bg-background border-b sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="flex items-center justify-between w-full py-2">
            <div className="flex items-center gap-4">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <span className="font-bold">Home</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              {session && (
                <NavigationMenuItem>
                  <Link href="/dashboard" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <div className="flex items-center gap-2">
                        <Layout className="h-4 w-4" />
                        <span>Dashboard</span>
                      </div>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              {!session ? (
                <>
                  <NavigationMenuItem>
                    <Link href="/register" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="flex items-center gap-2">
                          <UserPlus className="h-4 w-4" />
                          <span>Register</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => signIn()}
                      className="flex items-center gap-2"
                    >
                      <LogIn className="h-4 w-4" />
                      <span>Sign In</span>
                    </Button>
                  </NavigationMenuItem>
                </>
              ) : (
                <NavigationMenuItem>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => signOut()}
                    className="flex items-center gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </Button>
                </NavigationMenuItem>
              )}
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}