#!/usr/bin/env nodejs
 
var fs = require('fs');

var faker= require('../../../node_modules/faker/index');


// generate bigDataSet as example
var bigSet = [];

for(i = 0; i <= 30; i++){
var directory  = {
    model: "www.person",
    pk:   i+10,
    fields: {
    name:  faker.name.findName(),
    title:  faker.name.jobTitle(),
    email: faker.internet.exampleEmail(),
    image: faker.image.avatar()
    }
};
  bigSet.push(directory);
};

fs.writeFile(__dirname + '/Directory.json',  JSON.stringify(bigSet), function() {
  console.log("Directory dataset generated successfully!");
});
