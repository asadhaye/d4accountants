"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { fadeIn, slideUp } from "@/lib/animations";

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
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="space-y-12"
      >
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
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={resource.link}>
                    <Button variant="outline" className="w-full">
                      Access Resource
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
