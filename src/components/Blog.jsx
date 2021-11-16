import React from "react";
import { blog } from "../data/blog";
import "./blog.scss";
import Blogbox from "./blogbox";


function Blog() {
  return (
    <section class="as_blog_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h1 class="as_heading as_heading_center">Our Latest Blog</h1>
            <p class="as_font14">
              Consectetur adipiscing elit, sed do eiusmod tempor
              incididuesdeentiut labore <br />
              etesde dolore magna aliquapspendisse and the gravida.
            </p>
            <div class="text-left">
              <div class="row">
                <div class="blog-area">
                  {blog.map((blog) => (
                    <Blogbox
                      key={blog.id}
                      title={blog.title}
                      description={blog.description}
                      image={blog.image}
                      imguser={blog.imguser}
                      imgcomment={blog.imgcomment}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
