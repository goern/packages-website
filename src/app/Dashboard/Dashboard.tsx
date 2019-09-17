import * as React from 'react';
import { PageSection, Title, Bullseye } from '@patternfly/react-core';
import { PackageToolbar } from '@app/PackageToolbar/PackageToolbar';
import { PackageIndices } from '@app/PackageIndex/PackageIndex';

const Dashboard: React.FunctionComponent<any> = (props) => {
    return (
        <PageSection>
            <Title size="xl">Package Background Check Results</Title>

            <div><PackageIndices /></div>

            <Bullseye><div>lame</div></Bullseye>

        </PageSection>
    );
}

export { Dashboard };
