import type { Metadata } from "next";
import { ResumeView } from "../resume-view";

const title = "Bulat Din — Go Backend Developer";
const description = "Experience, selected work and a printable Go résumé.";
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/go/" },
  openGraph: { title, description, url: "/go/" },
  twitter: { title, description },
};

export default function GoResume() {
  return <ResumeView profileId="go" />;
}
