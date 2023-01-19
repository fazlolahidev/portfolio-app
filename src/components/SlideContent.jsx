import React from "react";


const SlideContent = ({ data }) => {

  return (
    <article className="bg-white flex flex-col gap-5 rounded-lg p-5 active:cursor-grabbing cursor-pointer mr-5">
      <figure>
        <img
          src={data.image}
          alt="woman image for slider"
          className="w-12 h-12 rounded-full"
        />
      </figure>

      <div>
        <h4 className="mb-2 capitalize" >{ data.name }</h4>
        <p className="text-sm text-slate-500" >
          {data.description}
        </p>
      </div>
    </article>
  );
};

export default SlideContent;
