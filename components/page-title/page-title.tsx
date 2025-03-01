import { PropsWithChildren, ReactElement } from "react";
import styles from './page-title.module.scss';

export function PageTitle({ children }: PropsWithChildren): ReactElement {
    return <h1 className={ styles.title }>{ children }</h1>;
}
