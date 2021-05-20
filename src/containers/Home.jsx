/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../Hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const Home = () => {

  const initialState = useInitialState(API);

  return (
    <div className='App'>

      <Header />
      <Search />

      {initialState.mylist.length > 0 && (
        <Categories title='My Favourites'>
          <Carousel>
            {
              initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)
            }
          </Carousel>
        </Categories>
      )}

      <Categories title='Trending Topics'>
        <Carousel>
          {
            initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>

      <Categories title='Platzi Originals'>
        <Carousel>
          {
            initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>

      <Footer />

    </div>
  );
};

export default Home;

