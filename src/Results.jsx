import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

/**
 * Calculate fuel consumption based on distance, speed 
 * and the base consumption of a car. 
 * 
 * @param {number} distance distance in kilometers
 * @param {number} speed speed in km/h
 * @param {number} consumption the chosen car's initial consumption per 100km at 1km/h
 * @returns {number} total fuel consumed in liters
 */

const calculateConsumption = (distance, speed, consumption) => {
  const INCREMENT = 1.009 * consumption - consumption;
  let totalConsumption = 0;
  let consumptionPer1 = 0;
  let consumptionPer100 = consumption;
  for (let i = speed; i > 1; i--) {
    consumptionPer100 = consumptionPer100 + INCREMENT;
  }
  consumptionPer1 = consumptionPer100 / 100;
  totalConsumption = distance * consumptionPer1;
  return totalConsumption.toFixed(2);
}

/**
 * Calculate travel time based on distance and speed.
 * 
 * @param {number} distance distance in kilometers
 * @param {number} speed speed in km/h
 * @returns {number} travel time in minutes
 */
const calculateTravelTime = (distance, speed) => {
  let travelTime = distance / speed;
  let travelMinutes = travelTime * 60;
  console.log(`Distance: ${distance} Speed: ${speed} travelTime: ${travelTime} travelMinutes: ${travelMinutes}`)
  return Math.floor(travelMinutes);
}

const determineFasterSpeed = (firstSpeed, secondSpeed) => {
  if (firstSpeed === secondSpeed) {
    return null;
  } else if (firstSpeed > secondSpeed) {
    return firstSpeed;
  } else {
    return secondSpeed;
  }
}

const determineTimeDifference = (firstTime, secondTime) => {
  let timeDifference = 0;
  let percentageDifference = 0;
  if (firstTime > secondTime) {
    timeDifference = firstTime - secondTime;
    percentageDifference = (firstTime * 100 / secondTime) - 100;
    return [timeDifference, percentageDifference];
  } else {
    timeDifference = secondTime - firstTime;
    percentageDifference = (secondTime * 100 / firstTime) - 100;
    return [timeDifference, percentageDifference];
  }
}

const determineConsumptionDifference = (firstConsumption, secondConsumption) => {
  let consumptionDifference = 0;
  let percentageDifference = 0;
  if (firstConsumption > secondConsumption) {
    consumptionDifference = (firstConsumption - secondConsumption).toFixed(2);
    percentageDifference = (secondConsumption * 100 / firstConsumption) - 100;
    return [consumptionDifference, percentageDifference];
  } else {
    consumptionDifference = (secondConsumption - firstConsumption).toFixed(2);
    percentageDifference = (firstConsumption * 100 / secondConsumption) - 100;
    return [consumptionDifference, percentageDifference];
  }
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
      <p>
        The distance of {props.distance} kilometers at the speed of {props.speed2}km/h will take {calculateTravelTime(props.distance, props.speed2)} minutes. A total of {calculateConsumption(props.distance, props.speed2, props.consumption)} liters of fuel will be consumed.
      </p>
      {determineFasterSpeed(props.speed1, props.speed2) ? 
        <p>
          When travelling at the speed of {determineFasterSpeed(props.speed1, props.speed2)} the trip is {determineTimeDifference(calculateTravelTime(props.distance, props.speed1), calculateTravelTime(props.distance, props.speed2))[0]} minutes faster. <span className="text-success">({determineTimeDifference(calculateTravelTime(props.distance, props.speed1), calculateTravelTime(props.distance, props.speed2))[1].toFixed(2)} % )</span><br/>
          Fuel consumption is {determineConsumptionDifference(calculateConsumption(props.distance, props.speed1, props.consumption), calculateConsumption(props.distance, props.speed2, props.consumption))[0]} liters greater. <span className="text-danger">({determineTimeDifference(calculateTravelTime(props.distance, props.speed1), calculateTravelTime(props.distance, props.speed2))[1].toFixed(2)} % )</span>
        </p>
      : 
        <p>
          Selected speeds are the same. No comparison is necessary.
        </p>
      }
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
