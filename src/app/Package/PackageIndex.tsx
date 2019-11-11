import React from 'react';
import axios from 'axios';

const API = 'https://stage.thoth-station.ninja/api/v1/python-package-index';

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

        axios.get(API)
            .then(result => this.setState({
                package_indices: result.data, package_indices_is_loading: false
            })
            )
            .catch(error => this.setState({ error, package_indices_is_loading: false }));
    }

    render() {
        const { package_indices, package_indices_is_loading, error } = this.state;

        console.log(package_indices)

        if (error) {
            console.log(error)
            return <p></p>;
        }

        if (package_indices_is_loading) {
            return <p>Loading ...</p>;
        }

        if (package_indices == null) {
            return <p>nothing?!</p>;
        }

        return (
            <div role="package_index">
                <p>{package_indices.length} in total</p>
                <ul role="pypi-index">
                    {package_indices.map(the_index =>
                        <li key={the_index.url.toString()}>{the_index.url.toString()}</li>
                    )}
                </ul>
            </div>
        );
    }
}


export { PackageIndices };