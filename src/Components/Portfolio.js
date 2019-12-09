import React, {useState, useEffect} from 'react';
import axios from 'axios';
import  {PortfolioSection, PortfolioTitle, PortfolioList, PortfolioItem, PortfolioSpan, Overlay, Imagewrapper, Image, OverlaySpan} from './PortfolioStyle.js';

const Portfolio = () => {

    const [ images, setImages] = useState([])
    useEffect ( () => {
        axios.get('js/data.json').then( res => { setImages( res.data.portfolio) } )
    } , [] )
    const PortfolioImages = images.map( (imageItem) => {
        return (
            <Imagewrapper key={imageItem.id}>
                    <Image src={imageItem.image} alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
            </Imagewrapper>
        )
    })
    return(
        <PortfolioSection>
            <PortfolioTitle><PortfolioSpan>My</PortfolioSpan> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box">
                {PortfolioImages}
            </div>
            
        </PortfolioSection>
    )
}
export default Portfolio;