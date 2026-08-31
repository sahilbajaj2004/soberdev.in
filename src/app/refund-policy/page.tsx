import type { Metadata } from "next";
import Link from "next/link";
import { PolicyShell, Section } from "@/components/layout/PolicyShell";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Refund & Cancellation Policy",
  description:
    "How cancellations and refunds work at SoberDev across the 40% / 30% / 30% project milestones, including what is refundable at each stage.",
  path: "/refund-policy",
});

const UPDATED = "June 20, 2026";

export default function RefundPolicyPage() {
  return (
    <PolicyShell path="/refund-policy" title="Refund & Cancellation Policy" updated={UPDATED}>
      <Section title="Overview">
        <p>
          This policy explains what happens if a project is cancelled, and how
          refunds work at each stage. It should be read together with our{" "}
          <Link href="/terms-of-service">Terms of Service</Link>, including the
          payment milestones: a <strong>40% deposit</strong> before work starts,{" "}
          <strong>30%</strong> on design approval, and <strong>30%</strong> on
          delivery.
        </p>
      </Section>

      <Section title="If you cancel before any work starts">
        <p>
          If you cancel after paying the deposit but before we have started any
          work, your <strong>full 40% deposit is refunded</strong>. There is no
          booking fee or cancellation charge.
        </p>
      </Section>

      <Section title="If you cancel after work has started but before design approval">
        <p>
          Once we have begun work, the <strong>40% deposit becomes
          non-refundable</strong>. It covers the time and work already invested up
          to that point. No further payment is due if you cancel at this stage.
        </p>
      </Section>

      <Section title="If you cancel after design approval">
        <p>
          After you have approved the design (at which point{" "}
          <strong>70% has been paid</strong>), the{" "}
          <strong>40% deposit and the 30% design milestone are
          non-refundable</strong>. The work completed and paid for up to that
          stage is handed over to you in line with the intellectual property terms
          in our <Link href="/terms-of-service">Terms of Service</Link>.
        </p>
      </Section>

      <Section title="If SoberDev cannot deliver">
        <p>
          If we are unable to deliver the project, we will{" "}
          <strong>refund the portion you have paid for work that has not yet been
          completed</strong>. You keep - and we hand over - any completed work that
          you have already paid for.
        </p>
      </Section>

      <Section title="Non-refundable third-party costs">
        <p>
          Any third-party costs we have already paid on your behalf - such as
          domains, paid plugins or licenses, stock assets, or hosting - are not
          refundable, regardless of the cancellation stage.
        </p>
      </Section>

      <Section title="How to request a cancellation or refund">
        <p>
          To cancel or request a refund, email{" "}
          <a href="mailto:contact@soberdev.in">contact@soberdev.in</a> with your
          project name. Where a refund is due, we issue it to the original payment
          method where possible, typically within 7-10 business days of confirming
          the cancellation.
        </p>
      </Section>

      <Section title="Changes to this policy">
        <p>
          We may update this policy from time to time. The &quot;Last updated&quot;
          date above reflects the current version, and the policy in effect when
          your project is agreed applies to that project.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about cancellations or refunds? Email{" "}
          <a href="mailto:contact@soberdev.in">contact@soberdev.in</a>. See also our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
          <Link href="/terms-of-service">Terms of Service</Link>.
        </p>
      </Section>
    </PolicyShell>
  );
}
