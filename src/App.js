//React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Libs
import _ from 'lodash';

//Api
import searchYoutube from 'youtube-api-v3-search';

//Components
import SearchBar from './components/search/SearchBar';
import VideoList from './components/video/VideoList';
import VideoDetail from './components/video/VideoDetail';
import Menu from './components/menu/Menu';
import './index.css';

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
            selectedVideo: null,
            isOpenMenu: false
        };

        this.videoSearch(options);
    }

    //Youtube api 호출 -> Promise 형태로 반환
    videoSearch = (keyword) => {
        options.q = keyword;

        searchYoutube(API_KEY, options).then((videos) => {
            const items = videos.items.concat(videos.items, videos.items, videos.items, videos.items);

            this.setState({
                videos: items.concat([]),
                selectedVideo: items[0]
            });
        });
    }

    onClickMenuBar = (isOpenMenu) => {
        this.setState({ isOpenMenu });
    }

    onVideoSelect = (selectedVideo) => {
        this.setState({ selectedVideo });
    }

    render() {
        return (
            <div style={{ paddingTop: '55px' }}>
                <SearchBar
                    isOpenMenu={this.state.isOpenMenu}
                    onChangeKeyword={this.videoSearch}
                    onClickMenuBar={this.onClickMenuBar}
                />
                <VideoDetail
                    video={(this.state.selectedVideo)}
                />
                <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}
                />
                <Menu
                    isOpenMenu={this.state.isOpenMenu}
                />
            </div >
        );
    }
}

export default App;
