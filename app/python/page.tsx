import type { Metadata } from "next";
import { ResumeView } from "../resume-view";

const title = "Bulat Din — Python & Backend Developer";
const description = "Python backend developer: Flask, SQLAlchemy, PostgreSQL and Docker. Research tools, Kadi4Mat and a printable résumé.";
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/python/" },
  openGraph: { title, description, url: "/python/" },
  twitter: { title, description },
};

export default function PythonResume() {
  return <ResumeView profileId="python" />;
}
