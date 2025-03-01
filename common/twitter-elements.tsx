import { ReactElement } from "react";
import { enMetaData, ruMetaData } from "./meta-data";
import { LangEnum } from "./types";

export function twitterElements(lang: LangEnum): ReactElement {
    const metaData = lang === LangEnum.RU ? enMetaData : ruMetaData;

    return (
        <>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={ metaData.title } />
            <meta name="twitter:description" content={ metaData.description } />
            <meta name="twitter:image" content="/images/preview-image.png" />
        </>
    );
}
