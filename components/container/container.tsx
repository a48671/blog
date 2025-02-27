import { PropsWithChildren, ReactElement } from 'react';
import styles from './container.module.scss';

export function Container({ children }: PropsWithChildren): ReactElement {
    return (
        <div className={ styles.container }>
            { children }
        </div>
    );
}
