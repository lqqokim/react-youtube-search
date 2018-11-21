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
        if(event.keyCode === 13) {
            this.onSearchVideo(event.target.value);
        }
    }

    onSearchVideo() {
        this.props.onChangeKeyword(this.state.keyword);
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.keyword}
                    onChange={event => this.onChangeInput(event.target.value)}
                    onKeyDown={event => this.onCheckEnter(event)}
                    placeholder="검색"
                />
                <button className="search-button"
                    onClick={event => this.onSearchVideo()}
                >
                    <i className="fa fa-search"></i>
                </button>
            </div>
        );
    }
}

export default SearchBar;