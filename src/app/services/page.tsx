import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | Selex Prime Engineering",
  description: "Explore our expert engineering catalog including concrete core cutting, civil construction, Mechanical, Electrical, and Plumbing (Mechanical, Electrical and Plumbing) solutions, and structural design across Sri Lanka.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
