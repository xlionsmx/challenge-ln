import React from "react";

export const Tag = props => {
  const {text , slug} = props;
  return (
    <a href={`/tag/${slug}`} className="">
      {text}
    </a>
  );
};
