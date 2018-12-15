import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from './components/Header';
import Content from './components/Content';
import Menu from './components/Menu';
import './App.css';

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
    return <App {...props} />
});
