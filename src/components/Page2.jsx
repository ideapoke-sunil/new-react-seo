import React from "react";
import { Helmet } from "react-helmet-async";

const Page2 = () => {
  return (
    <div>
      <Helmet>
        <title>Learning React Helmet!</title>

        <title>My Page Title 2</title>
        <meta name="description" content="Description of my page2." />

        {/* Open Graph / Meta (Facebook)  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com/" />
        <meta property="og:title" content="My Page Title2" />
        <meta property="og:description" content="Description of my page2." />
        <meta
          property="og:image"
          content="https://i.ibb.co/hRHt6wB/xl-image.png"
        />

        {/* Twitter  */}
        <meta
          property="twitter:card"
          content="https://i.ibb.co/hRHt6wB/xl-image.png"
        />
        <meta property="twitter:url" content="https://example.com" />
        <meta property="twitter:title" content="My Page Title2" />
        <meta
          property="twitter:description"
          content="Description of my page2"
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/hRHt6wB/xl-image.png"
        />
      </Helmet>
      Page2
    </div>
  );
};

export default Page2;
