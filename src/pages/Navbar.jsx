import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Navbar= ()=> {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium ">
                <a href="#" className="flex items-center gap-2 text-lg font-semibold">
                  <span>Your Brand</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Home
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Features
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  About
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span>Your Brand</span>
          </a>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="transition-colors hover:text-foreground text-foreground/80">
              Home
            </a>
            <a href="#" className="transition-colors hover:text-foreground text-foreground/80">
              Features
            </a>
            <a href="#" className="transition-colors hover:text-foreground text-foreground/80">
              Pricing
            </a>
            <a href="#" className="transition-colors hover:text-foreground text-foreground/80">
              About
            </a>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            {/* User dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <span className="sr-only">User menu</span>
                  <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center">
                    <span>U</span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;