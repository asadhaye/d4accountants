import { motion } from 'framer-motion';
import { ServiceLayout } from '@/components/shared/service-layout/index'; 

interface ServicePageTemplateProps {
  title: string;
  description: string;
  children: React.ReactNode;
  imageSrc?: string;
}

export function ServicePageTemplate({ 
  title, 
  description, 
  children,
  imageSrc = '/images/default-service.jpg'
}: ServicePageTemplateProps) {
  return (
    <ServiceLayout
      title={title}
      description={description}
      imageSrc={imageSrc}
    >
      <motion.div>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </motion.div>
    </ServiceLayout>
  );
}
