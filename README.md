# Fuel consumption counter

This is my entry to Solidabis code challenge. The challenge is available here: [https://koodihaaste.solidabis.com/#/](https://koodihaaste.solidabis.com/#/)

This project was created using create-react-app.

## Prerequisities

Docker

## Running the project

The project runs in a docker container. To build the container use the command: 

```
docker-compose -f docker-compose.yml build
```

To start the container use the command:

```
docker-compose -f docker-compose.yml up
```

**Sometimes the project may not initiate correctly on the first go. Use Ctrl+C to bring the container down and run the up command again.**

When the container is running you can access the app at:

```
localhost:3000
```

To stop the container use **Ctrl+C**

To remove the container use: 

```
docker-compose -f docker-compose.yml down
```

# About this solution

The code challenge instructions stated that the fuel consumption increases with 
a slope of 1.009. Then again the instructions also stated that every time the 
speed increases by 1km/h the consumption is multiplied by 1.009. This is 
ambiguous in my opinion, since the slope of 1.009 indicates it is a 
linear growth, but the description of multiplying the consumption 
hints to an exponential growth. I found some material online about fuel consumption 
and a linear approach was used. Also the word slope, "kulmakerroin" in finnish
strongly hints at the linear option. 

The algorithm therefor uses the linear approach. The algorithm could be changed
to use the exponential approach as well. 

My solution expects the consumption to grow incrementally for a set amount 
based on the base consumption at 1km/h. For example, the car A with consumption 
of 3l/100km at 1km/h will have the consumption incremented by 0.009 * 3 = 0.027 
every time the speed increases by 1km/h.

### TODO
Make the program more modular. It currently only has 2 .jsx files but more 
components could be separated to their own files for better code readability.  

Make proper use of labels instead of h2 headers for form elements. This would allow 
screen readers and such to work properly.  

Report travel time in hours, minutes and seconds. It currently only lists minutes.  

Write unit tests. Due to time constraints and wanting to get this done quickly 
I did not yet write the unit tests. I manually tested and compared the results 
with known good results.  

Visual and usability improvements to the UI.