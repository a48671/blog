import { PropsWithChildren, ReactElement } from "react";
import styles from './title.module.scss';

export function Title({ children }: PropsWithChildren): ReactElement {
    return <h2 className={ styles.title }>{ children }</h2>;
}
