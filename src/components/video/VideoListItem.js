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

    onClickItem() {
        this.props.onVideoSelect(this.video);
    }

    onMouseOverItem() {
        this.setState({ isItemOver: true })
    }

    onMouseLeaveItem() {
        this.setState({ isItemOver: false })
    }

    render() {
        const itemLayer = this.state.isItemOver ?
            (
                <div className="play">
                    <i className="fa fa-play"></i>
                </div>
            ) : null;

        const dots = this.state.isItemOver ?
            (
                <div className="item-dots">
                    <span className="dots"></span>
                </div>
            ) : null;

        return (
            <li className="list-group-item"
                onClick={() => this.onClickItem()}
                onMouseOver={() => this.onMouseOverItem()}
                onMouseLeave={() => this.onMouseLeaveItem()}
            >
                <div className="group-item">
                    <div className="item-thumbnail">
                        <img src={this.imageUrl} alt={this.video.title}/>
                        {itemLayer}
                    </div>
                    <div className="item-content">
                        <div className="item-title">
                            {this.video.snippet.title}
                        </div>
                        {dots}
                    </div>
                </div>
            </li>
        );
    }
}

export default VideoListItem;