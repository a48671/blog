import { AllHTMLAttributes, PropsWithChildren, ReactElement } from "react";
import styles from './list.module.scss';
import classNames from "classnames";

export function List({ children, className, ...restProps }: PropsWithChildren<AllHTMLAttributes<HTMLUListElement>>): ReactElement {
    return (
        <ul className={ classNames(styles.list, className) } { ...restProps }>
            { children }
        </ul>
    );
}

function Item({ children, className, ...restProps }: PropsWithChildren<AllHTMLAttributes<HTMLLIElement>>): ReactElement {
    return (
        <li className={ classNames(styles.item, className) } { ...restProps }>
            { children }
        </li>
    )
}

List.Item = Item;
