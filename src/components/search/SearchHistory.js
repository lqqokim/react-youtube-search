import React, { Component } from 'react';

class SearchHistory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: ''
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    }

    handleClickOutside = (event) => {
        if (this.wrapperRef && (this.wrapperRef === event.target)) {//History 내부영역 클릭

        } else if (this.wrapperRef && (this.wrapperRef !== event.target)) { //History 외부영역 클릭
            this.props.onCloseHistory();
        }

        // console.log('handleClickOutside => ', event.target.getAttribute('data-isHistory'));
        // if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        //     if (this.state.isShowSearcHistory && !this.isClickSearchHistory) { // input + history 밖 클릭했을때 Close
        //         this.setState({ isShowSearcHistory: false });
        //     }
        //     //  else if (this.state.isShowSearcHistory && this.isClickSearchHistory) { // history 클릭했을때 Open
        //     //     this.setState({ isShowSearcHistory: true });
        //     // }
        // }
    }

    render() {
        return (
            <div className="search-history"
                ref={this.setWrapperRef}
            >
                검색 내용
        </div>
        );
    }
}

export default SearchHistory;