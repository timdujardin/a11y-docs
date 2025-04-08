import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://timdujardin.github.io",
  base: "a11y-docs",
  integrations: [
    starlight({
      title: "A11Y Docs",
      social: {
        github: "https://github.com/timdujardin/a11y-docs",
      },
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
      ],
    }),
  ],
});
