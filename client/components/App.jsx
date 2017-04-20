import React from "react";

import Rate from './Rate.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <h1 className="ui center aligned header">MMK Exchange</h1>
                <Rate />
            </div>
        );
    }
}