import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightAutoSidebar from "starlight-auto-sidebar";

// https://astro.build/config
export default defineConfig({
  site: "https://timdujardin.github.io",
  base: "a11y-docs",
  integrations: [
    starlight({
      plugins: [starlightAutoSidebar()],
      title: "A11Y Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/timdujardin/a11y-docs",
        },
      ],
      sidebar: [
        {
          label: "Introduction",
          autogenerate: { directory: "1-introduction" },
        },
        {
          label: "Step by step",
          autogenerate: { directory: "2-step-by-step" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "3-guides" },
        },
        {
          label: "Assistive technology",
          autogenerate: { directory: "4-assistive-technology" },
        },
        {
          label: "Testing workflows",
          autogenerate: { directory: "5-testing-workflows" },
        },
      ],
    }),
  ],
});
