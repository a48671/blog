import { Container } from 'components/container';
import { PageLayout } from 'components/page-layout';
import { enMetaData } from 'common/meta-data';
import styles from './page.module.scss';
import { PageTitle } from 'components/page-title';

export default function Page() {
    return (
        <PageLayout>
            <PageLayout.Header className={ styles.header }>
                <Container>
                    <PageTitle>{ enMetaData.title }</PageTitle>
                </Container>
            </PageLayout.Header>
            <PageLayout.Content className={ styles.content }>
            <div className={ styles.navigation }>
                <a className={ styles.link } href="/en">EN</a>
                <span className={ styles.separator } />
                <a className={ styles.link } href="/ru">RU</a>
            </div>
            </PageLayout.Content>
        </PageLayout>
        
    );
}