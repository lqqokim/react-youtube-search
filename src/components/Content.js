//Component
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

//Components
import Home from './routes/Home';
import Search from './routes/Search';
import Like from './routes/Like';

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: props.keyword
        }
    }

    render() {
        return (
            <Fragment>
                <Route exact path="/" component={Home} />
                <Route path="/like" component={Like} />
                <Route path="/search/:keyword" keyword={this.state.keyword} component={Search} />
            </Fragment>
        );
    }
}
export default Content;