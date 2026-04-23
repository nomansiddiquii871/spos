"use client";

import { ArrowRight } from "lucide-react";

export default function FooterNewsletter() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0D1324] p-4">
      <p className="text-sm font-semibold text-white mb-2">Stay Updated</p>
      <form
        className="flex items-center gap-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Enter email"
          className="flex-1 rounded-md bg-[#0A1020] border border-white/10 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#3355FF]"
        />
        <button
          aria-label="Subscribe"
          type="submit"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-r from-[#1FA7A1] to-[#0F6F73] text-white hover:brightness-110 transition"
        >
          <ArrowRight size={16} />
        </button>
      </form>
    </div>
  );
}
