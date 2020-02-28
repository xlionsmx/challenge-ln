import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { HeaderMobile } from "../../components/Header/HeaderMobile";

export const BasicLayout = props => {
  return (
    <>
      <Header />
      <HeaderMobile />
      <main>
        <div class="banner w-100 --bg-banner">
          <div class="banner --top --desktop"></div>
          <div class="banner --top --tablet"></div>
          <div class="banner --top --mobile"></div>
        </div>
        <div class="banner w-100 --bg-banner">
          <div class="banner --sticky --mobile"></div>
        </div>
        <div class="lay-sidebar">
          <div class="sidebar__main">{props.children}</div>
          <div class="sidebar__aside">
            <div class="banner --desktop --large"></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
