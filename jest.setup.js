// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock next/router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    pathname: '/',
    query: {},
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

// Mock next-auth
jest.mock('next-auth/react', () => ({
  useSession: jest.fn(() => ({ 
    data: null,
    status: 'unauthenticated',
    update: jest.fn()
  })),
  signIn: jest.fn(),
  signOut: jest.fn(),
  getSession: jest.fn()
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: require('react').forwardRef(({ children, ...props }, ref) => (
      <div ref={ref} {...props}>{children}</div>
    )),
    section: require('react').forwardRef(({ children, ...props }, ref) => (
      <section ref={ref} {...props}>{children}</section>
    )),
    form: require('react').forwardRef(({ children, ...props }, ref) => (
      <form ref={ref} {...props}>{children}</form>
    )),
  },
  AnimatePresence: ({ children }) => children,
  useScroll: jest.fn(() => ({ scrollYProgress: { onChange: jest.fn() } })),
  useSpring: jest.fn(() => ({ onChange: jest.fn() })),
  useTransform: jest.fn(() => 0),
  useAnimation: jest.fn(() => ({ start: jest.fn() })),
}));

// Mock mongoose
jest.mock('mongoose', () => ({
  connect: jest.fn().mockResolvedValue({}),
  connection: {
    on: jest.fn(),
    once: jest.fn(),
  },
  models: {},
  model: jest.fn().mockReturnValue({}),
  Schema: jest.fn().mockReturnValue({}),
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
};
