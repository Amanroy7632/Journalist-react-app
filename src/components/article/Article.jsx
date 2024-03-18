import React,{useEffect, useState} from 'react'
const allArticleData=[
{ id:1,
title:"13 Media Sites to Keep You in the Know",
imgSrc:"https://gijn.org/wp-content/uploads/2017/12/Group-Shot-1170x710.jpg",
firstLine:"This article is also available in Arabic, French, Russian and Spanish.",
description:"When automobiles were invented, a carriage driver might have thought that he just needed to learn a few new tricks to be able to make the shift from the reins to the wheel. In exactly that same way, many reporters imagine that learning some basic digital techniques and “Googling”"
},
{ id:2,
  title:"Supream Court News",
  imgSrc:"https://gijn.org/wp-content/uploads/2017/12/Group-Shot-1170x710.jpg",
  firstLine:"This article is also available in India.",
  description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae omnis pariatur cupiditate consectetur cum voluptatibus sint eligendi nesciunt voluptatem officia!"
  
  },
  { id:3,
    title:"Dog Killer Fears",
    imgSrc:"https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/03/331/186/dog-in-river.jpg?tl=1&ve=1",
    firstLine:"Experts warn parasite that could be deadly to pets is spreading across United States",
    description:"Potentially fatal dog parasite found in part of Colorado River for first time, having spread from other states"
    },
  { id:4,
    title:"13 Media Sites to Keep You in the Know",
    imgSrc:"https://a57.foxnews.com/prod-hp.foxnews.com/images/2024/03/627/353/b4419642d965109e58490eaad98659ed.jpg?tl=1&ve=1",
    firstLine:"Study blows lid off 16 years of Google's election manipulations.",
    description:"When automobiles were invented, a carriage driver might have thought that he just needed to learn a few new tricks to be able to make the shift from the reins to the wheel. In exactly that same way, many reporters imagine that learning some basic digital techniques and “Googling”"
    }
  ]
function Article() {
 
// let articleData=allArticleData;
  const [articleData,setArticleData]=useState([]);
  const [searchInput,setSearchInput]=useState('');
  useEffect(()=>{
     let newData=allArticleData.filter((data)=>(data.title.toLowerCase().includes(searchInput.toLowerCase())));
      console.log(searchInput);
      console.log(articleData);
      setArticleData(newData);

  },[searchInput])
  return (
    <div className='mx-auto max-w-maxScreen pb-20 mt-[10vh] dark:bg-black dark:text-white'>
       <div className='container-main mx-auto my-10 gap-x-5 flex flex-row justify-evenly pt-2'>
        <div className='left-part w-full lg:w-[70%] px-4'>
          <div className='mx-auto w-full justify-center flex flex-col'>
            <input type="text" onChange={(e)=>{
              setSearchInput(e.target.value);
            }} placeholder='Search Articles ..' className='w-full px-4 py-2 border focus:outline-none text-neutral-2  dark:bg-black dark:border-gray-100/40 rounded' />
            {articleData.length>0?(<ul className='items-center gap-1 flex flex-col'>
              {
                articleData.map((data)=>{
                  return (<div key={data.id} className='w-full'>
                  <div className='border-b border-b-neutral-2/30 group py-8 flex flex-col-reverse gap-y-5 sm:flex-row items-center justify-center sm:justify-between px-1 gap-x-10'>
                    <div className='w-full bg-green-300/0 flex flex-col justify-between gap-y-2 sm:w-[85%] h-[190px]'>
                      <h1>{data.title}</h1>
                      <p>{data.firstLine}</p>
                      <p>{data.description}</p>
                    </div>
                    <div className='Image-portion relative overflow-hidden bg-slate-100'>
                      <img src={data.imgSrc} alt="image-articles" className=' w-[20rem] max-sm:2-[30rem]' />
                    </div>
                  </div>
                </div>)
                })
              }
            </ul>):(<div className=' flex flex-col justify-center items-center p-10 flex-wrap dark:bg-[#2d2c2c] '>
              <img className=' lg:w-[20rem] max-md:w-[12rem] rounded-[5rem]' src="https://imgs.search.brave.com/K3qeJtm_up-upl3RLJWUvn5gAAdCoNqMoXs5Gox95xU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cHVibGljZG9tYWlu/cGljdHVyZXMubmV0/L3BpY3R1cmVzLzI4/MDAwMC92ZWxrYS9u/b3QtZm91bmQtaW1h/Z2UtMTUzODM4NjQ3/ODdsdS5qcGc" alt="" />
              <h1 className=' text-3xl text-red-500 p-10 text-center flex'>Result not found ...</h1>
            </div>)}
          </div>
        </div>
        <div className="right-part w-[300px] hidden lg:flex flex-col gap-y-6">
          <div className=' border p-4 rounded-lg border-slate-500/10 dark:bg-[#181a1b] dark:border-gray-100/40'>
            <h1 className=' flex gap-3 text-2xl font-bold'>Latest Articles</h1>
            <p className=' gap-2 text-xl'>SBI Bank got Hitup by Supream Court Of <strong>INDIA</strong> </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem delectus qui obcaecati!</p>
          </div>
        </div>
       </div>
      
    </div>
  )
}

export default Article
