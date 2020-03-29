import React from "react";
import {string, shape} from "prop-types";

import './styles.css'

const MapPanel = ({record}) => {
    const geo = record.address.geo

    return (
        <div className='map-panel-container'>
            <div id="gmapcanvas" style={{height: '100%', width: '100%', maxWidth: '100%'}}>
                <iframe
                    title='mapPanel'
                    style={{height: '100%', width: '100%', border: 0}}
                    frameBorder="0"
                    src={`https://www.google.com/maps/embed/v1/place?q=${geo.lat},${geo.lng}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
                ></iframe>
            </div>
            <a
                id="grabmaps-authorization"
                className="codefor-googlemap"
                rel="nofollow"
                href="https://www.embed-map.com"
            >
                https://www.embed-map.com
            </a>
        </div>
    )
}

MapPanel.propTypes = {
    record: shape({
        address: shape({
            geo: shape({
                lat: string.isRequired,
                lng: string.isRequired
            })
        })
    })
}

export default MapPanel