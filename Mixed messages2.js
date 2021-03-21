const greetings = ['Hi','Hello','Hola','Hallo','Bonjour'];
const names = ['Cynthia','Matthew','Susan','Ashley'];
const questions = ['How are you?','How was your day?','What is your plan for today?', 'Is everything ok ?'];

const mixMessages=()=>{
    const random1 = Math.floor(Math.random() * greetings.length);
    const random2= Math.floor(Math.random()* names.length);
    const random3= Math.floor(Math.random()* questions.length);
    return `${greetings[random1]} ${names[random2]} ${questions[random3]}`;
}
console.log(mixMessages());