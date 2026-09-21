"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { primaryNav, siteConfig } from "@/lib/content/site";
import { Button } from "@/components/ui/Button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] text-ink"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open ? (
        <div
          id="mobile-nav-panel"
          className="absolute inset-x-0 top-full border-t border-divider bg-surface px-6 py-6 shadow-[var(--shadow-raised)]"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-[var(--radius-sm)] px-3 py-3 text-[16px] font-medium text-text-primary hover:bg-surface-muted"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button
            href={siteConfig.appStoreUrl}
            target="_blank" rel="noopener noreferrer"
            className="mt-4 w-full"
            onClick={() => setOpen(false)}
          >
            Download App
          </Button>
        </div>
      ) : null}
    </div>
  );
}
