"use client"

import { signIn, signOut } from "next-auth/react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu"
import { LogIn, LogOut, UserPlus, Layout } from "lucide-react"

export default function Lists() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center mx-auto gap-4">
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
          <Link href="/dashboard" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="flex items-center gap-2">
                <Layout className="h-4 w-4" />
                <span>Dashboard</span>
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
      </NavigationMenuList>
    </NavigationMenu>
  )
}