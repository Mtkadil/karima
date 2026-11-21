import type { MouseEvent } from 'react';
import { BUSINESS_INFO } from '../../data/business';
import { useRouter } from '../../context/RouterContext';
import { Container } from '../ui/Container';

export function Footer() {
  const { navItems, t, navigate } = useRouter();

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, path: string) => {
    event.preventDefault();
    navigate(path);
  };

  return (
    <footer className="border-t border-oro/35 bg-[#F4F0E8] text-antracite">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold tracking-wider text-antracite">
              {BUSINESS_INFO.brandName}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-antracite/80">
              {BUSINESS_INFO.category}
            </p>
            <address className="mt-4 not-italic text-sm leading-relaxed text-antracite/85">
              {BUSINESS_INFO.address.street}
              <br />
              {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city} ({BUSINESS_INFO.address.province})
            </address>
            <div className="mt-3 flex flex-col gap-1.5 text-sm">
              <a
                href={BUSINESS_INFO.contacts.phone.href}
                className="w-fit text-bordeaux underline-offset-4 hover:underline"
              >
                {BUSINESS_INFO.contacts.phone.display}
              </a>
              <a
                href={BUSINESS_INFO.contacts.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-antracite/80 underline-offset-4 hover:text-bordeaux hover:underline"
              >
                {BUSINESS_INFO.contacts.social.instagram.handle}
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-display text-base font-semibold text-antracite">
              {t.footer.navigationTitle}
            </h2>
            <ul className="mt-3 flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.path}
                    onClick={(event) => handleNavClick(event, item.path)}
                    className="text-sm text-antracite/80 underline-offset-4 hover:text-bordeaux hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-base font-semibold text-antracite">
              {t.footer.complianceTitle}
            </h2>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-antracite/75">
              <li>{t.footer.privacyPolicyLabel}</li>
              <li>{t.footer.cookiePolicyLabel}</li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-antracite/70">
              {t.footer.legalPendingNotice}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-oro/30 pt-6 text-xs text-antracite/70 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.copyright}</p>
          <p>{t.nav.languageStatusLabel}</p>
        </div>
      </Container>
    </footer>
  );
}
