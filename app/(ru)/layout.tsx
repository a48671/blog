import { PropsWithChildren, ReactElement } from "react";
import { enMetaData } from "common/meta-data";
import "styles/global.scss";

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
    return (
        <html lang="ru">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content={ enMetaData.author } />
                <meta name="description" content={ enMetaData.description } />
                <meta name="keywords" content={ enMetaData.mainKeywords } />

                {/* SEO Open Graph / Facebook */}
                <meta property="og:title" content={ enMetaData.title } />
                <meta property="og:description" content="A Frontend Engineering Blog covering React, TypeScript, node.js, JavaScript, CSS, and web technologies." />
                {/* <meta property="og:image" content="/preview-image.jpg" /> */}
                {/* <meta property="og:url" content="https://yourblog.com" /> */}
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={ enMetaData.title } />
                <meta name="twitter:description" content={ enMetaData.description } />
                {/* <meta name="twitter:image" content="/preview-image.jpg" /> */}

                {/* <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" /> */}

                <link rel="alternate" href="/en" hrefLang="en" />
                <link rel="alternate" href="/ru" hrefLang="ru" />

                <title>{ enMetaData.title }</title>
            </head>
            <body>
                { children }
            </body>
        </html>
    );
}
