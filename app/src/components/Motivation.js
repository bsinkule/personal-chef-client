import React from 'react';

import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  margin: 1em;
  display: flex;
  max-width: 1200px;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 20px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
    max-width: 400px;
  }

  .resp {
    width: 200px;
    height: 250px;
    border-radius: 25%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  }

  h3 {
    width: 80%;
    text-align: center;
    margin-bottom: 0;
  }

  .body {
    padding: 10px;
    line-height: 1.5;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Motivation = () => {
  return (
    <Ul>
      <li>
        <img src="https://images.unsplash.com/photo-1515071394-1d55f836843a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80" className="resp" alt="food" />
        <h3>Flavorful Food</h3>
        <div className="body">
          <p>
            "What a novel idea :) Seriously though, I want my food to make an impact on people's taste buds. I always look forward to working with clients and building out the next delicious menu"
          </p>
          <p>- Kyle</p>
        </div>
      </li>
      <li>
        <img src="https://images.unsplash.com/photo-1546197244-cdd3a3fc80a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" className="resp" alt="people" />
        <h3>Hosting</h3>
        <div className="body">
          <p>
            "We love being around people that are having a fun time, normally that fun is happening around food and drinks. It's always a great pleasure for us to be able to come into people's homes and help facilitate their fun evening."
          </p>
          <p>- Kyle and Con</p>
        </div>
      </li>
      <li>
        <img src="https://images.unsplash.com/photo-1481671703460-040cb8a2d909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" className="resp" alt="drinks" />
        <h3>Fun Drinks</h3>
        <div className="body">
          <p>
            "A fun drink is open to every individuals own interpretation. It's such a joy for me to work with each client and see what kind of drinks will be paired with their party."
          </p>
          <p>- Con</p>
        </div>
      </li>
    </Ul>
  )
}

export default Motivation;