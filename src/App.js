//React
import React, { Component } from 'react';

//Api
import searchYoutube from 'youtube-api-v3-search';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

import Header from './components/Header';
import Content from './components/Content';
import Menu from './components/Menu';
import './App.css';

import Home from './components/routes/Home';
import Search from './components/routes/Search';
import Like from './components/routes/Like';

const API_KEY = 'AIzaSyCrI0kwNS07VIBB006Rhu5WuI-9hZPoYD4';
const options = {
    q: '',
    part: 'snippet',
    type: 'video'
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            keyword: '',
            selectedVideo: null,
            isOpenMenu: false
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            if (this.state.isOpenMenu) {
                this.setState({ isOpenMenu: false });
            }
        }
    }

    onClickMenuBar = (isOpenMenu) => {
        this.setState({ isOpenMenu });
    }

    onChangeKeyword = (keyword) => {
        this.setState({ keyword })
    }

    render() {
        return (
            <div style={{ paddingTop: '55px' }}>
                <Header
                    isOpenMenu={this.state.isOpenMenu}
                    onChangeKeyword={this.onChangeKeyword}
                    onClickMenuBar={this.onClickMenuBar}
                />

                {/* <Route exact path="/" component={Home} />
                <Route path="/like" component={Like} />
                <Route path="/search" keyword={this.state.keyword} component={Search} /> */}
                <Content
                    keyword={this.state.keyword}
                />

                <Menu
                    isOpenMenu={this.state.isOpenMenu}
                />
            </div>
        );
    }
}

export default withRouter(props => {
    console.log(props);
    return <App {...props} />
});
