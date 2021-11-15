import React from 'react'
import './home.scss'
import HomeSlider from '../../components/slider/HomeSlider'
import Categories from '../../components/categories/Categories'
import Newsletter from '../../components/newsletter/Newsletter'
import NewArrivals from '../../components/newArrivals/NewArrivals'

const Home = () => {
    return (
        <div className="home">
                <HomeSlider />
                <Categories />
                <NewArrivals />
                <Newsletter />
        </div>
    )
}

export default Home
