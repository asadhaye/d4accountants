import { createPageMetadata } from '@/lib/metadata';
import { PortalContent } from '@/app/portal/content';

export const generateMetadata = () => {
  return createPageMetadata(
    'Client Portal',
    'Secure client portal for D4 Accountants customers',
    '/portal'
  );
};

export default PortalContent;
