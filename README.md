# NodeJs Microservices

Demonstration of containerizing 2 microservices in a single container
Docker uses run.sh to start both the servers as CMD can only invoke one server at a time.

# index1.js API
Simple API with three endpoints running at 127.0.0.1:5000:
1. / -Returns the detail of the user
2. /users -Return the list of all users with the purchased cars
3. /users/id -Returns the information/details of a particular user by an id

# index2.js API
Simple API with three endpoints running at 127.0.0.1:5001:
1. / -Returns the detail of the user
2. /cars -Return the list of all cars with detailed information
3. /cars/id -Returns the information/details of a particular car by an id
