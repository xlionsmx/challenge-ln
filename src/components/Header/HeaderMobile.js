import React from 'react'

export const HeaderMobile = () => {
    return (
        <header className="header-mobile">
            <div className="lay">
                <div className="row">
                    <div className="col-6">
                        <a href="/" className="header-mobile__logo">
                            <i className="logo-la-nacion"></i>
                        </a>
                    </div>
                    <div className="col-6 hlp-text-right">
                            <a>Suscribite</a>
                    </div> 
                </div> 
            </div>
        </header>
    )
}
