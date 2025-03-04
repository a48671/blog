import { enMetaData } from "common/meta-data";
import { Container } from "components/container";
import { PageLayout } from "components/page-layout";
import { PageSubtitle } from "components/page-subtitle";
import { PageTitle } from "components/page-title";

export default function Page() {
    return (
        <PageLayout>
            <PageLayout.Header>
                <Container>
                    <PageTitle>{ enMetaData.title }</PageTitle>
                    <PageSubtitle>List of article</PageSubtitle>
                </Container>
            </PageLayout.Header>
            <PageLayout.Content>
                <Container>
                    
                </Container>
            </PageLayout.Content>
        </PageLayout>
    );
}
