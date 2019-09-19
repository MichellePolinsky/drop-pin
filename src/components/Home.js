import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {
  render() {
    return (
      <>
        <section class="left-content">
          <section class="map_container">
            <div class="location_buttons">
              <button class="enter_destination">Enter Destination</button>
              <button class="explore_nearby">Explore Nearby</button>
            </div>
          </section>
        </section>
        <section>
          <div>
            <h1>MAP GOES HERE!!!</h1>
            {/* API Call */}
          </div>
        </section>
        <section class="right-content">
          <section class="img_container">
            <div>Instagram logo?</div>
            <div>
              <h1>IMAGES GO HERE!!!</h1>
              {/* API Call */}
            </div>
          </section>
        </section>
      </>
    )
  }
}

export default Home
