import React, { useState, useEffect } from "react";
import { BasicLayout } from '../layouts/BasicLayout/BasicLayout'
import { Tag } from '../components/Commons/Tag/Tag'
import { loadArticles } from "../api";
import { ArticleBox } from "../components/Commons/ArticleBox/ArticleBox";
import { Loading } from "../components/Commons/Loading/Loading";

export const ArticleGrid = () => {

    const [articles, setArticles] = useState([]);
    const [showAll, setShowAll] = useState(false);

    //TODO:Move to constants file
    const TAGS_AMOUNT = 10;
    const ARTICLES_SUBTYPE = 7;
    const ARTICLES_MIN_SHOW = 9;



    useEffect(() => {
        async function fetchData() {
            await loadArticles(setArticles)
            .then(result => {
                setArticles(result.articles);
            })
            .catch(err => console.log(err));
        }
        fetchData();
    }, []);

    function getUniqueAndSortedTags(articles, numberOfElements){
        let tags = [];
        articles.map(article => (tags = tags.concat(article.taxonomy.tags)));
        return getUnique(tags, "slug")
          .sort(compare)
          .slice(0, numberOfElements);
    }

    //TODO:Move to utils file
    function compare(a,b){
        let textA = a.text.toLowerCase();
        let textB = b.text.toLowerCase();
        if (textB < textA) return -1;
        if (textB > textA) return 1;
        return 0;
    }

    //TODO:Move to utils file
    function getUnique(arr, comp) {
      const unique = arr
        .map(e => e[comp])
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter(e => arr[e])
        .map(e => arr[e]);

      return unique;
    }

    function toggleShowAll(){
        setShowAll(!showAll)
    }

    if (articles.length < 0 ) {
        return <Loading />;
    }

    let textButtonShowAll = showAll ? "MENOS" : "MAS";

    return (
      <BasicLayout>
        <div class="row">
          <div class="com-titleWithfollow hlp-marginBottom-15">
            <h1 class="com-title-section-xl hlp-marginBottom-40">
              Acumulado Grilla
            </h1>
          </div>
        </div>
        <div className="row">
          <div
            id=""
            className="cont_tags com-secondary-tag hlp-marginBottom-20"
          >
            {getUniqueAndSortedTags(articles, TAGS_AMOUNT).map(tag => (
              <Tag slug={tag.slug} text={tag.text} />
            ))}
          </div>
        </div>

        <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
          {articles
            .filter(article => article.subtype == ARTICLES_SUBTYPE)
            .slice(0, showAll ? articles.length : ARTICLES_MIN_SHOW)
            .map(article => (
              <ArticleBox {...article} />
            ))}
        </section>
        <section className="row">
          <div className="col-12 hlp-text-center hlp-margintop-40">
            <button
              onClick={() => toggleShowAll()}
              className="--btn --secondary"
            >
              {textButtonShowAll}
            </button>
          </div>
        </section>
      </BasicLayout>
    );
}
