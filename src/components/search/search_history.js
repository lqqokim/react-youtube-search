import React, { Component } from 'react';

class SearchHistory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: ''
        }
    }

    render() {
        const searchHistoryStyle = {
            position: 'absolute',
            border: '2px solid red',
            zIndex: '1',
            width: '75%',
            height: '250px',
            backgroundColor: 'white'
        };

        return (
            <div className="search-history"
                style={searchHistoryStyle}
                onClick={() => console.log('onClick')}
            >
                검색 내용
        </div>
        );
    }
}

export default SearchHistory;