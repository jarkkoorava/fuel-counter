import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-bootstrap-range-slider';
import Button from 'react-bootstrap/Button';
import Results from './Results';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

const App = () => {

  const [checkedCar, setCheckedCar] = useState('Car A');
  const [carConsumption, setCarConsumption] = useState(3);
  const [speed1, setSpeed1] = useState(100);
  const [speed2, setSpeed2] = useState(100);
  const [distance, setDistance] = useState(100);
  const [distanceValidated, setDistanceValidated] = useState(true);
  const [showForm, setShowForm] = useState(true);
  const [showResults, setShowResults] = useState(false);
  
  const cars = [
    { name: 'Car A', consumption: 3},
    { name: 'Car B', consumption: 3.5},
    { name: 'Car C', consumption: 4}
  ]

  /**
   * A function that controls the radio buttons. 
   */
  const handleButtonChange = (e) => {
    e.persist();
    setCheckedCar(e.target.value)
    cars.map(car => {
      if (car.name === e.target.value) {
        setCarConsumption(car.consumption);
      }
    })
  }


  /**
   *  A function that controls the distance input field and also
   *  validates the input. 
   */
  const handleDistanceChange = (e) => {
    setDistance(e);
    if (!isNaN(e) && e > 0) {
      setDistanceValidated(true);
    } else {
      setDistanceValidated(false);
    }
  }


  /**
   * A function that changes which part of the UI to show. Both
   * buttons "Calculate" and "Back" can use the same handler 
   * function.
   */
  const handleClick = () =>{
    setShowResults(!showResults);
    setShowForm(!showForm);
  }


  return (
    <div className="App">
      <Container className="content">
        <h1>
          Fuel consumption counter
        </h1>
        <p>
          This application compares the fuel consumption and travel time of a vehicle when driving at two different speeds. Please choose one of the vehicles and state the distance to travel and the speeds to compare.
        </p>
        <p>
          The fuel consumption of the vehicles increases linearly with a slope of 1.009. The base consumption of the vehicles at 1km/h is as follows:<br/>
          <ul>
            <li>Car A, 3l / 100km</li>
            <li>Car B, 3.5l / 100km</li>
            <li>Car C, 4l / 100km</li>
          </ul>
        </p>

        {showForm &&
          <Form>
            <h4 className="mt-4">
              Choose a car
            </h4>
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

            <h4 className="mt-4">
              Set the distance in kilometers
            </h4>
            <Form.Control className={!distanceValidated && "is-invalid"}
              type="text"
              value={distance}
              onChange={e => handleDistanceChange(e.target.value)}
            />
            
            <h4 className="mt-4">
              Set the first speed in km/h
            </h4>
            <Row>
              <Col xs="10" lg="10">
                <RangeSlider 
                  value={speed1}
                  min={1}
                  max={300}
                  onChange={e => setSpeed1(e.target.value)}
                />
              </Col>
              <Col>
              <h3>
                {speed1}
              </h3>
              </Col>
            </Row>

            <h4 className="mt-4">
              Set the second speed in km/h
            </h4>
            <Row>
              <Col xs="10" lg="10">
                <RangeSlider 
                  value={speed2}
                  min={1}
                  max={300}
                  onChange={e => setSpeed2(e.target.value)}
                />
              </Col>
              <Col>
              <h3>
                {speed2}
              </h3>
              </Col>
            </Row>
            <Button className="custom-btn"
              variant="primary"
              onClick={handleClick}
              disabled={distanceValidated ? false : true}
              
            >
              Calculate
            </Button>

          </Form>
        }

        {showResults &&
          <> 
            <Results 
              carName={checkedCar}
              consumption={carConsumption}
              distance={parseInt(distance)}
              speed1={parseInt(speed1)}
              speed2={parseInt(speed2)}
            />
            <Button className="custom-btn"
              variant="primary"
              onClick={handleClick}
            >
              Back
            </Button>
          </>
        }

      </Container>
    </div>
  );
}

export default App;
