var fs = require('fs');

//read file
var text = fs.readFileSync("./jhb3.txt").toString('utf-8');

//split by line
var array = text.split("\n");

//remove duplicates
const uniArr = [...(new Set(array))];
var writeString = "";
// split each line

//loop through each record and write to file
uniArr.forEach(element => {
    abc = element.split(',');
    console.log("genModel");
   
    writeData(genModel(1,abc));
});


function writeData(theString) {
    fs.writeFile('jozi3.txt', theString, (err) => {
        if (err) throw err;
        console.log('record added');
    })
}



//generates object conforming to model
function genModel(id, ...model) {
    var theid = id;
    var street = model[0][0];
    var town = model[0][1];
    var province = model[0][2];

    return writeString += '{\nid: 1,\ntown:\''+town+'\',\nstreet:\''+street+'\',\n province:\''+province+'\'\n},\n';
    // console.log(writeString);
}
