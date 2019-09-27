import React from 'react';
import axios from 'axios';

const API = 'http://test.thoth-station.ninja/api/v1/python-package-index';

class PackageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            packages: [],
            packages_list_is_loading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ packages_list_is_loading: true });

        axios.get(API)
            .then(result => this.setState({
                packages: result.data, packages_list_is_loading: false
            })
            )
            .catch(error => this.setState({ error, packages_list_is_loading: false }));
    }

    render() {
        const { packages, packages_list_is_loading, error } = this.state;

        if (error) {
            console.log(error)
            return <p></p>;
        }

        if (packages_list_is_loading) {
            return <p>Loading ...</p>;
        }

        if (packages == null) {
            return <p>nothing?!</p>;
        }

        return (
            <div role="packages_index">
                <h2>all the packages</h2>

                <ul role="py-package-index">
                </ul>
            </div>
        );
    }
}


export { PackageList };