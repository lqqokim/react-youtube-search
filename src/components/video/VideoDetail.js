import React from 'react';
import Heart from './Heart.js';

const VideoDetail = ({ video }) => {
    console.log('VideoDetail => ', video);
    if (!video) {
        return <div>Loading ...</div>
    } else {

    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div className="content-area">
                    <div className="title">{video.snippet.title}</div>
                    <div className="description">{video.snippet.description}</div>
                </div>

                <Heart />
            </div>
        </div>
    );
}

export default VideoDetail;