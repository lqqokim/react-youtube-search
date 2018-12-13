import React, { Component } from 'react';

class VideoListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isItemOver: false
        }

        this.video = props.video;
        this.imageUrl = props.video.snippet.thumbnails.default.url;
    }

    onClickItem = () => {
        this.props.onVideoSelect(this.video);
    }

    onMouseOverItem = () => {
        this.setState({ isItemOver: true })
    }

    onMouseLeaveItem = () => {
        this.setState({ isItemOver: false })
    }

    render() {
        return (
            <li className="list-group-item"
                onClick={this.onClickItem}
                onMouseOver={this.onMouseOverItem}
                onMouseLeave={this.onMouseLeaveItem}
            >
                <div className="group-item">
                    <div className="item-thumbnail">
                        <img src={this.imageUrl} alt={this.video.title} />
                        {this.state.isItemOver && <Layer />}
                    </div>
                    <div className="item-content">
                        <div className="item-title">
                            {this.video.snippet.title}
                        </div>
                        {this.state.isItemOver && <Dots />}
                    </div>
                </div>
            </li>
        );
    }
}

const Layer = () => {
    return (
        <div className="play">
            <i className="fa fa-play"></i>
        </div>
    );
};

const Dots = () => {
    return (
        <div className="item-dots">
            <span className="dots"></span>
        </div>
    );
};

export default VideoListItem;