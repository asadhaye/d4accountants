export interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "John Smith",
    role: "Managing Director",
    description: "Over 20 years of experience in accounting and financial advisory."
  },
  {
    name: "Sarah Johnson",
    role: "Tax Specialist",
    description: "Expert in corporate and personal tax planning."
  },
  {
    name: "Michael Brown",
    role: "Senior Accountant",
    description: "Specializes in business accounting and financial reporting."
  }
];