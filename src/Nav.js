import React, { useState } from 'react';

import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

import TocIcon from '@material-ui/icons/Toc';
import CloseIcon from '@material-ui/icons/Close';

function Nav () {

 const[option, setOption]= useState();

const HideOptions = ()=>{
    setOption('');
}

 const ShowOption = () =>{
     setOption(<div className="NAV1RIGHTONTENTIcon">
         <div className="NAV1RIGHTONTENT" onClick={HideOptions}><CloseIcon className="NAV1RIGHTONTENTclosesize" /></div>
     <div className="NAV1RIGHTONTENT">
     <span className="NAV1RIGHTCONTENTSYMBOL"><PersonIcon /> </span>
     <span className="NAV1RIGHTCONTENTNAME">SIGN IN</span>
    </div>
    <div className="NAV1RIGHTONTENT">
    <span className="NAV1RIGHTCONTENTSYMBOL"><FavoriteIcon /> </span>
      <span className="NAV1RIGHTCONTENTNAME">WISHLIST</span>
    </div>
    <div className="NAV1RIGHTONTENT norightborder">
    <span className="NAV1RIGHTCONTENTSYMBOL"> <LocalMallOutlinedIcon /> </span> 
      <span className="NAV1RIGHTCONTENTNAME">BAG</span>
    </div> 
    </div>)
 }

    return(
        <> 
        <div>{option}</div>
    <header className="HEADEROFNAV1ANDNAV2">
    
    <div className="NAV1">
        <div className="NAV1LEFT">
            <img src="https://www.designfreelogoonline.com/wp-content/uploads/2015/06/leaf-logos-free-logo-online.jpg"
             className="NAV1LOGO"></img>
            
            <input type="text" placeholder="Search.." className="NAV1INPUT"></input>
        </div>
        <div className="NAV1MIDDLE">
          <span className="NAV1COMNAM">D2R TECH</span> 
          <span className="NAV1TITLENAM">a world of the technology</span>
        </div>
        <div className="NAV1RIGHT" onClick={ShowOption}>
            <TocIcon className="TocIcon"  />
        </div>
    </div>   

    <div className="NAV2">
        <div className="NAV2CONTENT">
            <span className="NAV2CONTENTNAME">NEWS</span>
            <span className="NAV2CONTENTNAME">Specials</span>
            <span className="NAV2CONTENTNAME">Earning</span>
            <span className="NAV2CONTENTNAME">Cryptocurrency</span>
            <span className="NAV2CONTENTNAME">Sports</span>
            <span className="NAV2CONTENTNAME saleNav2">Views</span>
        </div>
        <div className="NAV2CONTENT borderremovenav2">
            <span className="NAV2CONTENTNAME">Podcasts</span>
            <span className="NAV2CONTENTNAME">Show</span>
            <span className="NAV2CONTENTNAME TheeditNav2">More</span>
        </div>
    </div>

    </header>
   </> );
}

export default Nav;

