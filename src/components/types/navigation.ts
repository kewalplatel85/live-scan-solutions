// Navigation types
export interface NavigationItem {
  name: string;
  href?: string;
  hasSubmenu?: boolean;
  submenu?: NavigationItem[];
}

export interface NavigationSection {
  name: string;
  items: NavigationItem[];
}

export interface NavigationConfig {
  primaryItems: NavigationItem[];
  dropdownSections: NavigationSection[];
  contactInfo?: {
    phone: string;
    label: string;
  };
}
