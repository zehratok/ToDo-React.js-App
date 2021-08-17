import React from 'react';

const SideBarItems = (props) => {
    const { name, iconName } = props;
    return (
        <div className="side-bar-items">
            <div className="ui list">
                <a className="item">
                    <i className={`${iconName} icon`}></i>
                    <div className="content">
                        <div className="header">{name}</div>
                    </div>
                </a>

            </div>
        </div>
    )
}
export default SideBarItems;