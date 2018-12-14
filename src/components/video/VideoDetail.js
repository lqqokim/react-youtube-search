import React, { Component, Fragment } from 'react';
import Heart from './Heart.js';

class VideoDetail extends Component {
    DEFAULT_URL = `https://www.youtube.com/embed/`;

    constructor(props) {
        super(props);
        const { video } = props;

        this.state = {
            heartClickedVideos: [],
            video: video,
            videoId: video.id.videoId,
            url: this.DEFAULT_URL + video.id.videoId
        }
    }

    onClickHeartBtn = (video) => {
        this.setState({
            video,
            heartClickedVideos: this.state.heartClickedVideos.concat([video])
        }, () => {
            this.props.heartClickedVideos(this.state.heartClickedVideos);
        });
    }

    componentWillReceiveProps(props) {
        const { video } = props
        this.setState({
            video,
            videoId: video.id.videoId,
            url: this.DEFAULT_URL + video.id.videoId
        });
    }

    render() {
        return (
            <Fragment>
                {this.state.video ?
                    (
                        <div className="video-detail col-md-8">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe
                                    className="embed-responsive-item"
                                    title={this.state.video.id.videoId}
                                    src={this.state.url}>
                                </iframe>
                            </div>
                            <div className="details">
                                <div className="content-area">
                                    <div className="title">{this.state.video.snippet.title}</div>
                                    <div className="description">{this.state.video.snippet.description}</div>
                                </div>

                                <Heart
                                    video={this.state.video}
                                    onClickHeartBtn={this.onClickHeartBtn}
                                />
                            </div>
                        </div>
                    ) : <Loading />}
            </Fragment>
        );
    }
}

const Loading = () => {
    return (
        <div> Loading ... </div>
    )
}

export default VideoDetail;