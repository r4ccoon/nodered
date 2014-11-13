// name: jsonify
// outputs: 1
var topics = msg.topic.split("/");
var messages = msg.payload.split("|");
 
var returnValues = {
  "robot" : topics[1],
  "type"  : topics[2],
  "value" : messages[0],
  "carId" : messages[1],
  "timestamp" : Date.now()
};
  
return returnValues;