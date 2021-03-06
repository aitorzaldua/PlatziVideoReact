/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../Hooks/useInitialState';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {

  return (
    <>

      <Header />
      <Search />
      {myList.length > 0 && (
        <Categories title='My List'>
          <Carousel>
            {
              myList.map((item) => (
                <CarouselItem
                  key={item.id}
                  {...item}
                  isList
                />
              ))
            }
          </Carousel>
        </Categories>
      )}

      <Categories title='Trending Topics'>
        <Carousel>
          {
            trends.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>

      <Categories title='Platzi Originals'>
        <Carousel>
          {
            originals.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>

    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,

  };

};

export default connect(mapStateToProps, null)(Home);

