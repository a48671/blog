import { ReactElement } from "react";
import { enMetaData, ruMetaData } from "./meta-data";
import { LangEnum } from "./types";

export function facebookElements(lang: LangEnum): ReactElement {
    const metaData = lang === LangEnum.RU ? enMetaData : ruMetaData;

    return (
        <>
            <meta property="og:title" content={ metaData.title } />
            <meta property="og:description" content="A Frontend Engineering Blog covering React, TypeScript, node.js, JavaScript, CSS, and web technologies." />
            <meta property="og:image" content="/images/preview-image.png" />
            {/* <meta property="og:url" content="https://fomin-dev.com" /> */}
            <meta property="og:type" content="website" />
        </>
    );
}
