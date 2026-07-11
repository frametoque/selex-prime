import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Selex Prime Engineering",
  description: "Contact Selex Prime Engineering for a free quote or site inspection. Reach out via phone, email, WhatsApp, or request an estimate for core cutting and Mechanical, Electrical and Plumbing installations.",
};

export default function ContactPage() {
  return <ContactClient />;
}
