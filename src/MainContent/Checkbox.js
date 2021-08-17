import React from 'react';

const Checkbox = (props) => {
    const text = props.text;
    return (
        <div className="mainCheckbox">
        <div className="ui rating" data-max-rating="1"></div>
            <div className="ui checkbox">
                <input type="checkbox" name="example" />
                <label>{text}</label>
            </div>
        </div>
    )
}
export default Checkbox;