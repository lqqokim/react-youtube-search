import React, { Component } from 'react';
import SearchHistory from './search_history';

class SearchBar extends Component {
    isClickSearchHistory = false;

    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
            isShowSearcHistory: false
        }

        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    onChangeInput(keyword) {
        this.setState({ keyword });
    }

    onCheckEnter(event) {
        if (event.keyCode === 13) {
            this.onSearchVideo(event.target.value);
        }
    }

    onSearchVideo() {
        this.props.onChangeKeyword(this.state.keyword);
    }

    onClickSearchHistroy() {
        this.isClickSearchHistory = true;
    }

    onClickInput() {
        if (this.state.isShowSearcHistory) {
            this.setState({ isShowSearcHistory: false });
        } else {
            this.setState({ isShowSearcHistory: true });
        }
    }

    setWrapperRef(node) {
        console.log('setWrapperRef => ', node);
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        console.log('handleClickOutside => ', event);
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            if (this.state.isShowSearcHistory && !this.isClickSearchHistory) { // input + history 밖 클릭했을때 Close
                this.setState({ isShowSearcHistory: false });
            }
            //  else if (this.state.isShowSearcHistory && this.isClickSearchHistory) { // history 클릭했을때 Open
            //     this.setState({ isShowSearcHistory: true });
            // }
        }
    }

    render() {
        const searchHistory = (
            this.state.isShowSearcHistory ?
                (
                    <SearchHistory
                        onClickSearchHistroy={() => this.onClickSearchHistroy()}
                    />
                ) : null
        );

        return (
            <div className="header">
                <div className="left">
                    <div className="menu">
                        <i className="fa fa-bars"></i>
                    </div>
                    <div className="logo">
                        <img src={require('./../images/youtube.jpg')} />
                    </div>
                </div>
                <div className="search-bar">
                    <input
                        value={this.state.keyword}
                        onChange={event => this.onChangeInput(event.target.value)}
                        onKeyDown={event => this.onCheckEnter(event)}
                        onClick={() => this.onClickInput()}
                        ref={(node) => this.setWrapperRef(node)}
                        placeholder="검색"
                    />
                    <button className="search-button"
                        onClick={() => this.onSearchVideo()}
                    >
                        <i className="fa fa-search"></i>
                    </button>
                    {searchHistory}
                </div>
            </div>
        );
    }
}

export default SearchBar;