import React, { Component } from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import searchYoutube from 'youtube-api-v3-search';
// import * as serviceWorker from './serviceWorker';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCrI0kwNS07VIBB006Rhu5WuI-9hZPoYD4';
const options = {
    q: '트와이스',
    part: 'snippet',
    type: 'video'
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch(options);
    }

    videoSearch(keyword) {
        options.q = keyword;

        searchYoutube(API_KEY, options).then((videos) => {
            const items = videos.items;
            console.log('Video List => ', items)

            this.setState({
                videos: items,
                selectedVideo: items[0]
            });
        });
    }

    /**
     * 상위 컴포넌트에 이벤트 전달하는 방식
     * 1. Callback Function 전달
     * 2. Props로 접근
     */
    
    render() {
        return (
            <div>
                <SearchBar
                    onChangeKeyword={(keyword) => {
                        this.videoSearch(keyword);
                    }}
                />
                <VideoDetail
                    video={(this.state.selectedVideo)}
                />
                <VideoList
                    onVideoSelect={(selectedVideo) => {
                        this.setState({ selectedVideo });
                    }}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();
