import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom'
import BlogCard from './BlogCard'

const BlogList = () => {

        const [Menu, setMenu] = useState("All")
        const navigate = useNavigate() 


  return (
    <div>
        <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
            {blogCategories.map((item)=> (
                <div key={item} className='relative'>
                    <button onClick={()=> setMenu(item)}
                    className={`cursor-pointer text-black ${Menu === item && 'text-white px-4 pt-0.5'}`}>
                        {item}
                        {Menu === item && (
                            <motion.div layoutId='underline' 
                            transition={{type: 'spring', stiffness: 500, damping: 50}}
                            className='absolute left-0 right-0  top-0 h-7 -z-1 bg-black rounded-full'></motion.div> 
                        )}
                    </button>
                </div>
            ))}

        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 sm:mx-16 xl:mx-40'>
            {blog_data.filter((blog)=> Menu === "All" ? true : blog.category === Menu).
            map((blog)=> <BlogCard key={blog._id} blog={blog} />)}
        </div>
    </div>
  )
}

export default BlogList