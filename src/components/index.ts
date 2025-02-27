// UI Components - only export what's actually used through this barrel
export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
export { Button } from '@/components/ui/button';
export { ScrollArea } from '@/components/ui/scroll-area';
export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Check if these components exist and fix paths if needed
// If they don't exist yet, comment them out until implemented
/* 
export { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
export { Toast, ToastProvider, ToastViewport } from '@/components/ui/toast';
*/

// Layout Components
export { Header } from './layout/Header';
export { Footer } from './layout/Footer';
export { LayoutWrapper } from './layout/LayoutWrapper';

// Feature Components
export { ChatBot } from './features/chatbot';
export { LeadCaptureForm } from './features/lead-capture';
export { CookieConsent } from './features/cookie-consent';

// For PWAInstaller, it uses default export
import { PWAInstaller } from './PWAInstaller';
export { PWAInstaller };

// Section Components - these should be moved to their new locations
export { Hero } from './sections/hero';
export { ServiceCards } from './sections/services';

// Note: This file should be updated as components are moved to their new locations
// according to the component audit document
