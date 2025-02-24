'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { slideUp } from "@/lib/animations";
import { AnimatedSection } from "@/components/shared/animated-section";

const resources = [
  {
    title: "Tax Guides",
    description: "Comprehensive guides for personal and business tax planning",
    category: "Taxation",
    link: "/resources/tax-guides"
  },
  {
    title: "Financial Templates",
    description: "Ready-to-use templates for financial planning and reporting",
    category: "Planning",
    link: "/resources/templates"
  },
  {
    title: "Business Insights",
    description: "Latest insights and trends in business accounting",
    category: "Business",
    link: "/resources/insights"
  }
];

export default function ResourcesPage() {
  return (
    <AnimatedSection className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-muted-foreground">
            Expert guides and tools to support your financial journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              variants={slideUp}
              custom={index}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {resource.category}
                    </span>
                  </div>
                  <CardTitle>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={resource.link}>
                    <Button className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
