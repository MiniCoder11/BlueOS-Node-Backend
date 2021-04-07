//i8d pathetically tryna do something without actual knowledge of what he's doing
//hopefully this might work
//did i break anything by making this

const fs = require("../modules/filesystem.js");
//file system
const fetch = require("node-fetch");
//fetch - queries api stuff or something


//how do async functions and "await" work
function application(word)
{
  return setTimeout(function(){ return "timed out"; }, 3000);
 
  return fetch(`https://dictionaryapi.com/api/v3/references/sd2/json/${word}?key=${process.env.DICTIONARY_KEY}`)
  .then(function(result){
    //hopefully fetches definition

    if(result.length === 0)
      return "not a word";
    //returns if its not a word
    
    if(typeof result[0] === "string")
      return dictionary(result[0]);
    //returns the suggested word

    //does return stop the function like in c++

    var thing = [];
    //set up return array

    for(const x of result)
    {
      //loops through definitions hopefully
      var temp = [];
      for(const y of x.shortdef)
        temp.push(y);
      
      var temp2;
      temp2.definitions = temp;
      temp2.partofspeech = x.fl;

      thing.push(temp2);
      //lol messy coding and bad variable names
    }
    thing.word = word;
    return thing;
    //honestly what was the point of this :P
  })();
}

exports.application = application;
//hopefully exports this function?

//yay a thousand comments and empty lines to make the code look long