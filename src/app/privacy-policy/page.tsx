import type { Metadata } from "next";
import Link from "next/link";
import { PolicyShell, Section } from "@/components/layout/PolicyShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SoberDev collects, uses, retains, and protects the information you share through our contact form and website.",
  alternates: { canonical: "/privacy-policy" },
};

const UPDATED = "June 20, 2026";

export default function PrivacyPolicyPage() {
  return (
    <PolicyShell title="Privacy Policy" updated={UPDATED}>
      <Section title="Who we are">
        <p>
          SoberDev is a development studio based in Delhi, India.
          This Privacy Policy explains what personal information we collect when
          you use our website (soberdev.in) or contact us, why we collect it, how
          long we keep it, and the rights you have over it.
        </p>
        <p>
          For any privacy-related question or request, email us at{" "}
          <a href="mailto:devssober@gmail.com">devssober@gmail.com</a>.
        </p>
      </Section>

      <Section title="Information we collect">
        <p>
          <strong>Contact form.</strong> When you submit our contact form, we
          collect the information you choose to provide:
        </p>
        <ul>
          <li>First name</li>
          <li>Last name</li>
          <li>Email address</li>
          <li>Your project description (the message you write to us)</li>
        </ul>
        <p>
          <strong>Analytics data.</strong> We use Google Analytics, which
          collects standard usage information such as the pages you view, your
          approximate location, your IP address, and basic device and browser
          details. This is collected through cookies set by Google.
        </p>
        <p>
          <strong>Server logs.</strong> Our hosting provider records standard
          technical logs (including IP address) as part of serving the site
          securely and reliably.
        </p>
        <p>
          We do <strong>not</strong> run user accounts, ask for passwords, take
          payments on this website, or intentionally collect sensitive personal
          data.
        </p>
      </Section>

      <Section title="Why we collect it">
        <p>
          <strong>Contact form data</strong> is used for a single purpose: to
          read your message and respond to your inquiry, scope potential work,
          and follow up with you. We do not sell it, rent it, or add it to a
          marketing list.
        </p>
        <p>
          <strong>Analytics data</strong> helps us understand how the site is
          used so we can improve it. For visitors in the EU/EEA and UK, our legal
          basis for the contact form is taking steps at your request before
          entering into an engagement, and for analytics it is our legitimate
          interest in measuring and improving the site.
        </p>
      </Section>

      <Section title="Cookies">
        <p>
          Our own code does not set any cookies. We do not use cookies for
          logins, themes, or preferences.
        </p>
        <p>
          Google Analytics does set its own cookies (for example{" "}
          <strong>_ga</strong> and <strong>_ga_*</strong>) to measure usage. You
          can block or delete these through your browser settings or a browser
          extension, and the site will continue to work normally. Our fonts are
          served from our own site rather than a third-party font CDN, so simply
          visiting the site does not send your data to a font provider.
        </p>
      </Section>

      <Section title="How long we keep it">
        <p>
          We keep contact-form submissions while we are handling your inquiry and
          for up to <strong>12 months</strong> after our last interaction with
          you, after which we delete them — unless you ask us to delete them
          sooner, or we have an ongoing engagement that requires us to keep them
          longer.
        </p>
        <p>
          Analytics data is retained by Google according to the retention
          settings configured for our property and Google&apos;s own policies.
        </p>
      </Section>

      <Section title="Third parties your data passes through">
        <p>
          We keep third parties to a minimum. The services below process some of
          your information on our behalf:
        </p>
        <ul>
          <li>
            <strong>Web3Forms</strong> — delivers your contact-form submission to
            our email inbox (devssober@gmail.com). We use it for email delivery
            only; it does not store a separate copy of your submission for us.
            See{" "}
            <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer">
              web3forms.com
            </a>
            .
          </li>
          <li>
            <strong>Google Analytics (Google LLC)</strong> — measures website
            usage as described above. See{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong>Vercel</strong> — hosts the website and processes standard
            server and access logs to serve it. See{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel&apos;s Privacy Policy
            </a>
            .
          </li>
        </ul>
        <p>
          Some of these providers operate servers outside India (for example, in
          the United States). We do not sell or rent your personal data to anyone.
        </p>
      </Section>

      <Section title="Your rights">
        <p>
          You can ask us to access, correct, or delete the personal information
          you have shared with us. Because we are a development studio, we handle
          these requests manually: email{" "}
          <a href="mailto:devssober@gmail.com">devssober@gmail.com</a> from the
          address you contacted us with, tell us what you would like, and we will
          action it within a reasonable time.
        </p>
        <p>
          If you are in the EU/EEA or UK, you also have the right to restrict or
          object to certain processing, to data portability, and to lodge a
          complaint with your local data protection authority.
        </p>
      </Section>

      <Section title="Security">
        <p>
          We take reasonable measures to protect your information and limit who
          can access it. However, no method of transmission or storage over the
          internet is completely secure, and we cannot guarantee absolute
          security.
        </p>
      </Section>

      <Section title="Children">
        <p>
          Our website and services are intended for businesses and adults. We do
          not knowingly collect personal information from children. If you believe
          a child has provided us data, contact us and we will delete it.
        </p>
      </Section>

      <Section title="Legal compliance">
        <p>
          This policy is intended to comply with India&apos;s Information
          Technology Act, 2000 and the Information Technology (Reasonable Security
          Practices and Procedures and Sensitive Personal Data or Information)
          Rules, 2011 (the SPDI Rules), and with the Digital Personal Data
          Protection Act, 2023. It is also written to be GDPR-aware for visitors
          in the EU/EEA and UK.
        </p>
      </Section>

      <Section title="Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. When we do, we will
          revise the &quot;Last updated&quot; date above. Significant changes will
          be reflected on this page.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions or requests about your data? Email{" "}
          <a href="mailto:devssober@gmail.com">devssober@gmail.com</a>. You can
          also read our{" "}
          <Link href="/terms-of-service">Terms of Service</Link> and{" "}
          <Link href="/refund-policy">Refund Policy</Link>.
        </p>
      </Section>
    </PolicyShell>
  );
}
