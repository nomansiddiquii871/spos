"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const observed = new WeakSet<Element>();
    const observeRevealElements = (root: ParentNode = document) => {
      const els = root.querySelectorAll<HTMLElement>(".reveal");
      els.forEach((el) => {
        if (!observed.has(el)) {
          observed.add(el);
          io.observe(el);
        }
      });
    };

    observeRevealElements();

    // Watch for route-transition content and any later dynamic inserts.
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;

          if (node.classList.contains("reveal") && !observed.has(node)) {
            observed.add(node);
            io.observe(node);
          }

          observeRevealElements(node);
        });
      });
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
