import React from 'react'
import Categories from './Categories'
import Deal from './Deal'
import CorouselBox from './CorouselBox'
import Trending from './Trending'
import Hero from './Hero'
import DishList from './DishList'

const MainCategories = () => {
  return (
    <div>
        {/* <Hero/> */}
       
        <Categories/>
        <CorouselBox/>
        <Deal/>     
        <Trending/>
        <DishList/>
    </div>
  )
}

export default MainCategories