import type { TeamMember } from '@/data/team';

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="p-6 rounded-lg bg-accent/5 border border-border">
      <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
      <p className="text-primary mb-2">{member.role}</p>
      <p className="text-muted-foreground">{member.description}</p>
    </article>
  );
}