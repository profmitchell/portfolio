import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apps - Mitchell Cohen',
  description: 'Creative tools and applications for music production and visual art',
};

export default function AppsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  );
}