import { PropsWithChildren, ReactElement } from "react";
import styles from './page-subtitle.module.scss';

export function PageSubtitle({ children }: PropsWithChildren): ReactElement {
    return <p className={ styles.title }>{ children }</p>;
}
