import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li className="list-group-item"
            onClick={() => onVideoSelect(video)}
        >
            <div className="a">
                <div className="b">
                    <img src={imageUrl} />
                    <div className="f">
                        <i class="fa fa-play"></i>
                    </div>
                </div>
                <div className="c">
                    <div className="d">{video.snippet.title}</div>
                </div>
                <div className="e">
                    <span className="dots"></span>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;