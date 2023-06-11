import React from "react";

function SearchBar({
                       filterText,
                       inStockOnly,
                       onFilterTextChange,
                       onInStockOnlyChange,
                       label
                   }) {
    return (
        <form>
            <input
                type="text"
                value={filterText} placeholder="Search..."
                onChange={(e) => onFilterTextChange(e.target.value)} />
            <label>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                {' '}
                {label}
            </label>
        </form>
    );
}
export default SearchBar;