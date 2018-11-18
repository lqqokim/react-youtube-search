import React, { Component } from 'react';
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

        searchYoutube(API_KEY, options).then((videos) => {
            const items = videos.items;
            console.log('items => ', items)
            
            this.setState({
                videos: items,
                selectedVideo: items[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();
