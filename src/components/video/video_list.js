import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({ videos, onVideoSelect }) => {
    if (!videos) return null;

    const videoItems = videos.map((video, index) => {
        return (
            <VideoListItem
                onVideoSelect={onVideoSelect}
                key={video.etag + `${index}`}
                video={video}
            />
        );
    })

    return (
        <ul className="col-md-4 list-group">
            <div className="next-vedeo-title">다음 동영상</div>
            {videoItems}
        </ul>
    );
};

export default VideoList;