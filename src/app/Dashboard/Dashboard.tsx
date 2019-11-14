import * as React from 'react';
import { PageSection, Title, Bullseye, Grid, GridItem } from '@patternfly/react-core';

import { PackageToolbar } from '@app/PackageToolbar/PackageToolbar';
import { PackageIndices } from '@app/Package/PackageIndex';
import { PackageList } from '@app/Package/Package';
import { KnowledgeGraphMetrics } from '@app/KnowledgeGraphMetrics/KnowledgeGraphMetrics';
import { RuntimeEnvironments } from '@app/RuntimeEnvironment/RuntimeEnvironment';


const Dashboard: React.FunctionComponent<any> = (props) => {
    return (
        <PageSection>
            <Bullseye>
                <Grid>
                    <GridItem span={12}><h1>PackageIndex</h1><div><PackageIndices /></div></GridItem>
                </Grid>
            </Bullseye>
        </PageSection >
    );
}

export { Dashboard };
