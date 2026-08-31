import type { Metadata } from "next";
import Link from "next/link";
import { PolicyShell, Section } from "@/components/layout/PolicyShell";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "The terms that govern SoberDev's web development services - scope, payment milestones, intellectual property, timelines, liability, and termination.",
  path: "/terms-of-service",
});

const UPDATED = "June 20, 2026";

export default function TermsOfServicePage() {
  return (
    <PolicyShell path="/terms-of-service" title="Terms of Service" updated={UPDATED}>
      <Section title="Agreement">
        <p>
          These Terms of Service govern the web development work SoberDev (&quot;we&quot;,
          &quot;us&quot;) provides to a client (&quot;you&quot;). By engaging us -
          through a signed proposal, an email confirmation, or by paying a deposit
          - you agree to these terms. Where a separate written agreement for a
          specific project conflicts with these terms, that project agreement
          takes precedence.
        </p>
      </Section>

      <Section title="Services">
        <p>
          SoberDev provides web development and related services, including:
        </p>
        <ul>
          <li>Landing pages and marketing sites</li>
          <li>Full-stack web applications</li>
          <li>Cross-platform apps (React Native and responsive PWAs)</li>
          <li>Experience design, deployment, and DevOps support</li>
        </ul>
        <p>
          The exact deliverables for your project are defined in the quote or
          proposal we agree on before starting.
        </p>
      </Section>

      <Section title="Quotes and scope">
        <p>
          Each project begins from a written quote that describes the deliverables,
          features, and timeline. Anything listed in that quote is{" "}
          <strong>included</strong>.
        </p>
        <p>
          A <strong>scope change</strong> is any work beyond that quote - for
          example, additional pages or features, new integrations, a change of
          design direction, or revisions to a design after it has already been
          approved. Scope changes are quoted separately and may affect the price
          and the timeline. We will confirm any change with you before doing the
          extra work.
        </p>
      </Section>

      <Section title="Payment terms">
        <p>Unless agreed otherwise in writing, projects are billed in three milestones:</p>
        <ul>
          <li>
            <strong>40% deposit</strong> before work starts
          </li>
          <li>
            <strong>30%</strong> on approval of the design
          </li>
          <li>
            <strong>30%</strong> on delivery
          </li>
        </ul>
        <p>
          Amounts are in Indian Rupees (INR) unless otherwise stated. Work may be
          paused if a payment is overdue. Final deliverables and code transfer are
          provided once the project is paid in full.
        </p>
      </Section>

      <Section title="Timelines">
        <p>
          Any delivery dates we give are good-faith <strong>estimates, not
          guarantees</strong>. They assume timely cooperation from you, including
          prompt feedback, approvals, content, and access to anything we need.
        </p>
        <p>
          Delays caused by client-side feedback loops, late content or assets, or
          scope changes are not SoberDev&apos;s responsibility and will shift the
          delivery date accordingly.
        </p>
      </Section>

      <Section title="Intellectual property">
        <p>
          Once a project is <strong>paid in full</strong>, you own the final
          delivered code and assets that we created specifically for your project.
        </p>
        <p>
          SoberDev <strong>retains ownership</strong> of the reusable internal
          components, boilerplate, libraries, tools, and general know-how that we
          use across multiple projects. Your delivered product includes a license
          to keep using those components as part of it, but you do not gain
          exclusive rights to them. Third-party and open-source components remain
          under their own licenses.
        </p>
        <p>
          Until full payment is received, SoberDev retains all rights in the work.
          We may reference and display delivered work in our portfolio unless you
          ask us in writing not to.
        </p>
      </Section>

      <Section title="Your responsibilities">
        <p>
          You agree to provide accurate information, supply content and approvals
          in a timely way, and ensure you have the rights to any materials you give
          us to use. You are responsible for the legality of the content and
          purpose of the product you ask us to build.
        </p>
      </Section>

      <Section title="Limitation of liability">
        <p>
          Our services are provided on a reasonable-effort basis. To the fullest
          extent permitted by law, SoberDev is <strong>not liable for any
          indirect, incidental, special, or consequential damages</strong>,
          including lost profits, lost data, or business interruption, arising from
          the work or your use of it. Our total liability for any claim is limited
          to the fees you paid for the affected project.
        </p>
        <p>
          We do not guarantee specific business outcomes (such as traffic,
          rankings, or revenue) and are not responsible for outages or changes in
          third-party services such as hosting providers or external APIs.
        </p>
      </Section>

      <Section title="Termination">
        <p>
          Either party may end the engagement at any time with written notice
          (email is sufficient). On termination, you pay for all work completed up
          to the termination date, and any refunds are handled under our{" "}
          <Link href="/refund-policy">Refund Policy</Link>. We may withhold
          deliverables and the transfer of code until outstanding amounts are paid.
        </p>
      </Section>

      <Section title="Governing law">
        <p>
          These terms are governed by the laws of India, and any disputes are
          subject to the jurisdiction of the courts of Delhi, India.
        </p>
      </Section>

      <Section title="Changes to these terms">
        <p>
          We may update these terms from time to time. The &quot;Last updated&quot;
          date above reflects the current version. The terms in effect when your
          project is agreed apply to that project.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about these terms? Email{" "}
          <a href="mailto:contact@soberdev.in">contact@soberdev.in</a>. See also our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
          <Link href="/refund-policy">Refund Policy</Link>.
        </p>
      </Section>
    </PolicyShell>
  );
}
