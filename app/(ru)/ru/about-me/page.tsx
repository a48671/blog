import { Container } from "components/container";
import { PageLayout } from "components/page-layout";
import { PageTitle } from "components/page-title";
import { ReactElement } from "react";

export default function AboutMe(): ReactElement {
    return (
        <PageLayout>
            <PageLayout.Header>
                <Container>
                    <PageTitle>

                    </PageTitle>
                </Container>
            </PageLayout.Header>
            <PageLayout.Content>
                <Container>
                    
                </Container>
            </PageLayout.Content>
        </PageLayout>
    );
}