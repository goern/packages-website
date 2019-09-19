import React from 'react';
import axios from 'axios';

import { PageSection, Title, Bullseye } from '@patternfly/react-core';


const API = 'http://test.thoth-station.ninja/api/v1/runtime-envrionment';

class RuntimeEnvironments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            runtime_environments: null,
            is_loading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ is_loading: true });

        axios.get(API)
            .then(result => this.setState({
                runtime_environments: result.data.runtime_environments, is_loading: false
            })
            )
            .catch(error => this.setState({ error, is_loading: false }));
    }

    render() {
        const { runtime_environments, is_loading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (is_loading) {
            return <p>Loading ...</p>;
        }

        if (runtime_environments == null) {
            return <p />;
        }

        return (
            <PageSection>
                <Title size="xl">Runtime Environments</Title>

                <Bullseye>
                    <div role="runtime_environments">
                        <ul>
                            {runtime_environments.map(runtime_environment =>
                                <li>{runtime_environment.os_name} {runtime_environment.os_version} Python {runtime_environment.os_version}</li>
                            )}
                        </ul>
                    </div>
                </Bullseye>

            </PageSection>

        );
    }
}


export { RuntimeEnvironments };