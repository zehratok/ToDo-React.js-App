import React from 'react';


function Buttons(props) {
    const {iconName,colorName} = props;
    return (
        <div>
            <button className="buttton">
                <div className={'Buttons Buttons-' + props.color}>
                    <i className={`${iconName} ${colorName}  icon`}></i>

                    {props.childeren}

                </div>
            </button>
        </div>

    );
}
export default Buttons;