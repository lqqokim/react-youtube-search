import React, { Component } from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    let showImageLayer = null;

    const onMouseOverItem = (type) => {
        showImageLayer = (
            <div className="play">
                <i className="fa fa-play"></i>
            </div>
        );
    }

    const onMouseLeaveItem = (type) => {
        showImageLayer = null;
    }

    return (
        <li className="list-group-item"
            onClick={() => onVideoSelect(video)}
            onMouseOver={(event) => onMouseOverItem(event.type)}
            onMouseLeave={(event) => onMouseLeaveItem(event.type)}
        >
            <div className="group-item">
                <div className="item-thumbnail">
                    <img src={imageUrl} />
                    {showImageLayer}
                </div>
                <div className="item-content">
                    <div className="item-title">
                        {video.snippet.title}
                    </div>
                    <div className="item-dots">
                        <span className="dots"></span>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;