import React from 'react'

export const ArticleBox = props => {

    const {title, description, imgUrl, date} = props;

    return (
      <article className="mod-caja-nota lugares w-100-mobile">
        <section id="" className="cont-figure">
          <a href="" className="figure">
            <picture id="" className="content-pic picture">
              <img src={imgUrl} alt="" className="content-img" />
            </picture>
          </a>
        </section>
        <div className="mod-caja-nota__descrip">
          <h2 className="com-title-acu">
            <a href="">
              <b>{title}</b>
              {description}
            </a>
          </h2>
          <h4 className="com-date">{date}</h4>
        </div>
      </article>
    );
}
