// UI Components - only export what's actually used through this barrel
export {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui';

// Layout Components
export { Header } from './layout/Header';
export { Footer } from './layout/Footer';
export { LayoutWrapper } from './layout/LayoutWrapper';

// Feature Components
export { ChatBot } from './features/chatbot';
export { LeadCaptureForm } from './features/lead-capture';

// Section Components
export { Hero } from './sections/hero';
export { ServiceCards } from './sections/services';

// Note: Remove any components that aren't actually imported through this barrel file
// If you find you need them later, you can add them back
