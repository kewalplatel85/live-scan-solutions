'use client';

import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Live Scan', href: '/livescan' },
  { name: 'Notary Public', href: '/notary-public' },
  { name: 'Apostille', href: '/apostille' },
  { name: 'About Us', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact Us', href: '/contact' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                {/* Fingerprint scanner icon - using local image */}
                <div className="h-12 w-12 flex items-center justify-center">
                  <Image
                    src="/assets/Logo/icons8-fingerprint-scan-80.png"
                    alt="fingerprint-scan"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-foreground">
                  Live Scan Solutions
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary relative ${
                  isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Contact Button */}
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex"
              asChild
            >
              <Link href="tel:650-961-4646">
                <Phone className="mr-2 h-4 w-4" />
                650-961-4646
              </Link>
            </Button>

            {/* Theme Toggle - Desktop only */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                <div className="flex flex-col h-full">
                  {/* Navigation Links */}
                  <nav className="flex-1 px-6 py-8">
                    <div className="space-y-0">
                      {navigation.map((item, index) => (
                        <div key={item.name}>
                          <Link
                            href={item.href}
                            className={`block px-3 py-3 text-lg font-medium transition-colors hover:text-primary hover:bg-muted/50 rounded-lg relative ${
                              isActive(item.href)
                                ? 'text-primary bg-primary/10'
                                : 'text-muted-foreground'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                            {isActive(item.href) && (
                              <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full" />
                            )}
                          </Link>
                          {index < navigation.length - 1 && (
                            <Separator className="mx-3 my-1" />
                          )}
                        </div>
                      ))}

                      {/* Theme Toggle in Mobile Menu */}
                      <div className="mt-6 px-3">
                        <Separator className="mb-4" />
                        <div className="flex items-center justify-between py-2">
                          <span className="text-lg font-medium text-muted-foreground">
                            Theme
                          </span>
                          <ThemeToggle />
                        </div>
                      </div>
                    </div>
                  </nav>

                  {/* Footer/Contact */}
                  <div className="px-6 py-6 border-t bg-muted/30">
                    <Button className="w-full" size="lg" asChild>
                      <Link href="tel:650-961-4646">
                        <Phone className="mr-2 h-4 w-4" />
                        650-961-4646
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
