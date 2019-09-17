import React from 'react';


class PackageIndices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            package_indices: null,
            package_indices_is_loading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ package_indices_is_loading: true });

        fetch('http://stage.thoth-station.ninja/api/v1/python-package-index', { mode: 'no-cors' })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((data) => {
                this.setState({
                    package_indices: data, package_indices_is_loading: false
                })
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { package_indices, package_indices_is_loading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (package_indices_is_loading) {
            return <p>Loading ...</p>;
        }

        if (package_indices == null) {
            return <p>nothing?!</p>;
        }

        return (
            <div role="package_index">
                <h2>all the indices we monitor</h2>

                <ul>
                    {package_indices.map(the_index =>
                        <PackageIndex url={the_index.url} />
                    )}
                </ul>
            </div>
        );
    }
}

function PackageIndex(props) {
    return (
        <div>{props.url}</div>
    );
}

export { PackageIndices, PackageIndex };