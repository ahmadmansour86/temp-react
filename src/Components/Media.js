import React, {Component} from 'react';
import axios from 'axios';
import {SocialMedia, MediaItem, SocialIcon, SocialDesc, SocialSpan1, SocialSpan2} from './MediaStyle.js';

class Media extends Component {
    state = {
        sMedia : []
    }
    componentDidMount (){
        axios.get('js/data.json').then( res => { this.setState({sMedia: res.data.social}) } )
    }
    render(){
        const {sMedia} = this.state;
        const mediaList = sMedia.map( (mediaItem) => {
            return(
                <MediaItem key={mediaItem.id} item={mediaItem.id}>
                    <SocialIcon className={mediaItem.icon}></SocialIcon>
                    <SocialDesc>
                        <SocialSpan1>{mediaItem.title}</SocialSpan1>
                        <SocialSpan2>{mediaItem.body}</SocialSpan2>
                    </SocialDesc>
                </MediaItem>
            )
        })

    return(
        <SocialMedia>
           {mediaList}
        </SocialMedia>
        )
    }
}
export default Media;