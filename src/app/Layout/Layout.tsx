import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Page,
    PageHeader,
    PageSidebar,
    SkipToContent
} from '@patternfly/react-core';
import { routes } from '@app/routes';

interface IAppLayout {
    children: React.ReactNode;
}

const Layout: React.FunctionComponent<IAppLayout> = ({ children }) => {
    const logoProps = {
        href: '/',
        target: '_blank'
    };
    const [isNavOpen, setIsNavOpen] = React.useState(true);
    const [isMobileView, setIsMobileView] = React.useState(true);
    const [isNavOpenMobile, setIsNavOpenMobile] = React.useState(false);
    const onNavToggleMobile = () => {
        setIsNavOpenMobile(!isNavOpenMobile);
    };
    const onNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    }
    const onPageResize = (props: { mobileView: boolean; windowSize: number }) => {
        setIsMobileView(props.mobileView);
    };
    const Header = (
        <PageHeader
            logo="The Thoth Knowledge Graph"
            logoProps={logoProps}
            showNavToggle={false}
            isNavOpen={isNavOpen}
            onNavToggle={isMobileView ? onNavToggleMobile : onNavToggle}
        />
    );
    const PageSkipToContent = (
        <SkipToContent href="#primary-app-container">
            Skip to Content
        </SkipToContent>
    );
    return (
        <Page
            mainContainerId="primary-app-container"
            header={Header}
            onPageResize={onPageResize}
            skipToContent={PageSkipToContent}>
            {children}
        </Page>
    );
}

export { Layout };