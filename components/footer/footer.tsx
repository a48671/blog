import { Container } from "components/container";
import { ReactElement } from "react";
import styles from './footer.module.scss';

export function Footer(): ReactElement {
    return (
        <footer>
            <Container>
                <p className={ styles.text }>
                    &copy; 2025, Andrey Fomin
                </p>
            </Container>
        </footer>
    );
}