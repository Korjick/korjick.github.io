import type { Metadata } from "next";
import { ResumeView } from "../resume-view";

const title = "Bulat Din — Java & Backend Developer";
const description = "Java developer with a background in backend systems and Java teaching. Spring, SQL, backend experience and a printable résumé.";
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/java/" },
  openGraph: { title, description, url: "/java/" },
  twitter: { title, description },
};

export default function JavaResume() {
  return <ResumeView profileId="java" />;
}
