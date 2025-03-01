import classNames from "classnames";
import Link from "next/link";
import { AllHTMLAttributes, ReactElement } from "react";
import styles from './link-with-description.module.scss';

interface LinkWithDescriptionProps extends AllHTMLAttributes<HTMLAnchorElement> {
    title: string;
    description?: string;
    href: string;
    descriptionClassName?: string;
}

export function LinkWithDescription(props: LinkWithDescriptionProps): ReactElement {
    const {
        title,
        description,
        className,
        descriptionClassName,
        href,
        ...restProps
    } = props;

    return (
        <>
            <Link
                className={ classNames(styles.link, className) }
                href={ href }
                { ...restProps }
            >
                { title }
            </Link>
            { description &&
                <p className={ classNames(styles.description, descriptionClassName) }>
                    { description }
                </p>
            }
        </>
    );
}