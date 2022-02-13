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


## TODO
Make proper use of labels instead of h2 headers for form elements  
Report travel time in hours, minutes and seconds  
Write unit tests