import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-bootstrap-range-slider';
import Button from 'react-bootstrap/Button';
import Results from './Results';
import './App.css';

const App = () => {

  const [checkedCar, setCheckedCar] = useState('Car 1');
  const [speed1, setSpeed1] = useState(100);
  const [speed2, setSpeed2] = useState(100);
  const [distance, setDistance] = useState(100);
  const [showResults, setShowResults] = useState(false);

  const handleButtonChange = (e) => {
    e.persist();
    setCheckedCar(e.target.value);
  }

  const handleClick = () =>{
    setShowResults(true);
  }


  const cars = [
    { name: 'Car 1', consumption: 3},
    { name: 'Car 2', consumption: 3.5},
    { name: 'Car 3', consumption: 4}
  ]


  return (
    <div className="App">
      <Container>
        <h1>
          Fuel consumption counter
        </h1>
        <p>
          This application compares the fuel consumption and travel time of a vehicle when driving at two different speeds. Please choose one of the vehicles and state the speeds.
        </p>
        <p>
          Chosen car: {checkedCar}<br/>
          Chosen speed 1: {speed1}<br/>
          Chosen speed 2: {speed2}<br/>
          Chosen distance {distance}
        </p>
        <Form>
          <h2>
            Choose a car
          </h2>
          <Form.Group>
            {cars.map(car =>
              <Form.Check
                value={car.name}
                key={car.name}
                type="radio"
                label={car.name}
                onChange={handleButtonChange}
                checked={checkedCar === car.name}
              />
            )}
          </Form.Group>

          <h2>
            Set the distance
          </h2>
          <Form.Control 
            type="text"
            value={distance}
            onChange={e => setDistance(e.target.value)}
          />
          
          <h2>
            Set the first speed
          </h2>
          <RangeSlider 
            value={speed1}
            min={1}
            max={300}
            onChange={e => setSpeed1(e.target.value)}
          />

          <h2>
            Set the second speed
          </h2>
          <RangeSlider 
            value={speed2}
            min={1}
            max={300}
            onChange={e => setSpeed2(e.target.value)}
          />
          <div className="d-grip gap-2">
            <Button
              variant="primary"
              onClick={handleClick}
            >
              Calculate
            </Button>

            {showResults && 
              <Results 
                carName={checkedCar}
                consumption={parseInt(checkedCar.consumption)}
                distance={parseInt(distance)}
                speed1={parseInt(speed1)}
                speed2={parseInt(speed2)}
              />
            }
          </div>

        </Form>
      </Container>
    </div>
  );
}

export default App;