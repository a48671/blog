import { PropsWithChildren, ReactElement } from "react";
import { enMetaData } from "common/meta-data";
import "styles/global.scss";
import { faviconElements } from "common/favicon-elements";
import { twitterElements } from "common/twitter-elements";
import { facebookElements } from "common/facebook-elements";

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content={ enMetaData.author } />
                <meta name="description" content={ enMetaData.description } />
                <meta name="keywords" content={ enMetaData.mainKeywords } />

                { facebookElements }
                
                { twitterElements }
                
                { faviconElements }

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
