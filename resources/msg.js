const wordButton = document.getElementById("wordButton");
const displayWord = document.getElementById("displayWord");
const displayMessage = document.getElementById("message");

const randNum = () => {
   return Math.floor ((Math.random()*9)+1);
};
const changer = num => {
    
    switch (num){
        case 1:
            
            return "“We cannot solve problems with the kind of thinking we employed when we came up with them.” —Albert Einstein";
            break;

        case 2:
            return "“Learn as if you will live forever, live like you will die tomorrow.” —Mahatma Gandhi";
            break;
        
        case 3:
            return "“It is better to fail in originality than to succeed in imitation.” —Herman Melville";
            break;
        
        case 4:
            return "“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.” —Winston Churchill";
            break;
        
        case 5:
            return "“Experience is a hard teacher because she gives the test first, the lesson afterward.” ―Vernon Sanders Law";
            break;
        
        case 6:
            return "“Opportunity is missed by most people because it is dressed in overalls and looks like work.” —Thomas Edison";
            break;
        
        case 7:
            return "“He who conquers himself is the mightiest warrior.” —Confucius";
            break;

        case 8:
            return "“The most difficult thing is the decision to act; the rest is merely tenacity.” —Amelia Earhart";
            break;

        case 9:
            return "“People often say that motivation doesn’t last. Well, neither does bathing—that’s why we recommend it daily.” —Zig Ziglar";
            break;
        
        default:
            return "something went wrong";
            break;

    }
}


wordButton.addEventListener("click", ()=>{


    displayMessage.innerText = changer(randNum());
    
   

});