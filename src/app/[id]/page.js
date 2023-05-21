import React from "react";
import { DummyBlogs } from "../../Utilities/DummyContents";
import { findById } from "@/Utilities/Functions";
import Badge from "@/components/Badge";
import './single-post.scss';
const Blog = ({ params }) => {
  const findBlogById = findById(DummyBlogs, Number(params.id));

  if (!findBlogById) {
    return <div>Error</div>;
  }

  return (
    <>
    <div className="container--blog">
        <div className="single-blog">
          <div className="single-blog__badge">
            <Badge size="big" category={findBlogById?.category}>
              {findBlogById?.category}
            </Badge>
          </div>
          <h1 className="text--h1">{findBlogById?.title}</h1>
          <div className="single-blog__author">
            <figure>
              <img src={`images/profiles/${findBlogById?.pp}.png`} />
            </figure>
            <span className="text--dark-04 text--base">
              {findBlogById?.author}
            </span>
            <span className="text--dark-04 text--base">August 20, 2022</span>
          </div>
          <div className="single-blog__content">

            <figure className="single-blog__content__image">
                <img src={`images/${findBlogById?.category}.jpg`}/>
            </figure>
          
          <p className="text--lg--400 text--dark-04">{findBlogById?.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
