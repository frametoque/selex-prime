import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects & Gallery | Selex Prime Engineering",
  description: "View our completed residential, commercial, and industrial engineering projects. See precision before-and-after core cutting and Mechanical, Electrical and Plumbing installation logs across Sri Lanka.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
