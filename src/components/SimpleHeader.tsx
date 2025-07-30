'use client';

import { LogoLink } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

// Navigation data
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

const services = [
  { name: 'Live Scan', href: '/services/live-scan' },
  { name: 'Notary Public', href: '/services/notary' },
  { name: 'Apostille', href: '/services/apostille' },
  { name: 'Passport Photos', href: '/services/passport-photos' },
  { name: 'Mailbox Rental', href: '/services/mailbox-rental' },
];

const packShipItems = [
  { name: 'Packing', href: '/pack-ship/packing' },
  { name: 'Tracking', href: '/pack-ship/tracking' },
  {
    name: 'Shipping',
    hasSubmenu: true,
    submenu: [
      { name: 'FedEx', href: '/pack-ship/shipping/fedex' },
      { name: 'UPS', href: '/pack-ship/shipping/ups' },
      { name: 'USPS', href: '/pack-ship/shipping/usps' },
      { name: 'Drop-Off', href: '/pack-ship/shipping/drop-off' },
    ],
  },
];

export const SimpleHeader = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [packShipOpen, setPackShipOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePackShipOpen, setMobilePackShipOpen] = useState(false);
  const [mobileShippingOpen, setMobileShippingOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const packShipRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobilePackShipOpen(false);
    setMobileShippingOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
      if (
        packShipRef.current &&
        !packShipRef.current.contains(event.target as Node)
      ) {
        setPackShipOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <LogoLink size="lg" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'px-3 py-2 text-sm font-medium transition-colors rounded-md',
                  isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors rounded-md"
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform duration-200',
                    servicesOpen && 'rotate-180'
                  )}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 min-w-[200px]">
                  <div className="py-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Pack & Ship Dropdown */}
            <div className="relative" ref={packShipRef}>
              <button
                onClick={() => setPackShipOpen(!packShipOpen)}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors rounded-md"
              >
                <span>Pack & Ship</span>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform duration-200',
                    packShipOpen && 'rotate-180'
                  )}
                />
              </button>

              {packShipOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 min-w-[200px]">
                  <div className="py-1">
                    {packShipItems.map((item) => (
                      <div key={item.name}>
                        {item.hasSubmenu ? (
                          <div className="relative group">
                            <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                              <span>{item.name}</span>
                              <ChevronDown className="h-4 w-4 -rotate-90" />
                            </div>
                            {/* Hover submenu */}
                            <div className="absolute left-full top-0 ml-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                              <div className="py-1">
                                {item.submenu?.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                    onClick={() => setPackShipOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={item.href!}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            onClick={() => setPackShipOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-3">
            {/* Contact Button */}
            <Button
              variant="outline"
              size="sm"
              className="hidden lg:inline-flex text-sm"
              asChild
            >
              <Link href="tel:650-961-4646">
                <Phone className="mr-2 h-4 w-4" />
                650-961-4646
              </Link>
            </Button>

            {/* Theme Toggle */}
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white dark:bg-gray-900">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 text-base font-medium rounded-md transition-colors',
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                  )}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                >
                  Services
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 transition-transform duration-200',
                      mobileServicesOpen && 'rotate-180'
                    )}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                        onClick={closeMobileMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Pack & Ship */}
              <div>
                <button
                  onClick={() => setMobilePackShipOpen(!mobilePackShipOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                >
                  Pack & Ship
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 transition-transform duration-200',
                      mobilePackShipOpen && 'rotate-180'
                    )}
                  />
                </button>
                {mobilePackShipOpen && (
                  <div className="pl-4 space-y-1">
                    {packShipItems.map((item) => (
                      <div key={item.name}>
                        {item.hasSubmenu ? (
                          <div>
                            <button
                              onClick={() =>
                                setMobileShippingOpen(!mobileShippingOpen)
                              }
                              className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                            >
                              {item.name}
                              <ChevronDown
                                className={cn(
                                  'h-4 w-4 transition-transform duration-200',
                                  mobileShippingOpen && 'rotate-180'
                                )}
                              />
                            </button>
                            {mobileShippingOpen && (
                              <div className="pl-4 space-y-1">
                                {item.submenu?.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-3 py-2 text-xs text-gray-500 dark:text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                                    onClick={closeMobileMenu}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={item.href!}
                            className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                            onClick={closeMobileMenu}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Theme Toggle & Contact */}
              <div className="pt-4 border-t space-y-2">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Theme
                  </span>
                  <ThemeToggle />
                </div>
                <Button className="w-full" asChild>
                  <Link href="tel:650-961-4646" onClick={closeMobileMenu}>
                    <Phone className="mr-2 h-4 w-4" />
                    650-961-4646
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
