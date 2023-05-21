import { DummyBlogs } from "@/Utilities/DummyContents";
import Badge from "@/components/Badge";
import Blogs from "@/components/Blogs";
import React from "react";
import './blogs-page.scss';

const page = () => {
  return (
    <>
      <div className="blogs-page">

        <div className="blogs-page__header">
        <figure className="blogs-page__header__image">
          <img src="images/blogs.jpg" />
        </figure>
            <div className="blogs-page__header__card">
            <Badge size="small" category="travel">
            travel
          </Badge>
          <h1 className="text--h1 text--white">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <div className="blogs-page__header__card__author">
            <figure>
              <img src="images/profiles/pp-1.png" />
            </figure>
            <span className="text--white text--base">Jason Franco</span>
            <span className="text--white text--base">August 20, 2022</span>
          </div>
            </div>
        </div>
      </div>
      <Blogs />
    </>
  );
};

export default page;
