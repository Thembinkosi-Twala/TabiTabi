import { IceCream } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <IceCream className="h-8 w-8 text-primary" />
            <span className="font-headline text-xl font-bold">Tapi Tapi</span>
          </div>
          <div className="text-center text-muted-foreground md:text-left">
            <p>University of Cape Town in collaboration with GetSmarter.</p>
            <p>&copy; {new Date().getFullYear()} Tapi Tapi Rebrand. All rights reserved.</p>
            <p className="text-sm">Fictional website for educational purposes.</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Twitter"
            >
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 4.9-3.3 1.4-6.7 1.4-6.7 1.4s-1.4 0-2.7.7c-1.3.7-2.7 2.7-2.7 2.7s-1.3 1.3-2.7 1.3c-1.3 0-5.3-2.7-5.3-2.7s-3.3-3.3-4-6.7c-.7-3.3 0-5.3 0-5.3s1.3 0 2.7-.7c1.3-.7 2.7-.7 2.7-.7s2.7 0 4 1.3c1.3 1.3 2.7 2.7 2.7 2.7s2-1.3 4-2.7c2-1.3 2.7-1.3 2.7-1.3z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
