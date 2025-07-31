'use client';

import { LogoLink } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { NavigationConfig } from '@/components/types/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronRight, Menu, Phone, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';

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
  // State for mobile navigation
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<
    Record<string, boolean>
  >({});
  const [mobileSubmenus, setMobileSubmenus] = useState<Record<string, boolean>>(
    {}
  );

  const pathname = usePathname();

  // Enhanced active state detection with parent tracking
  const getActiveState = useMemo(() => {
    const result = {
      activePrimary: null as string | null,
      activeSection: null as string | null,
      activeItem: null as string | null,
      activeSubmenu: null as string | null,
    };

    // Check primary items
    for (const item of config.primaryItems) {
      if (
        pathname === item.href ||
        (item.href !== '/' && pathname.startsWith(item.href!))
      ) {
        result.activePrimary = item.name;
        return result;
      }
    }

    // Check dropdown sections
    for (const section of config.dropdownSections) {
      if (section.isMegaMenu && section.megaMenuColumns) {
        for (const column of section.megaMenuColumns) {
          for (const item of column.items) {
            if (
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href!))
            ) {
              result.activeSection = section.name;
              result.activeItem = item.name;
              return result;
            }
          }
        }
      } else if (section.items) {
        for (const item of section.items) {
          if (item.hasSubmenu && item.submenu) {
            for (const subItem of item.submenu) {
              if (
                pathname === subItem.href ||
                (subItem.href !== '/' && pathname.startsWith(subItem.href!))
              ) {
                result.activeSection = section.name;
                result.activeItem = item.name;
                result.activeSubmenu = subItem.name;
                return result;
              }
            }
          } else if (item.href) {
            if (
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href!))
            ) {
              result.activeSection = section.name;
              result.activeItem = item.name;
              return result;
            }
          }
        }
      }
    }

    return result;
  }, [pathname, config]);

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
                  getActiveState.activePrimary === item.name
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* Dropdown sections */}
            {config.dropdownSections.map((section) => (
              <div key={section.name} className="relative group">
                <button
                  className={cn(
                    'flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors rounded-md',
                    getActiveState.activeSection === section.name
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                  )}
                >
                  <span>{section.name}</span>
                  {getActiveState.activeSection === section.name && (
                    <div className="flex items-center space-x-1 ml-2">
                      <ChevronRight className="h-3 w-3 text-primary/60" />
                      <span className="text-xs text-primary/80 font-normal">
                        {getActiveState.activeSubmenu ||
                          getActiveState.activeItem}
                      </span>
                    </div>
                  )}
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 transition-transform duration-200',
                      'group-hover:rotate-180'
                    )}
                  />
                </button>

                {/* Hover dropdown */}
                <div
                  className={cn(
                    'absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200',
                    section.isMegaMenu ? 'w-96 p-6' : 'min-w-[200px]'
                  )}
                >
                  {section.isMegaMenu && section.megaMenuColumns ? (
                    // Enhanced Mega Menu Layout
                    <div className="grid grid-cols-2 gap-6">
                      {section.megaMenuColumns.map((column) => (
                        <div key={column.title}>
                          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                            {column.title}
                          </h3>
                          <div className="space-y-2">
                            {column.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href!}
                                className={cn(
                                  'block group',
                                  getActiveState.activeItem === item.name &&
                                    'ring-1 ring-primary/20 rounded-md'
                                )}
                              >
                                <div
                                  className={cn(
                                    'p-2 rounded-md transition-colors',
                                    getActiveState.activeItem === item.name
                                      ? 'bg-primary/10'
                                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                                  )}
                                >
                                  <div
                                    className={cn(
                                      'text-sm font-medium group-hover:text-primary',
                                      getActiveState.activeItem === item.name
                                        ? 'text-primary'
                                        : 'text-gray-700 dark:text-gray-200'
                                    )}
                                  >
                                    {item.name}
                                    {getActiveState.activeItem ===
                                      item.name && (
                                      <span className="ml-2 text-xs text-primary/60">
                                        • Active
                                      </span>
                                    )}
                                  </div>
                                  {item.description && (
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                      {item.description}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Enhanced Regular Dropdown Layout
                    <div className="py-1">
                      {section.items?.map((item) => (
                        <div key={item.name}>
                          {item.isSeparator ? (
                            <div className="border-t border-gray-200 dark:border-gray-600 my-1" />
                          ) : item.isHeading ? (
                            <div className="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                              {item.name}
                            </div>
                          ) : item.hasSubmenu ? (
                            <div className="relative group">
                              <div
                                className={cn(
                                  'flex items-center justify-between px-4 py-2 text-sm cursor-pointer transition-colors',
                                  getActiveState.activeItem === item.name
                                    ? 'text-primary bg-primary/10'
                                    : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700'
                                )}
                              >
                                <span className="flex items-center">
                                  {item.name}
                                  {getActiveState.activeItem === item.name &&
                                    getActiveState.activeSubmenu && (
                                      <span className="ml-2 text-xs text-primary/60">
                                        • {getActiveState.activeSubmenu}
                                      </span>
                                    )}
                                </span>
                                <ChevronDown className="h-4 w-4 -rotate-90" />
                              </div>
                              {/* Enhanced submenu */}
                              <div className="absolute left-full top-0 ml-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="py-1">
                                  {item.submenu?.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href!}
                                      className={cn(
                                        'block px-4 py-2 text-sm transition-colors',
                                        getActiveState.activeSubmenu ===
                                          subItem.name
                                          ? 'text-primary bg-primary/10 font-medium'
                                          : 'text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700'
                                      )}
                                    >
                                      {subItem.name}
                                      {getActiveState.activeSubmenu ===
                                        subItem.name && (
                                        <span className="ml-2 text-xs text-primary/60">
                                          ✓
                                        </span>
                                      )}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <Link
                              href={item.href!}
                              className={cn(
                                'block px-4 py-2 text-sm transition-colors',
                                getActiveState.activeItem === item.name
                                  ? 'text-primary bg-primary/10 font-medium'
                                  : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700'
                              )}
                            >
                              {item.name}
                              {getActiveState.activeItem === item.name && (
                                <span className="ml-2 text-xs text-primary/60">
                                  ✓
                                </span>
                              )}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
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
            {/* Add breadcrumb for mobile when in submenu */}
            {(getActiveState.activeSection || getActiveState.activePrimary) && (
              <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800/50 border-b text-xs text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <span>You are here:</span>
                  {getActiveState.activePrimary && (
                    <span className="font-medium text-primary">
                      {getActiveState.activePrimary}
                    </span>
                  )}
                  {getActiveState.activeSection && (
                    <>
                      <ChevronRight className="h-3 w-3" />
                      <span className="font-medium text-primary">
                        {getActiveState.activeSection}
                      </span>
                    </>
                  )}
                  {getActiveState.activeItem && (
                    <>
                      <ChevronRight className="h-3 w-3" />
                      <span className="font-medium text-primary">
                        {getActiveState.activeItem}
                      </span>
                    </>
                  )}
                  {getActiveState.activeSubmenu && (
                    <>
                      <ChevronRight className="h-3 w-3" />
                      <span className="font-medium text-primary">
                        {getActiveState.activeSubmenu}
                      </span>
                    </>
                  )}
                </div>
              </div>
            )}
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Primary navigation items */}
              {config.primaryItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href!}
                  className={cn(
                    'block px-3 py-2 text-base font-medium rounded-md transition-colors',
                    getActiveState.activePrimary === item.name
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
                      {section.isMegaMenu && section.megaMenuColumns
                        ? // Mobile Mega Menu Layout
                          section.megaMenuColumns.map((column) => (
                            <div key={column.title} className="mb-4">
                              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 px-3">
                                {column.title}
                              </div>
                              {column.items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href!}
                                  className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                                  onClick={closeMobileMenu}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          ))
                        : // Regular Mobile Menu
                          section.items?.map((item) => (
                            <div key={item.name}>
                              {item.isSeparator ? (
                                <div className="border-t border-gray-200 dark:border-gray-600 my-2 mx-3" />
                              ) : item.isHeading ? (
                                <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                  {item.name}
                                </div>
                              ) : item.hasSubmenu ? (
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
