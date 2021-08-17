import React from 'react';

const SideBarGroups = (props) => {
    const name = props.name;
    return (
        <div className="side-bar-groups">
            <div className="ui items">
                <div className="item">
                    <div className="content">
                        <a className="header">
                            <i class="bars icon"></i>
                            {name}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SideBarGroups;