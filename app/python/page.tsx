import type { Metadata } from "next";
import { ResumeView } from "../resume-view";


const title = "Bulat Fakhrutdinov — Python Backend Developer";
const description = "Experience, shipped projects and a printable Python Backend résumé.";
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/python/" },
  openGraph: { title, description, url: "/python/" },
  twitter: { title, description },
};

export default function PythonResume() {
  return <ResumeView profileId="python" />;
}
