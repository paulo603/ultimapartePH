import React, { useState, useEffect } from 'react';

import axios from 'axios';

// import CS from '../../assets/CS.jpg';

/*import logo from "../../assets/logo.png";*/

import './index.css'

export default function Card(props) {

  const [ courses, setCourses ] = useState([]);

  useEffect(() => {
    fetch('https://flashcard-api-mayck.herokuapp.com/api/colecoes')
      .then(response => response.json())
      .then(data => setCourses(data))
  }, [])

  return (
      <div class='card-container' >
          <div class='card-content' >
              <h3>{ props.title }</h3>
              {/* <img src={CS} width="100px"/> */}
              <div className='imgImitation' ></div>
              <footer>
                  <p>{ props.description }</p>
              </footer>
          </div>
      </div>
  );
}