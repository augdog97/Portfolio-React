import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// Icon Import, just use icon name from website
import {faHome, faFolder, faPlane, faEnvelope, faGlobe, faDatabase, faUserFriends, faBars} from '@fortawesome/free-solid-svg-icons';






export const HomeIcon = () => {
    return ( 
         <FontAwesomeIcon  size="2x" icon={faHome} />
    )
}

export const PlaneIcon = () => {
    return ( 
         <FontAwesomeIcon  size="2x" icon={faPlane} />
    )
}

export const FolderIcon = () => {
    return ( 
         <FontAwesomeIcon  size="2x" icon={faFolder} />
    )
}

export const EmailIcon = () => {
    return ( 
         <FontAwesomeIcon  size="2x" icon={faEnvelope} />
    )
}

export const Globe = () => {
    return ( 
        <FontAwesomeIcon
         size="2x" 
         icon={faGlobe} 
        style={{
        color: "black"}} />
    )
}


export const WordpressComp = () => {
    return ( 
        <FontAwesomeIcon 
        size="2x" 
        icon={faDatabase}
         style={{
            color: "black"}} />
    )
}


export const PeopleIcon = () => {
    return ( 
        <FontAwesomeIcon
         size="2x" 
         icon={faUserFriends} 
         style={{
            color: "black" }}/>
    )
}

export const BarIcon = () => {
    return ( 
        <FontAwesomeIcon
         size="1x" 
         icon={faBars} 
         />
    )
}

export default HomeIcon;
