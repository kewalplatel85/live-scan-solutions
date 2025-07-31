// Navigation types
export interface NavigationItem {
  name: string;
  href?: string;
  hasSubmenu?: boolean;
  submenu?: NavigationItem[];
  description?: string;
  isSeparator?: boolean;
  isHeading?: boolean;
}

export interface MegaMenuColumn {
  title: string;
  items: NavigationItem[];
}

export interface NavigationSection {
  name: string;
  items?: NavigationItem[];
  isMegaMenu?: boolean;
  megaMenuColumns?: MegaMenuColumn[];
}

export interface NavigationConfig {
  primaryItems: NavigationItem[];
  dropdownSections: NavigationSection[];
  contactInfo?: {
    phone: string;
    label: string;
  };
}
