"use client";

export function PrintButton({ className }: { className?: string }) {
  return <button className={className} type="button" onClick={() => window.print()}>Print résumé <span aria-hidden="true">↗</span></button>;
}
