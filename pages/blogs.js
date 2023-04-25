import Loader from "@/components/Loader";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function blog({ allBlogs }) {
  const [blogs, setBlogs] = useState(allBlogs);

  return (
    <>
      {blogs ? (
        <div className="text-[#f8f6f5]  px-60 flex flex-col justify-center">
          <div className="text-5xl font-black text-center my-16">
            Latest Blogs
          </div>
          {blogs.map((item, index) => (
            <Link href={`/blogpost/${item.slug}`} key={item.slug} legacyBehavior>
              <div className="my-5 cursor-pointer flex items-center">
                <img className="w-48 h-36 m-4" src={item.img} />
                <div>
                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <p className="text-justify">
                    {item.description.substring(0, 250)}...
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();
  return {
    props: { allBlogs },
  };
}
