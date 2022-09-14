import React from "react";

const Articolo = ({title,body}) => {
  return (
    <article className="col-5 m-2">
      <div>
        <h6>{title}</h6>
        <div className="underline"></div>
      </div>
      <p>{body}</p>
    </article>
  );
};

export default Articolo;
