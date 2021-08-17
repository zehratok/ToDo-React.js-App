import React from 'react'

export const SideBarLowerPart = () => {
    return (
        <div>
            <div className="add-button">
                <button className="ui circular primary icon button">
                    <i className="plus icon"></i>
                </button>
            </div>
            <div className="check-box">
                <div class="ui toggle checkbox">
                    <input type="checkbox" name="public" />
                    <label></label>
                </div>
            </div>
        </div>
    )
}
