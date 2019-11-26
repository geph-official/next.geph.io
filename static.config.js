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
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  getRoutes: async ({ dev }) => [
    {
      path: "/",
      template: "src/Main.js"
    },
    {
      path: "billing",
      template: "src/billing/PlanPicker.js"
    }
  ]
};
