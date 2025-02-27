import { enMetaData } from "./meta-data";

export const facebookElements = (
    <>
        <meta property="og:title" content={ enMetaData.title } />
        <meta property="og:description" content="A Frontend Engineering Blog covering React, TypeScript, node.js, JavaScript, CSS, and web technologies." />
        <meta property="og:image" content="/images/preview-image.png" />
        {/* <meta property="og:url" content="https://fomin-dev.com" /> */}
        <meta property="og:type" content="website" />
    </>
);