import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

/**
 * Calculate fuel consumption based on distance, speed 
 * and the base consumption of a car. 
 * 
 * @param {number} distance distance in kilometers
 * @param {number} speed speed in km/h
 * @returns {number} total fuel consumed in liters
 */

 const calculateConsumption = (distance, speed, consumption) => {
  const MULTIPLIER = 1.009;
  let a = consumption - (MULTIPLIER * speed);
  let calculatedConsumption = (MULTIPLIER * speed) + a;
  let totalConsumption = distance * calculatedConsumption;
  return totalConsumption;
}

/**
 * Calculate travel time based on distance and speed.
 * 
 * @param {number} distance distance in kilometers
 * @param {number} speed speed in km/h
 * @returns {number} travel time in minutes
 */
const calculateTravelTime = (distance, speed) => {
  let travelTime = 0;
  travelTime = distance / speed;
  return travelTime;
}

const Results = (props) => {

  return (
    <div>
      <h2>
        Results for {props.carName}
      </h2>
      <p>
        The distance of {props.distance} kilometers at the speed of {props.speed1}km/h will take {calculateTravelTime(props.distance, props.speed1)} minutes. A total of {calculateConsumption(props.distance, props.speed1, props.consumption)} liters of fuel will be consumed.
      </p>
    </div>
  )
}

Results.propTypes = {
  carName: PropTypes.string,
  consumption: PropTypes.number,
  distance: PropTypes.number,
  speed1: PropTypes.number,
  speed2: PropTypes.number
}

export default Results;
