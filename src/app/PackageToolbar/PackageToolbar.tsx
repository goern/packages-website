import React from 'react';
import { DataToolbar, DataToolbarItem, DataToolbarContent } from '@patternfly/react-core/dist/esm/experimental';
import { Button, InputGroup, TextInput } from '@patternfly/react-core';
import { SearchIcon, FilterIcon } from '@patternfly/react-icons'


const PackageToolbar: React.FunctionComponent<any> = (props) => {
    const items = <React.Fragment>
        <DataToolbarItem>
            <InputGroup>
                <TextInput name="textInput1" id="textInput1" type="search" aria-label="search input example" />
                <Button variant={ButtonVariant.tertiary} aria-label="search button for search input">
                    <SearchIcon />
                </Button>
            </InputGroup>
        </DataToolbarItem>
        <DataToolbarItem><Button variant="secondary">Action</Button></DataToolbarItem>
        <DataToolbarItem variant="separator" />
        <DataToolbarItem><Button variant="primary">Action</Button></DataToolbarItem>
    </React.Fragment>;

    return (<DataToolbar id="data-toolbar"><DataToolbarContent>{items}</DataToolbarContent></DataToolbar>);
}

export { PackageToolbar };
