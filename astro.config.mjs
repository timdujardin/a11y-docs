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
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Step by step",
          autogenerate: { directory: "step-by-step" },
        },
      ],
    }),
  ],
});
