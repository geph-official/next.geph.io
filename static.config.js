// This file is used to configure:
// - static-site generation
// - Document shell (index.html)
// - ...tons of other things!

// Get started at httsp://react-static.js.org
import React from "react";

export default {
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta }
  }) => (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>{" "}
      <Body> {children} </Body>
      <div class="statcounter">
        <img
          class="statcounter"
          src="https://c.statcounter.com/12155608/0/044606fb/1/"
          alt="Web Analytics"
        />
      </div>
    </Html>
  ),
  getRoutes: async ({ dev }) => [
    {
      path: "/",
      template: "src/lel.jsx"
    },
    {
      path: "en/",
      template: "src/Main.en.jsx"
    },
    {
      path: "zht/",
      template: "src/Main.zht.jsx"
    },
    {
      path: "zhs/",
      template: "src/Main.zhs.jsx"
    },
    {
      path: "billing/",
      template: "src/billing/PlanPicker.jsx"
    }
  ]
};
