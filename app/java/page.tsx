import type { Metadata } from "next";
import { ResumeView } from "../resume-view";


const title = "Bulat Fakhrutdinov — Java Backend Developer";
const description = "Experience, shipped projects and a printable Java Backend résumé.";
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/java/" },
  openGraph: { title, description, url: "/java/" },
  twitter: { title, description },
};

export default function JavaResume() {
  return <ResumeView profileId="java" />;
}
