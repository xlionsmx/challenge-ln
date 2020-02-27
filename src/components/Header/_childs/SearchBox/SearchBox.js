import React from 'react'

export const SearchBox = () => {
    return (
        <form className="com-search " _lpchecked="1">
            <input type="text" className="com-search__input" placeholder="Buscar"/>
            <i className="icon-search"></i>
            <input type="submit" value="Buscar" className="--btn --primary com-search__submit"/>
        </form>
    )
}
