import { ruMetaData } from "common/meta-data";
import { Container } from "components/container";
import { LinkWithDescription } from "components/link-with-description";
import { List } from "components/list";
import { PageLayout } from "components/page-layout";
import { PageSubtitle } from "components/page-subtitle";
import { PageTitle } from "components/page-title";
import { Title } from "components/title";
import Link from "next/link";

export default function Page() {
    return (
        <PageLayout>
            <PageLayout.Header>
            <Container>
                <PageTitle>{ ruMetaData.title }</PageTitle>
                <PageSubtitle>Список статей</PageSubtitle>
            </Container>
            </PageLayout.Header>
            <PageLayout.Content>
                <Container>
                    <Title>Путь разработчика</Title>
                    <List>
                        <List.Item>
                            <LinkWithDescription
                                title={ 'Обо мне' }
                                href={ '#' }
                                description={ 'some text' }
                            />
                        </List.Item>
                    </List>
                </Container>
            </PageLayout.Content>
        </PageLayout>
    );
}