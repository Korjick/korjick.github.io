import type { Metadata } from "next";
import { ResumeView } from "../resume-view";

const title = "Bulat Fakhrutdinov — Unity Developer";
const description = "Experience, shipped projects and a printable Unity résumé.";
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/unity/" },
  openGraph: { title, description, url: "/unity/" },
  twitter: { title, description },
};

export default function UnityResume() {
  return <ResumeView profileId="unity" />;
}
