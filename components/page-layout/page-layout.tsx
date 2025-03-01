import { Footer } from "components/footer";
import { PropsWithChildren, ReactElement, HTMLAttributes } from "react";
import { Roboto } from 'next/font/google';
import styles from './page-layout.module.scss';
import classNames from "classnames";

const font = Roboto({ subsets: ['latin'] });

interface LayoutProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export function PageLayout({ className, children, ...restProps }: LayoutProps): ReactElement {
    return (
        <div
            className={ classNames(font.className, styles.layout, className) }
            { ...restProps }
        >
            { children }
            <Footer />
        </div>
    );
}

interface ContentProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
    className?: string;
}

function Content({ className, children, ...restProps }: ContentProps): ReactElement {
    return (
        <main
            className={ classNames(styles.main, className) }
            { ...restProps }
        >
            { children }
        </main>
    );
}

interface HeaderProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
    className?: string;
}

function Header({ className, children, ...restProps }: HeaderProps): ReactElement {
    return (
        <header
            className={ classNames(styles.header, className) }
            { ...restProps }
        >
            { children }
        </header>
    );
}

PageLayout.Content = Content;

PageLayout.Header = Header;
