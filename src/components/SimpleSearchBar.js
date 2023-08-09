import React from "react";

function SimpleSearchBar({
                       filterText,
                       onFilterTextChange,
                       label
                   }) {
    return (
        <form>
            <input
                type="text"
                value={filterText} placeholder="Search..."
                onChange={(e) => onFilterTextChange(e.target.value)} />
        
        </form>
    );
}
export default SimpleSearchBar;