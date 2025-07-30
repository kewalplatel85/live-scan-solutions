'use client';

import { LogoLink } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { NavigationConfig } from '@/components/types/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

interface NavigationHeaderProps {
  config: NavigationConfig;
  logoSize?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const NavigationHeader = ({
  config,
  logoSize = 'lg',
  className = '',
}: NavigationHeaderProps) => {
  // State for desktop dropdowns
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
  );

  // State for mobile navigation
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<
    Record<string, boolean>
  >({});
  const [mobileSubmenus, setMobileSubmenus] = useState<Record<string, boolean>>(
    {}
  );

  // Refs for click outside detection
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const toggleDropdown = (sectionName: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  const closeDropdown = (sectionName: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [sectionName]: false,
    }));
  };

  const toggleMobileDropdown = (sectionName: string) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  const toggleMobileSubmenu = (key: string) => {
    setMobileSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdowns({});
    setMobileSubmenus({});
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.entries(dropdownRefs.current).forEach(([sectionName, ref]) => {
        if (ref && !ref.contains(event.target as Node)) {
          closeDropdown(sectionName);
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <LogoLink size={logoSize} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Primary navigation items */}
            {config.primaryItems.map((item) => (
              <Link
                key={item.name}
                href={item.href!}
                className={cn(
                  'px-3 py-2 text-sm font-medium transition-colors rounded-md',
                  isActive(item.href!)
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* Dropdown sections */}
            {config.dropdownSections.map((section) => (
              <div
                key={section.name}
                className="relative"
                ref={(el) => {
                  dropdownRefs.current[section.name] = el;
                }}
              >
                <button
                  onClick={() => toggleDropdown(section.name)}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors rounded-md"
                >
                  <span>{section.name}</span>
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 transition-transform duration-200',
                      openDropdowns[section.name] && 'rotate-180'
                    )}
                  />
                </button>

                {openDropdowns[section.name] && (
                  <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 min-w-[200px]">
                    <div className="py-1">
                      {section.items.map((item) => (
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
                                      href={subItem.href!}
                                      className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                      onClick={() =>
                                        closeDropdown(section.name)
                                      }
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
                              onClick={() => closeDropdown(section.name)}
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
            ))}
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-3">
            {/* Contact Button */}
            {config.contactInfo && (
              <Button
                variant="outline"
                size="sm"
                className="hidden lg:inline-flex text-sm"
                asChild
              >
                <Link href={`tel:${config.contactInfo.phone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {config.contactInfo.label}
                </Link>
              </Button>
            )}

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
              {/* Primary navigation items */}
              {config.primaryItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href!}
                  className={cn(
                    'block px-3 py-2 text-base font-medium rounded-md transition-colors',
                    isActive(item.href!)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                  )}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile dropdown sections */}
              {config.dropdownSections.map((section) => (
                <div key={section.name}>
                  <button
                    onClick={() => toggleMobileDropdown(section.name)}
                    className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  >
                    {section.name}
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform duration-200',
                        mobileDropdowns[section.name] && 'rotate-180'
                      )}
                    />
                  </button>
                  {mobileDropdowns[section.name] && (
                    <div className="pl-4 space-y-1">
                      {section.items.map((item) => (
                        <div key={item.name}>
                          {item.hasSubmenu ? (
                            <div>
                              <button
                                onClick={() =>
                                  toggleMobileSubmenu(
                                    `${section.name}-${item.name}`
                                  )
                                }
                                className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                              >
                                {item.name}
                                <ChevronDown
                                  className={cn(
                                    'h-4 w-4 transition-transform duration-200',
                                    mobileSubmenus[
                                      `${section.name}-${item.name}`
                                    ] && 'rotate-180'
                                  )}
                                />
                              </button>
                              {mobileSubmenus[
                                `${section.name}-${item.name}`
                              ] && (
                                <div className="pl-4 space-y-1">
                                  {item.submenu?.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href!}
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
              ))}

              {/* Mobile Theme Toggle & Contact */}
              <div className="pt-4 border-t space-y-2">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Theme
                  </span>
                  <ThemeToggle />
                </div>
                {config.contactInfo && (
                  <Button className="w-full" asChild>
                    <Link
                      href={`tel:${config.contactInfo.phone}`}
                      onClick={closeMobileMenu}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      {config.contactInfo.label}
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
