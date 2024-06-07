import React from "react";
import { Helmet } from "react-helmet-async";

const Page1 = () => {
  return (
    <div>
      <Helmet>
        {/* For Google */}
        <title>My Page Title 1</title>
        <meta name="description" content="Description of my page1." />

        {/* For Facebook Open Graph  */}
        <meta property="og:title" content="My Page Title1" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://i.ibb.co/qNbTbvn/fbog.jpg" />
        <meta property="og:url" content="https://www.ideapoke.com/" />
        <meta property="og:description" content="Description of my page1." />

        {/* For Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="My Page Title1" />
        <meta property="twitter:url" content="https://www.ideapoke.com/" />
        <meta
          property="twitter:description"
          content="Description of my page1"
        />

        <meta
          property="twitter:image"
          content="https://i.ibb.co/qNbTbvn/fbog.jpg"
        />
      </Helmet>
      Page1
    </div>
  );
};

export default Page1;
