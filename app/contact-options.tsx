"use client";

import { useRef, useState } from "react";

const email = "zzgriim@gmail.com";

export function ContactOptions() {
  const addressRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"idle" | "copied" | "manual">("idle");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      addressRef.current?.focus();
      addressRef.current?.select();
      setStatus("manual");
    }
  }

  return (
    <>
      <section className="contact-options" id="contact" aria-label="Copy email address" tabIndex={-1}>
        <div className="contact-panel">
          <label htmlFor="contact-email">Say hello at</label>
          <div className="contact-address-row">
            <input id="contact-email" ref={addressRef} className="contact-address" type="text" value={email} readOnly onClick={(event) => event.currentTarget.select()} spellCheck={false} />
            <button className="copy-email" type="button" onClick={copyEmail}>{status === "copied" ? "Copied ✓" : "Copy email"}</button>
          </div>
          <p className="contact-status" role="status">{status === "copied" ? "Email copied to clipboard." : status === "manual" ? "Select the address and copy it manually (Ctrl+C / ⌘C)." : "Copy the address to get in touch."}</p>
        </div>
      </section>
      <p className="print-email">{email}</p>
    </>
  );
}
