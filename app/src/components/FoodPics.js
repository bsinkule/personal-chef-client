import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import star from '../static/images/rate.png';
import FoodPicsLi from './FoodPicsLi';

import styled from 'styled-components';

const MainWrapper = styled.div`
  background-image: url("https://agc.creativelive.com/agc/courses/5138-1.jpg");
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  padding-top: 75px;
  padding-bottom: 75px;

  display: grid;
  grid-gap: 20px 0;
  grid-template-columns: 20px 1fr 20px;
  align-content: start;
  justify-items: center;

  > * {
    grid-column: 2 / -2;
  }

  h1 {
    margin: 0px auto;
  }

  .formWrapper {
    width: 90vw;
    max-width: 1300px;
    background-color: rgba(224,224,224, .9);
    border: 1px solid black;
    border-radius: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .popular {
    position: relative;
    top: 10px;
    left: 10px;
    color: #ff9b00;
  }

  .star {
    margin-right: 5px;
  }

`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 20px repeat(${props => props.numOfLi || 3}, 250px) 20px;
  // grid-template-columns: 10px repeat(${props => props.numOfLi || 3}, calc(50% - 40px)) 10px;
  grid-template-rows: minmax(300px, 1fr);

  overflow-x: auto;
  scroll-snap-type: x proximity;
  padding-bottom: 15px;
  margin-bottom: -5px;
  }

  &:before,
  &:after {
    content: '';
  }

  &.full {
    grid-column: 1 / -1;
  }

  .imgLi {
    scroll-snap-align: center;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 8px;
  }
`;

const FoodPics = (props) => {

  const imageAPI = 'https://go-personal-chef.herokuapp.com/images/'
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchData = async () => {
    setIsLoading(true);
    const result = await axios(imageAPI);
    setData(result.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const numberOfLis = (typeString) => {
    const filteredType = data.filter(items => items.item_type === typeString);
    const portrait = filteredType.filter(port => port.orientation === "portrait");
    const landscape = filteredType.filter(land => land.orientation === "landscape");
    const doubleLandscape = landscape.length * 2
    return doubleLandscape + portrait.length
  }

  const filteredImgs = (typeString) => {
    const filterByItemType = data.filter(ent => ent.item_type === typeString)
    const imgs = filterByItemType.map(item => {
      return <FoodPicsLi id={item.id}
                          img_url={item.img_url}
                          title={item.title}
                          key={item.id}
                          item_type={item.item_type}
                          recommended={item.recommended}
                          orientation={item.orientation}
                          />
    })
    return imgs
  }

  console.log("data: ", data)
  return (
    isLoading ? <div>Loading...</div> :
    
    <MainWrapper>
      <div className="formWrapper">
        <div className="popular"><img className="star" src={star} alt="star"/>popular</div>
        <h1>Entrées</h1>
        <Ul numOfLi={numberOfLis("entree")} className="full">
          {filteredImgs("entree")}
        </Ul>
        <h1>sup</h1>
        <Ul numOfLi={5} className="full">
          <li className="imgLi">brah</li>
          <li className="imgLi">brah</li>
          <li className="imgLi">brah</li>
          <li className="imgLi">brah</li>
          <li className="imgLi">brah</li>
        </Ul>
        <h1>sup</h1>
        <Ul numOfLi={3} className="full">
          <li className="imgLi">brah</li>
          <li className="imgLi">brah</li>
          <li className="imgLi">brah</li>
        </Ul>
      </div>
    </MainWrapper>
  )
}

const mapStateToProps = (state) => ({
  checkAuth: state.checkAuth.authenticated,
});

export default connect(mapStateToProps, null)(FoodPics);