import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { profiles, type ProfileId } from "./profiles";
import { PrintButton } from "./print-button";
import { ContactOptions } from "./contact-options";
import { SonarGrid } from "./sonar-grid";

function Arrow({ down = false }: { down?: boolean }) {
  return <span aria-hidden="true">{down ? "↓" : "↗"}</span>;
}

function PenMarks({ className = "" }: { className?: string }) {
  return <svg className={`pen-marks ${className}`} viewBox="0 0 70 65" fill="none" aria-hidden="true"><path d="M12 31 30 9M30 41 59 29M37 55 62 55" stroke="currentColor" strokeWidth="8" strokeLinecap="round" /></svg>;
}

function SectionTitle({ children, id, circled = false, number }: { children: ReactNode; id: string; circled?: boolean; number: string }) {
  return <div className="section-heading"><span className="section-number" aria-hidden="true">{number}</span><h2 id={id}><span className={circled ? "ink-circle" : ""}>{children}</span></h2><span className="heading-rule" aria-hidden="true" /></div>;
}

export function ResumeView({ profileId }: { profileId: ProfileId }) {
  const profile = profiles[profileId];
  return (
    <div className="resume-page" data-profile={profileId} style={{ "--accent": profile.accent } as CSSProperties}>
      <SonarGrid accent={profile.accent} />
      <a className="skip-link" href="#about">Skip to résumé</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Bulat Din, back to top">bd<span className="wordmark-dot">.</span></a>
        <span className="header-caption">A LITTLE ABOUT ME, ON PAPER.</span>
        <PrintButton className="header-print" />
      </header>
      <nav className="profile-switcher" aria-label="Résumé profile">
        <span className="profile-switcher-label">SELECT YOUR VIEW</span>
        <div className="profile-options">{Object.entries(profiles).map(([id, option]) => <a key={id} href={option.href} aria-current={id === profileId ? "page" : undefined}><Image className="profile-option-icon" src={`/images/tools/${option.icon}.svg`} alt="" width={22} height={22} />{option.label}</a>)}</div>
      </nav>
      <main id="top" className="desk">
        <div className="margin-note" aria-hidden="true"><span>DEVELOPER BY TRADE.</span><span>CURIOUS BY DEFAULT.</span><span className="margin-line" /></div>
        <div className="resume-stack">
          <div className="back-sheet" aria-hidden="true" />
          <article className="receipt" aria-label={`Bulat Fakhrutdinov’s résumé — ${profile.label}`} key={profileId}>
            <div className="fold fold-one" aria-hidden="true" /><div className="fold fold-two" aria-hidden="true" /><div className="fold fold-three" aria-hidden="true" />
            <header className="identity-card">
              <svg className="paperclip" viewBox="0 0 65 105" fill="none" aria-hidden="true"><path d="M19 5 8 68C4 93 35 101 41 76L53 18C57 0 32-5 28 14L17 70C15 81 28 84 31 73L40 28" stroke="#171717" strokeWidth="5" opacity=".4" transform="translate(2 2)" /><path d="M19 5 8 68C4 93 35 101 41 76L53 18C57 0 32-5 28 14L17 70C15 81 28 84 31 73L40 28" stroke="#bcbdbb" strokeWidth="3" /><path d="M19 5 8 68C4 93 35 101 41 76L53 18" stroke="#eeeeea" strokeWidth="1" /></svg>
              <PenMarks className="card-marks" />
              <div className="portrait-wrap"><Image className="portrait" src="/images/bulat.jpg" alt="Bulat Fakhrutdinov smiling, wearing glasses and a black turtleneck" width={567} height={566} priority sizes="(max-width: 650px) 30vw, 24vw" /><span className="photo-caption">YES, THAT’S ME.</span></div>
              <div className="identity-main">
                <p className="card-eyebrow">HELLO WORLD, I’M</p><h1>Bulat<br />Fakhrutdinov<span className="name-period">.</span></h1><p className="job-title">{profile.title}<br />DEVELOPER</p>
                <div className="card-bottom"><div className="card-location"><p>Dresden, Germany</p><svg className="signature" viewBox="0 0 140 42" fill="none" aria-hidden="true"><path d="M6 28C18 3 32 2 23 19S7 37 13 30C42 4 27 45 44 21S49 38 61 23 60 36 76 21 72 33 93 19 85 33 115 19M13 36 129 27" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><a className="qr-link" href="https://github.com/Korjick" target="_blank" rel="noreferrer" aria-label="Visit Bulat’s GitHub portfolio"><span className="qr-code" role="img" aria-label="QR code for github.com/Korjick" /><span>GITHUB <Arrow /></span></a></div>
              </div>
              <div className="card-contact"><a href="#contact">zzgriim@gmail.com <Arrow down /></a><a href="https://t.me/korjick" target="_blank" rel="noreferrer">@korjick <Arrow /></a></div>
            </header>
            <div className="receipt-content">
              <section id="about" className="intro" aria-label="About me">
                <div className="receipt-meta"><span>CURRICULUM VITAE</span><span>{profile.edition}</span></div><div className="asterisk-rule" aria-hidden="true">****************************************************************************************************************************************************************************************</div>
                <p>{profile.intro} <span className="ink-underline">{profile.emphasis}</span>.</p><p>{profile.description}</p>
              </section>
              <section className="resume-section education" aria-labelledby="education">
                <SectionTitle id="education" circled number="01">Education</SectionTitle>
                {profile.education.map((education) => <div className="education-item" key={`${education.degree}-${education.institution}`}><h3>{education.degree}</h3><p>{education.institution} · {education.country}</p><p className="entry-date">{education.date}</p></div>)}
                {profile.courses.length > 0 && <div className="courses"><h3>Courses</h3>{profile.courses.map((course) => <p key={course.name}><span>{course.name}</span><a className="course-provider" href={course.provider.url} target="_blank" rel="noopener noreferrer" aria-label={`${course.provider.name} — ${course.name}`}>{course.provider.name} <Arrow /></a></p>)}</div>}
              </section>
              <section className="resume-section" aria-labelledby="experience">
                <SectionTitle id="experience" circled number="02">Experience</SectionTitle>
                <div className="experience-list">{profile.experience.map((job) => <div className="experience-item" key={job.company}><div className="entry-top"><h3>{job.company}</h3><span className="entry-country">{job.country}</span></div><p className="entry-role">{job.role}</p><p className="entry-date">{job.date}</p><details className="job-details"><summary>More about this role <span aria-hidden="true" className="detail-plus">+</span></summary><ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></details><ul className="print-role-details">{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>)}</div>
              </section>
              {profile.projects.length > 0 && <section className="resume-section projects-section" aria-labelledby="projects">
                <SectionTitle id="projects" number="03">Projects</SectionTitle><p className="section-note">A few things I’ve helped bring to life.</p>
                <div className="project-list">{profile.projects.map((project, index) => <div className="project" key={project.name}><span className="project-index">0{index + 1}</span><Image className="project-image" src={project.image} alt="" width={48} height={48} sizes="48px" /><div className="project-info"><h3>{project.name}</h3><div className="project-links">{project.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={`${project.name} — ${link.label}`}>{link.label} <Arrow /></a>)}</div></div></div>)}</div>
                <a className="text-link github-link" href="https://github.com/Korjick" target="_blank" rel="noreferrer">More on GitHub <Arrow /></a>
              </section>}
              <section className="resume-section skills-section" aria-labelledby="skills">
                <PenMarks className="skills-marks" /><SectionTitle id="skills" number="04">Tools of the trade</SectionTitle>
                <dl className="skill-groups"><div><dt>Technologies</dt><dd>{profile.technologies.join(" · ")}</dd></div><div><dt>Languages</dt><dd>{profile.languages.join(" · ")}</dd></div></dl>
              </section>
              <footer className="receipt-footer">
                <div className="asterisk-rule" aria-hidden="true">******************************************************</div><span className="handwritten footer-note">your next developer?</span><h2>GOOD THINGS START<br />WITH A CONVERSATION.</h2><ContactOptions />
                <nav className="social-links" aria-label="Find me online"><a href="https://github.com/Korjick" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="https://www.linkedin.com/in/korjick/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href="https://t.me/korjick" target="_blank" rel="noreferrer">Telegram <Arrow /></a><a href="https://korjick.artstation.com/" target="_blank" rel="noreferrer">ArtStation <Arrow /></a></nav>
                <div className="asterisk-rule bottom-rule" aria-hidden="true">******************************************************</div><div className="receipt-signoff"><span>THANK YOU FOR YOUR TIME</span><span>END OF RECEIPT :)</span></div><div className="barcode" aria-hidden="true" /><span className="barcode-caption">B U L A T · D I N · D E V E L O P E R</span>
              </footer>
            </div>
          </article>
        </div>
        <div className="desk-bottom"><span>DIGITAL MIND. PAPER SOUL.</span><a href="#top">Back to top ↑</a></div>
      </main>
    </div>
  );
}
