import React from 'react';
import Checkbox from './Checkbox';

const Planning = () => {
    return (
        <div className="planing">
            <h3 className="ui dividing header">
                Product Planing
                <button className="button">
                    <i className="ellipsis horizontal icon"></i>
                </button>
            </h3>

            <Checkbox text="Decide how to organize Today page" />
            <Checkbox text="Decide how to organize Today page" />
            <Checkbox text="Decide how to organize Today page" />
        </div>
    )
}
export default Planning;