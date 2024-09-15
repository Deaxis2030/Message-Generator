//Horoscope Message Generator

const msgComponents = {

horoscopes:["Aires", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagitarus", "Capricorn", "Aquarius", "Pisces"],
associ1:["bankrupt", "broke", "impoverished", "wealthy", "rich", "opulent"],
associ2:["nauseous", "weak", "sickly", "vigorous", "strengthened", "full of stamina"],
associ3:["heartbreak", "jitters", "malcontent","happiness", "affection", "romance"],

topics () {
    let randNum = Math.floor(Math.random(0)*3);
    switch (randNum) {
        case 0:
            return "money";
            break;

        case 1:
            return "health";
            break;

        case 2:
            return "love";
            break;

        default:
            return "invalid topic";
            break;
    }
},

association () {
    let msgTopic = this.topics();
    let msgAssoc;
    if (msgTopic === "money") {

        msgAssoc = this.associ1[Math.floor(Math.random()*msgComponents.associ1.length)]
         return `The topic today is ${msgTopic}. Today, your accounts will be ${msgAssoc}!`
    } 
    else if (msgTopic === "health") {
      
        msgAssoc = this.associ2[Math.floor(Math.random()*msgComponents.associ2.length)]
        return `The topic today is ${msgTopic}. Today, you will feel ${msgAssoc}!`
    } 
    else if (msgTopic === "love") {

        msgAssoc = this.associ3[Math.floor(Math.random()*msgComponents.associ3.length)]
        return `The topic today is ${msgTopic}. Today, you will feel ${msgAssoc}!`
    }
   
},



}


const message = () => {
  let randHoros = msgComponents.horoscopes[Math.floor(Math.random()*msgComponents.horoscopes.length)];
  
  let randMsg = `You horoscope is ${randHoros}. ${msgComponents.association()}`;

  
  return randMsg;
};

console.log (message());