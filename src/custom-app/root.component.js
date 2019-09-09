import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {showFrameworkObservable, getBorder} from 'src/common/colored-border.js';

export default class Root extends React.Component {

    data = null;

    constructor() {
        super();
        this.state = {
            busy: false,
        };
    }

    componentWillMount() {
        this.getData();
    }

    componentDidMount() {
    }

    getData() {
        let _self = this;
        const url = 'http://localhost:10022';

        this.setState({busy: true});
        const result = fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                _self.data = JSON.stringify(myJson);
                _self.setState({busy: false});
            });

        return result;
    }

    render() {
        return (
            <div>
                <h1>Hello {this.data}</h1>
            </div>
        );
    }
}
