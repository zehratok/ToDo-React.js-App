import React from 'react';


 const SideBarTitles = (props) => {
    const title = props.title;
    return (
        <div className="side-bar-titles">
             <h6 className=" ui grey header">{title}</h6>
        </div>
    )
}
export default SideBarTitles;


