import React, { Component, Fragment } from 'react';

//Api
import searchYoutube from 'youtube-api-v3-search';

//Components
import VideoList from './../video/VideoList';
import VideoDetail from './../video/VideoDetail';

const API_KEY = 'AIzaSyCrI0kwNS07VIBB006Rhu5WuI-9hZPoYD4';
const options = {
    q: '',
    part: 'snippet',
    type: 'video'
};

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: props.match.params.keyword,
            videos: [],
            selectedVideo: null,
            heartClickedVideos: []

        };

        this.videoSearch();
    }

    componentWillReceiveProps(props) {
        const { keyword } = props.match.params;
        this.setState({ keyword }, () => {
            this.videoSearch();
        });
    }

    //Youtube api 호출 -> Promise 형태로 반환
    videoSearch = () => {
        options.q = this.state.keyword;
        searchYoutube(API_KEY, options).then((videos) => {
            for (let i = 0; i < videos.items.length; i++) {
                videos.items[i]['isChecked'] = false;
            }

            const items = videos.items.concat(videos.items, videos.items, videos.items, videos.items);

            this.setState({
                videos: items.concat([]),
                selectedVideo: items[0]
            });
        });
    }

    onVideoSelect = (selectedVideo) => {
        this.setState({ selectedVideo });
    }

    render() {
        return (
            <div>
                {
                    this.state.selectedVideo &&
                    (
                        <Fragment>
                            <VideoDetail
                                video={(this.state.selectedVideo)}
                            />
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos}
                            />
                        </Fragment>
                    )
                }

            </div>
        )
    }
}

export default Search;