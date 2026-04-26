import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";
import BrandLogo from "./BrandLogo";

const iconCls = "h-4 w-4";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="currentColor" aria-hidden="true">
    <path d="M22 12a10 10 0 1 0-11.6 9.88v-6.99H7.9V12h2.5V9.8c0-2.48 1.47-3.85 3.73-3.85 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.62.77-1.62 1.56V12h2.75l-.44 2.89H13.5v6.99A10 10 0 0 0 22 12Z" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2H21l-6.52 7.45L22 22h-6.88l-4.58-6-5.24 6H2.73l7-7.99L2 2h7.04l4.13 5.46L18.244 2Zm-1.2 18h1.89L7.06 4H5.05L17.044 20Z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96v5.66H9.31V9h3.42v1.56h.05c.48-.9 1.65-1.86 3.39-1.86 3.62 0 4.29 2.38 4.29 5.47v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="currentColor" aria-hidden="true">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41a3.73 3.73 0 0 1-1.38-.9 3.73 3.73 0 0 1-.9-1.38c-.16-.42-.36-1.05-.41-2.22C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.55a5.88 5.88 0 0 0-2.13 1.39 5.88 5.88 0 0 0-1.39 2.13C.33 4.9.13 5.77.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.55 2.91.31.8.74 1.48 1.39 2.13a5.88 5.88 0 0 0 2.13 1.39c.76.29 1.63.49 2.91.55C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.55a5.88 5.88 0 0 0 2.13-1.39 5.88 5.88 0 0 0 1.39-2.13c.29-.76.49-1.63.55-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.55-2.91a5.88 5.88 0 0 0-1.39-2.13A5.88 5.88 0 0 0 19.86.62C19.1.33 18.23.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="currentColor" aria-hidden="true">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.55 12 3.55 12 3.55s-7.55 0-9.4.53A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.53 9.4.53 9.4.53s7.55 0 9.4-.53a3 3 0 0 0 2.1-2.12c.32-1.9.5-3.83.5-5.8a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.57V8.43L15.82 12 9.6 15.57Z" />
  </svg>
);

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/business", label: "Business" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="relative mb-6 text-white font-semibold after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-8 after:rounded-full after:bg-[#1FA7A1]">
      {children}
    </h4>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#06091A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <BrandLogo href="/" width={180} height={58} className="mb-5" imageClassName="h-14 w-auto object-contain" />
          <p className="text-sm text-white/65 leading-relaxed max-w-xs mb-6">
            Revolutionizing retail with cutting-edge POS technology built for
            modern businesses of every size.
          </p>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-3">
              <Clock size={16} className="mt-0.5 text-[#1FA7A1]" />
              <div>
                <div className="font-medium text-white">Business Hours</div>
                <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 text-[#1FA7A1]" />
              <a
                href="mailto:Clovpaymarketing@gmail.com"
                className="hover:text-white transition"
              >
                Clovpaymarketing@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-[#1FA7A1]" />
              <span>1240b E Stringham Ave, Salt Lake City, UT 84106</span>
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-3">
            {[
              { Icon: FacebookIcon, label: "Facebook" },
              { Icon: TwitterIcon, label: "Twitter" },
              { Icon: LinkedinIcon, label: "LinkedIn" },
              { Icon: InstagramIcon, label: "Instagram" },
              { Icon: YoutubeIcon, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 hover:bg-white/5 hover:text-white transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="md:justify-self-start lg:justify-self-end">
          <ColumnHeading>Quick Links</ColumnHeading>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-white/75 hover:text-white transition"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center sm:items-start md:items-center justify-between gap-3 text-xs text-white/55">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} Clovpay. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
