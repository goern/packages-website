import React from 'react';
import axios from 'axios';
import parsePrometheusTextFormat from 'parse-prometheus-text-format';

const API = 'http://metrics-exporter-thoth-test-core.cloud.paas.psi.redhat.com/metrics';

class KnowledgeGraphMetrics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            metrics: null,
            metrics_is_loading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ metrics_is_loading: true });

        axios.get(API)
            .then(result => {
                this.setState({
                    metrics: parsePrometheusTextFormat(result.data), metrics_is_loading: false
                })
            })
            .catch(error => this.setState({ error, metrics_is_loading: false }));
    }

    render() {
        const { metrics, metrics_is_loading, error } = this.state;
        console.log(metrics)

        if (metrics_is_loading) {
            return <p>Loading ...</p>;
        }

        if (metrics == null) {
            return <p>nothing?!</p>;
        }


        return (
            <div role="knowledge_graph_metrics">
                <ul role="metrics">
                    Package Versions ingested: {
                        metrics.filter(m => m.main_table === "python_package_metadata_classifier").
                            map(m => <li>{m.value}</li>)
                    }
                </ul>

            </div>
        );
    }
}

export { KnowledgeGraphMetrics };