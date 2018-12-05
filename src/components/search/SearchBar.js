import React, { Component } from 'react';
import SearchHistory from './SearchHistory';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
            isShowSearcHistory: false
        }
    }

    componentDidMount() {
        // document.addEventListener('mousedown', this.handleClickOutside);
    }

    onChangeInput = (event) => {
        const keyword = event.target.value;
        this.setState({ keyword });
    }

    onCheckEnter = (event) => {
        if (event.keyCode === 13) {
            this.onSearchVideo(event.target.value);
        }
    }

    onSearchVideo() {
        this.props.onChangeKeyword(this.state.keyword);
    }

    onClickInput = () => {
        if (this.state.isShowSearcHistory) {
            this.setState({ isShowSearcHistory: false });
        } else {
            this.setState({ isShowSearcHistory: true });
        }
    }

    onClickMenuBar = () => {
        const { isOpenMenu } = this.props;
        this.props.onClickMenuBar(!isOpenMenu);
    }

    render() {
        return (
            <div className="header">
                <div className="left">
                    <div className="menu">
                        <i className="fa fa-bars"
                            onClick={this.onClickMenuBar}
                        ></i>
                    </div>
                    <div className="logo">
                        <img src={require('./../images/youtube.jpg')} />
                    </div>
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
                        onClick={() => this.onSearchVideo()}
                    >
                        <i className="fa fa-search"></i>
                    </button>
                    {this.state.isShowSearcHistory &&
                        (
                            <SearchHistory
                                onCloseHistory={() => this.setState({ isShowSearcHistory: false })}
                            />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default SearchBar;