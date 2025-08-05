'use client';

import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu, Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact Us', href: '/contact-us' },
];

// Services grouped for dropdown menu - all services under /services/
const services = [
  {
    title: 'Live Scan',
    href: '/live-scan',
    description: 'Electronic fingerprinting services for background checks',
  },
  {
    title: 'Notary Public',
    href: '/notary',
    description: 'Professional notarization services for documents',
  },
  {
    title: 'Apostille',
    href: '/apostille',
    description: 'Document authentication for international use',
  },
  {
    title: 'Passport Photos',
    href: '/passport-photos',
    description:
      'Professional passport and ID photos that meet all requirements',
  },
  {
    title: 'Mailbox Rental',
    href: '/mailbox-rental',
    description: 'Secure mailbox services for your business or personal needs',
  },
];

const packShipServices = [
  {
    title: 'Professional Packing',
    href: '/pack-ship/packing',
    description: 'Professional packing for safe shipping',
  },
  {
    title: 'Package Tracking Page',
    href: '/pack-ship/tracking',
    description: 'Track your packages in real-time',
  },
];

const shippingServices = [
  {
    title: 'FedEx Shipping',
    href: '/pack-ship/shipping/fedex',
    description: 'Reliable FedEx shipping services',
  },
  {
    title: 'UPS Access Point',
    href: '/pack-ship/shipping/ups',
    description: 'Convenient UPS shipping and pickup',
  },
  {
    title: 'US Postal Service',
    href: '/pack-ship/shipping/usps',
    description: 'Complete USPS shipping solutions',
  },
  {
    title: 'Package Drop-Offs',
    href: '/pack-ship/shipping/drop-off',
    description: 'Convenient package drop-off services',
  },
];

// ListItem component for navigation menu
const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { title: string; href: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    // Handle services routes - check for both old and new paths
    if (href.startsWith('/services/')) {
      const servicePath = href.replace('/services/', '/');
      return pathname.startsWith(href) || pathname.startsWith(servicePath);
    }
    return pathname.startsWith(href);
  };

  // All mobile navigation items including services
  const allMobileItems = [
    ...navigation,
    { name: 'Services', href: '#services', isHeader: true as const },
    ...services.map((service) => ({
      name: service.title,
      href: service.href,
      isService: true as const,
    })),
    { name: 'Pack & Ship', href: '#pack-ship', isHeader: true as const },
    ...packShipServices.map((service) => ({
      name: service.title,
      href: service.href,
      isService: true as const,
    })),
    { name: 'Shipping Services', href: '#shipping', isHeader: true as const },
    ...shippingServices.map((service) => ({
      name: service.title,
      href: service.href,
      isService: true as const,
    })),
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 xl:px-8 max-w-full">
        <div className="flex h-16 items-center justify-center min-w-0">
          {/* Desktop Navigation */}
          <div className="hidden xl:flex xl:items-center xl:space-x-4 2xl:space-x-6 flex-1 justify-center min-w-0 relative z-[100]">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          isActive(item.href)
                            ? 'text-primary bg-accent'
                            : 'text-accent-foreground'
                        )}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}

                {/* Services Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      isActive('/services/live-scan') ||
                        isActive('/livescan') ||
                        isActive('/services/passport-photos') ||
                        isActive('/passport-photos') ||
                        isActive('/services/notary') ||
                        isActive('/notary-public') ||
                        isActive('/services/apostille') ||
                        isActive('/apostille') ||
                        isActive('/services/mailbox-rental') ||
                        isActive('/mailbox-rental')
                        ? 'text-primary bg-accent'
                        : 'text-accent-foreground'
                    )}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service) => (
                        <ListItem
                          key={service.title}
                          title={service.title}
                          href={service.href}
                        >
                          {service.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Pack & Ship Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      isActive('/pack-ship')
                        ? 'text-primary bg-accent'
                        : 'text-accent-foreground'
                    )}
                  >
                    Pack & Ship
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {packShipServices.map((service) => (
                        <ListItem
                          key={service.title}
                          title={service.title}
                          href={service.href}
                        >
                          {service.description}
                        </ListItem>
                      ))}
                      {/* Shipping Submenu Group Header - Not Clickable */}
                      <li className="col-span-2">
                        <div className="rounded-md p-3 bg-muted/30 border-l-4 border-primary">
                          <div className="text-sm font-medium leading-none mb-1 text-primary">
                            Shipping Services
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Choose your preferred shipping method
                          </p>
                        </div>
                      </li>
                      {shippingServices.map((service) => (
                        <ListItem
                          key={service.title}
                          title={service.title}
                          href={service.href}
                        >
                          {service.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            {/* Contact Button */}
            <Button
              variant="outline"
              size="sm"
              className="hidden xl:inline-flex text-sm"
              asChild
            >
              <Link href="tel:650-961-4646">
                <Phone className="mr-2 h-4 w-4" />
                650-961-4646
              </Link>
            </Button>

            {/* Theme Toggle - Desktop only */}
            <div className="hidden xl:block">
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="xl:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Navigation Links */}
                  <nav className="flex-1 px-6 py-8">
                    <div className="space-y-0">
                      {allMobileItems.map((item, index) => (
                        <div key={`${item.name}-${index}`}>
                          {'isHeader' in item && item.isHeader ? (
                            <div className="px-3 py-3 text-lg font-semibold text-primary border-b border-border/30 mb-2">
                              {item.name}
                            </div>
                          ) : (
                            <Link
                              href={item.href}
                              className={`block px-3 py-3 text-lg font-medium transition-colors hover:text-primary hover:bg-muted/50 rounded-lg relative ${
                                'isService' in item && item.isService
                                  ? 'ml-4 text-base'
                                  : ''
                              } ${
                                isActive(item.href)
                                  ? 'text-primary bg-primary/10'
                                  : 'text-accent-foreground'
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                              {isActive(item.href) && (
                                <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full" />
                              )}
                            </Link>
                          )}
                          {!('isHeader' in item && item.isHeader) &&
                            !('isService' in item && item.isService) &&
                            index < allMobileItems.length - 1 && (
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
