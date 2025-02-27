import { enMetaData } from "./meta-data";

export const twitterElements = (
    <>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ enMetaData.title } />
        <meta name="twitter:description" content={ enMetaData.description } />
        <meta name="twitter:image" content="/images/preview-image.png" />
    </>
);