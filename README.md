# take-home-exersice

## The system is divided into two parts
### Client and Server
### Client part has been created using React.js. It is a basic form which takes in the requried inputs and returns the balance sheet or the decision based on whether the balance sheet has been fetched or not.
### The Server has been developed using MVC model and it has 2 routes in it, 
#### 1. getBalanceSheet
#### 2. getDecision
#### Both routes have their respective controllers where we make the actual requests for these routes
#### In addition to this, getDecision has a helper controller which does all the pre-processing of data before request is sent to the DecisionEngine.
#### Using the getBalanceSheet route, we fetch the balance sheet from the external AccountingSoftware endpoint.
#### We pre-process the balanceSheet to get a preAssessmentValue and send a request to the external DecisionEngine endpoint.
#### The response of the DecisioEngine endpoint is considered as the final response for the application


### Tech Stack Used
### Front-end : React , Styled-components (for CSS), axios (for making API requests)
### Back-end : Node, Express, node-fetch (for making calls to the external AccountingSoftware and DecisionEngine endpoints)

### I also learnt the basics of Docker and tried to implement them in this project. The dockerfile for client and server have been kept different for loose coupling of the system.
