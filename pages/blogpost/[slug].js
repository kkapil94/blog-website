import Loader from '@/components/Loader'
import React, {  useState } from 'react'


export default function slug(props) {
    const [blog,setBlog] = useState(props.blog)
  return (
    <>
        {blog?<div className='px-60 text-[#f8f6f5] mt-10 text-center'>
            <div className='mb-14'>
                <img src={blog.img} className='w-[55rem] h-auto' />
            </div>
            <div>
                <h3 className='text-4xl font-extrabold mb-10 '>{blog.title}</h3>
                <p className='text-justify'>{blog.description}</p>
            </div>
        </div>:<Loader/>}
    </>
  )
}

export async function getServerSideProps(context){
    let data = await fetch(`http://localhost:3000/api/getBlog?slug=${context.query.slug}`)
    let blog = await data.json()
    console.log(blog);
    return {
        props:{blog}
    }
}