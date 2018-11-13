import React from 'react';

const VideoList = ({videos}) => {
    return (
        <ul className="col-md-4 list-group">
            {videos.length}
        </ul>
    );
};

export default VideoList;