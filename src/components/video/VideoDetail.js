import React, { Component, Fragment } from 'react';
import Heart from './Heart.js';

import { connect } from 'react-redux';
import { changeList } from './../../store/modules/List';

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
            changeList(this.state.heartClickedVideos);
            console.log('onClickHeartBtn => ', this.state.heartClickedVideos);
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

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
    list: state.List.list
});

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
    changeList: list => dispatch(changeList(list))
});

const Loading = () => {
    return (
        <div> Loading ... </div>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoDetail);