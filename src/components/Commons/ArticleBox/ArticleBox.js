import React from 'react'

export const ArticleBox = props => {

   //TODO: Move to utils file
   function parseDate(date){
       date = new Date(date);
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric"
        };

        return date.toLocaleDateString("es-ar", options);
   }

    return (
      <article className="mod-caja-nota lugares w-100-mobile">
        <section id="" className="cont-figure">
          <a href="" className="figure">
            <picture id="" className="content-pic picture">
              {props.promo_items && (
                <img
                  src={props.promo_items.basic.url}
                  alt=""
                  className="content-img"
                />
              )}
            </picture>
          </a>
        </section>
        <div className="mod-caja-nota__descrip">
          <h2 className="com-title-acu">
            <a href={props.website_url}>
              <b>{props.headlines.basic}</b>
              {props.headlines.subtitle}
            </a>
          </h2>
          <h4 className="com-date">{parseDate(props.display_date)}</h4>
        </div>
      </article>
    );
}
