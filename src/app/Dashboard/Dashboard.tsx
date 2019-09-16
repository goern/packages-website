import * as React from 'react';
import { PageSection, Title, Bullseye } from '@patternfly/react-core';
import { PackageToolbar } from '@app/PackageToolbar/PackageToolbar';

const Dashboard: React.FunctionComponent<any> = (props) => {
    return (
        <PageSection>
            <Title size="xl">Package Background Check Results</Title>

            <Bullseye><div>lame</div></Bullseye>
        </PageSection>
    );
}

export { Dashboard };
