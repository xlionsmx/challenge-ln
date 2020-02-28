import React from 'react'
import { Menu } from './_childs/Menu/Menu';
import { SearchBox } from './_childs/SearchBox/SearchBox';
import { Logo } from '../Commons/Logo/Logo';

export const Header = () => {
    return (
      <header className="header --scrollUp">
        {/*TODO: Logic scrollup header*/}
        <div className="lay">
          <div className="row">
            <div className="col-4 header__left">
              <Menu />
              <SearchBox />
            </div>
            <div className="col-4  header__middle">
              <Logo />
            </div>
            <div className="col-4 header__right">
              {/*if not logged0*/}
              <div className="com-usuario">
                <button className="--btn --highlight hlp-marginRight-35">
                  Suscribite
                </button>
                <button className="--btn --secondary">Ingresar</button>
              </div>

              {/*if logged and not subscript
                    <div className="com-usuario">
                        <button className="--btn --highlight hlp-marginRight-35">Suscribite</button>
                        <div>
                            <p className="com-usuario__name">Carlito Peralta</p>
                            <p className="com-usuario__valueSuscrib">Sin suscripción digital</p>
                        </div>
                    </div>
                    */}

              {/*logged and subscript
              <div className="com-usuario">
                <div>
                  <p className="com-usuario__name">Carlito Peralta</p>
                  <p className="com-usuario__valueSuscrib">
                    Suscriptor digital
                  </p>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </header>
    );
}
