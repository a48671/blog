import { Container } from 'components/container';
import { PageLayout } from 'components/page-layout';
import { enMetaData } from 'common/meta-data';
import styles from './root-page.module.scss';

export default function Page() {
    return (
        <PageLayout className={ styles.pageLayout }>
            <PageLayout.Header className={ styles.header }>
                <Container>
                    <h1 className={ styles.title }>{ enMetaData.title }</h1>
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