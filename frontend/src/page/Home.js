import React, { useEffect, useRef, useState } from 'react'
import HomeCard from '../component/HomeCard'
import { useSelector } from 'react-redux'
import CardFeature from '../component/CardFeature'
import { FcPrevious, FcNext } from 'react-icons/fc'
import { BsFilter } from 'react-icons/bs'
import FilterProduct from '../component/FilterProduct'
import AllProduct from '../component/AllProduct'


const Home = () => {
  const productData = useSelector((state)=>state.product.productList)

  // console.log(productData)
  const homeProductCartList = productData.slice(1, 7)
  // console.log(homeProductCartList)

  const homeProductCartListLaptop = productData.filter(el=>el.category==="laptop", [])
  // console.log(homeProductCartListLaptop)

  const loadingArray = new Array(4).fill(null)
  const loadingArrayFeature = new Array(10).fill(null)

  const slideProductRef =  useRef()
  const nextProduct = () => {
    slideProductRef.current.scrollLeft+=200
  }
  const prevProduct = () => {
    slideProductRef.current.scrollLeft-=200
  }


 

  
  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>
        <div className='md:w-1/2 '>
          <div className='flex gap-3 bg-blue-400 w-40 px-2 items-center rounded-full'>
            <p className='text-m font-bold text-blue-900'>SuperFast Delivery</p>
            <img src="https://cdn-icons-png.flaticon.com/512/171/171253.png" alt="" className='h-12' />
          </div>
          <h2 className='text-4xl md:text-7xl font-bold py-4'>The Fastest Delivery at <span className='text-blue-900'>Your Home</span></h2>
          <p className='py-3 text-base '>Welcome to Techzone, your ultimate destination for all things tech! We are a dynamic and innovative tech ecommerce startup dedicated to providing you with the latest and greatest gadgets, electronics, and tech accessories.
          <br />Our goal is to make your shopping experience seamless and enjoyable. With our user-friendly website and intuitive interface, you can effortlessly browse through our extensive catalog, featuring an extensive array of smartphones, laptops, smart home devices, gaming consoles, wearables, and much more. We are constantly updating our inventory to stay ahead of the ever-evolving tech landscape, so you can stay up to date with the latest trends and advancements.</p>

          <button className='text-bold bg-blue-500 text-slate-200 px-3 py-2 rounded-md'>Order Now</button>
          
        </div>
        <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-center'>
          {
            homeProductCartList[0] ? homeProductCartList.map(el=>{
              return(
                <HomeCard
                  key = {el._id}
                  id = {el._id}
                  image = {el.image}
                  name = {el.name}
                  category = {el.category}
                  price = {el.price}
                />
              )

            })
            :
            loadingArray.map((el, index)=>{
              return(
                <HomeCard
                  key = {index}
                  loading={"Loading..."}
                />
              )
            })
          }
            
          </div>

          
      </div>

      <div className=''>
          <div className='flex w-full items-center'>
          <h2 className='font-bold text-2xl text-slate-700 mb-4'>New Launches</h2>
          <div className='ml-auto'>
            <button onClick={prevProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-2 rounded'><FcPrevious/></button>
            <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-2 rounded'><FcNext/></button>

          </div>

          </div>
          <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideProductRef}>
          {
            homeProductCartListLaptop ? homeProductCartListLaptop.map(el=>{
              return(
                <CardFeature 
                  key = {el._id}
                  id = {el._id}
                  name = {el.name}
                  category={el.category}
                  price = {el.price}
                  image = {el.image}
                />
              )
            })
            :
            loadingArrayFeature.map((el, index)=>(<CardFeature loading = "Loading..." key = {index}/>))
          }
            
          </div>

      </div>

          <AllProduct heading={"Your Product"}/>
      
      
    </div>
  )
}

export default Home
