interface NestedNavItemsWithChildren {
  parent: NavbarItem[];
  children: true;
  parentLabel: string;
}

interface NestedNavItemsWithoutChildren {
  parent: NavbarItem;
  children: false;
}

type NestedNavItems = NestedNavItemsWithChildren | NestedNavItemsWithoutChildren;

interface NavbarItem {
  route: string;
  label: string;
}

export function isNestedNavItemsWithChildren(
  item: NestedNavItems
): item is NestedNavItemsWithChildren {
  return item.children === true;
}

export function isNestedNavItemsWithoutChildren(
  item: NestedNavItems
): item is NestedNavItemsWithoutChildren {
  return item.children === false;
}

export const navbarItems: NavbarItem[] = [
  { route: '/contacts', label: 'Contacts' },
  { route: '/student-login', label: 'Student Login' },
  { route: '/cart', label: 'My Cart' },
]


export const nestedNavBarItems1: NestedNavItems[] = [
  {
    parent: [
      { route: '/full-course', label: 'Full Course' },
      { route: '/virtual-classes', label: 'New Live Virtual Classes' },
      { route: '/test-bank', label: 'Test Bank Practice Software' },
      { route: '/text-books', label: 'Text Books' },
      { route: '/cram-courses', label: 'Cram Courses' },
      { route: '/audio-lectures', label: 'Audio Lectures' },
      { route: '/instructor-hotline', label: 'Instructor Hotline' },
    ],
    children: true,
    parentLabel: 'Products'
  },
  {
    parent: { route: '/subscriptions', label: 'Subscriptions' },
    children: false
  },
  {
    parent: { route: '/demos', label: 'Podcasts & Demos' },
    children: false
  },
  {
    parent: {route: 'reviews', label: 'Reviews'},
    children: false
  },
  {
    parent: {route: 'updates', label: 'Updates'},
    children: false
  },
  {
    parent: [
      { route: '/about', label: 'About Yaeger' },
      { route: '/secret-sauce', label: 'Secret Sauce' },
      { route: '/resource-center', label: 'Resource Center' },
      { route: '/blog', label: 'Blog' },
      { route: '/faq', label: 'FAQ' },
      { route: '/state-requirements', label: 'State Requirements' },
    ],
    parentLabel: 'Resources',
    children: true
  },
];

