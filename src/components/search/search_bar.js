import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { keyword: '' }
    }

    onChangeInput(keyword) {
        this.setState({ keyword });
        // this.props.onChangeKeyword(keyword);
    }

    onCheckEnter(event) {
        if (event.keyCode === 13) {
            this.onSearchVideo(event.target.value);
        }
    }

    onSearchVideo() {
        this.props.onChangeKeyword(this.state.keyword);
    }

    onClickInput() {
        console.log('onClickInput');
    }

    render() {
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
                        onClick={() => this.onClickInput}
                        placeholder="검색"
                    />
                    <button className="search-button"
                        onClick={() => this.onSearchVideo()}
                    >
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchBar;