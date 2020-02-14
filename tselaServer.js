var express = require('express');
var esm = require('esm');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
import {AddyData} from './dataset.mjs';
import {matchLike} from './myLib.mjs';

// GraphQL schema
var schema = buildSchema(`
    type Query {
        Addy(town: String!): Address
        streets(street: String!): [Address!]!
        town(town: String!): Address
    },
    type Course {
        id: Int
        town: String
        street: String
    },
    type Address {
        id: Int
        town: String
        street: String
    }
`);



var getAddy = function(args) { 
    var town = args.town.toLowerCase();
    return AddyData.filter(addy => {
        if(addy.town.startsWith(town) || addy.town == town)
        {
          return addy.town == town;
        }   
    })[0];
    
}
// var getCourses = function(args) {
//     if (args.topic) {
//         var topic = args.topic;
//         return AddyData.filter(course => course.topic === topic);
//     } else {
//         return AddyData;
//     }
// }

var getResStreet = function(args) {

    if (args.street) {
//        return AddyData;
        var street = args.street;
       
        return AddyData.filter(saddy => saddy.street === street);
    } else {
        return AddyData;
    }
}

var root = {
    Addy: getAddy,
    streets: getResStreet
};
// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
console.log("...Server e qala ho matha");
app.listen(4000, () => console.log('Express GraphQL Server e ntse e tsoela pele ho localhost:4000/graphql'));