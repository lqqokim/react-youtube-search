import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { keyword: '' }
    }

    onChangeInput(keyword) {
        this.setState({ keyword });
        this.props.onChangeKeyword(keyword);
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.keyword}
                    onChange={event => this.onChangeInput(event.target.value)}
                />
            </div>
        );
    }
}

export default SearchBar;