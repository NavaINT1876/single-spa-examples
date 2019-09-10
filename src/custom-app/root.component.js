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
        // if(!this.state.busy){
        //     const script = document.getElementById('client-script').innerHTML;
        //     const script1 = document.getElementById('jqueryy').innerHTML;
        //     window.eval(script1);
        //     window.eval(script);
        // }

    }

    getData() {
        let _self = this;
        const url = 'http://localhost:10022';

        this.setState({busy: true});
        const result = fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (myJson) {
                // Initialize the DOM parser
                var parser = new DOMParser();

                console.log(myJson);
                // Parse the text
                var doc = parser.parseFromString(myJson, "text/html");
                _self.data = myJson;
                _self.setState({busy: false});
            });

        return result;
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.data}}>
                {/*<h1>Hello</h1>*/}
            </div>
        );
    }
}
