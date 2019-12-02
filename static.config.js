// This file is used to configure:
// - static-site generation
// - Document shell (index.html)
// - ...tons of other things!

// Get started at httsp://react-static.js.org
import React from "react";

export default {
  maxThreads: 1,
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta }
  }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>{" "}
      <Body> {children} </Body>{" "}
      <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
    </Html>
  ),
  getRoutes: async ({ dev }) => [
    {
      path: "/",
      template: "src/lel.jsx"
    },
    {
      path: "en",
      template: "src/Main.en.jsx"
    },
    {
      path: "zht",
      template: "src/Main.zht.jsx"
    },
    {
      path: "zhs",
      template: "src/Main.zhs.jsx"
    },
    {
      path: "billing",
      template: "src/billing/PlanPicker.jsx"
    }
  ]
};
