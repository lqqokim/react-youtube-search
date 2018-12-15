import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import SearchHistory from './search/SearchHistory';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
            isShowSearcHistory: false
        }
    }

    onChangeInput = (event) => {
        const keyword = event.target.value;
        this.setState({ keyword });
    }

    onCheckEnter = (event) => {
        if (event.keyCode === 13) {
            const keyword = event.target.value;
            this.props.history.push(`/search/${keyword}`);
            this.onSearchVideo(keyword);
        }
    }

    onSearchVideo = () => {
        this.props.onChangeKeyword(this.state.keyword);
    }

    onClickInput = () => {
        this.setState({ isShowSearcHistory: !this.state.isShowSearcHistory });
    }

    onClickMenuBar = () => {
        const { isOpenMenu } = this.props;
        this.props.onClickMenuBar(!isOpenMenu);
    }

    onCloseHistory = () => {
        this.setState({ isShowSearcHistory: false })
    }

    render() {
        return (
            <div className="header">
                <div className="left">
                    <MenuBar
                        onClickMenuBar={this.onClickMenuBar}
                    />
                    <Logo />
                </div>
                <div className="search-bar">
                    <input
                        value={this.state.keyword}
                        onChange={this.onChangeInput}
                        onKeyDown={this.onCheckEnter}
                        onClick={this.onClickInput}
                        placeholder="검색"
                    />
                    <button className="search-button"
                        onClick={this.onSearchVideo}
                    >
                        <i className="fa fa-search"></i>
                    </button>
                    {this.state.isShowSearcHistory &&
                        (
                            <SearchHistory
                                onCloseHistory={this.onCloseHistory}
                            />
                        )
                    }
                </div>
            </div>
        );
    }
}

function MenuBar(props) {
    return (
        <div className="menu">
            <i className="fa fa-bars"
                onClick={props.onClickMenuBar}
            ></i>
        </div>
    );
}

function Logo() {
    return (
        <div className="logo">
            <img src={require('./../assets/images/youtube.jpg')} alt={"logo"} />
        </div>
    );
}

export default withRouter(Header);