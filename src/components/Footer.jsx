import { ArrowUpRight } from "lucide-react";


const EXPLORE_LINKS = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Campus", href: "#campus" },
  { label: "Sports", href: "#sports" },
  { label: "Admissions", href: "#admissions" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
];

const LEGAL_LINKS = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

const focusRing =
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1510]";

const isExternal = (href) => href.startsWith("http");

const Footer = () => {
  return (
    <footer className="bg-[#0d1510] px-6 py-16 text-white md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        
        <div className="grid gap-12 border-b border-white/15 pb-16 md:grid-cols-12">
          
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
              Tula&apos;s International School
            </p>

            <p className="mt-6 max-w-3xl text-4xl font-medium leading-[1] tracking-[-0.04em] md:text-6xl lg:text-7xl">
              A place to
              <br />
              <span className="italic">discover more.</span>
            </p>
          </div>

          
          <div className="grid grid-cols-2 gap-10 md:col-span-5">
            
            <nav aria-labelledby="footer-explore">
              <p
                id="footer-explore"
                className="mb-5 text-xs uppercase tracking-[0.25em] text-white/60"
              >
                Explore
              </p>

              <ul className="flex flex-col gap-3 text-sm">
                {EXPLORE_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className={`inline-block transition-colors hover:text-amber-300 ${focusRing}`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

           
            <nav aria-labelledby="footer-connect">
              <p
                id="footer-connect"
                className="mb-5 text-xs uppercase tracking-[0.25em] text-white/60"
              >
                Connect
              </p>

              <ul className="flex flex-col gap-3 text-sm">
                {SOCIAL_LINKS.map(({ label, href }) => {
                  const external = isExternal(href);

                  return (
                    <li key={label}>
                      <a
                        href={href}
                        {...(external && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                        className={`inline-flex items-center gap-2 transition-colors hover:text-amber-300 ${focusRing}`}
                      >
                        {label}
                        <ArrowUpRight size={14} aria-hidden="true" />
                        {external && (
                          <span className="sr-only">(opens in a new tab)</span>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        
        <div className="flex flex-col gap-5 pt-8 text-xs text-white/65 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Tula&apos;s International School. All
            rights reserved.
          </p>

          <ul className="flex gap-6">
            {LEGAL_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`inline-block transition-colors hover:text-white ${focusRing}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;