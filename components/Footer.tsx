import Link from "next/link";

export default function Footer(): React.ReactElement {
  const currentYear: number = new Date().getFullYear();

  const footerLinks: Array<{
    title: string;
    links: Array<{ label: string; href: string }>;
  }> = [
    {
      title: "Produit",
      links: [
        { label: "Fonctionnalités", href: "#features" },
        { label: "Tarifs", href: "#pricing" },
        { label: "Comment ça marche", href: "#how-it-works" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { label: "À propos", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Carrières", href: "#" },
        { label: "Contact", href: "mailto:contact@devjokebox.com" },
      ],
    },
    {
      title: "Légal",
      links: [
        { label: "Conditions d'utilisation", href: "#" },
        { label: "Politique de confidentialité", href: "#" },
        { label: "Mentions légales", href: "#" },
        { label: "RGPD", href: "#" },
      ],
    },
  ];

  const socialLinks: Array<{ name: string; href: string; icon: string }> = [
    { name: "Twitter", href: "#", icon: "twitter" },
    { name: "LinkedIn", href: "#", icon: "linkedin" },
    { name: "GitHub", href: "#", icon: "github" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent rounded-xl flex items-center justify-center">
                <span className="text-2xl">😂</span>
              </div>
              <span className="text-xl font-bold text-white">DevJokeBox</span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm">
              La plateforme d&apos;abonnement aux meilleures blagues de dev pour
              briser la glace en standup. Recevez 5 blagues chaque semaine !
            </p>

            {/* Newsletter Mini */}
            <div className="mb-6">
              <p className="text-sm font-medium text-white mb-2">
                Blague gratuite chaque mois
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="votre@email.dev"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-primary-500 transition-colors"
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors"
                >
                  OK
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon === "twitter" && (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  )}
                  {social.icon === "linkedin" && (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {social.icon === "github" && (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} DevJokeBox. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                Fait avec <span className="text-red-500">❤️</span> et beaucoup de{" "}
                <span className="text-amber-500">☕</span>
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline font-mono text-xs">
                while(!(succeed = try()));
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
