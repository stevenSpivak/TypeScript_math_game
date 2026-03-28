import * as readline from "readline";

const rl: readline.Interface = readline.createInterface({
input: process.stdin,
output: process.stdout
});


function askQuestion(question: string): Promise<string> {
    return new Promise((resolve: (value: string) => void) => {
    rl.question(question, resolve);
    });
}

async function startGame1players(difficulty: number): Promise<void> {

let correctAnswers: number = 0;
while (correctAnswers < 10*difficulty) {

    let num1: number = Math.floor(Math.random() * 20) + 1;
    let num2: number = Math.floor(Math.random() * 20) + 1;
    let symbolNum: number;

    let correct: number = num1 + num2;
    switch(difficulty){
        case 1:
            symbolNum = Math.floor(Math.random() * 2) + 1;
            switch(symbolNum){
                case 1:
                    correct = num1 + num2;
                    console.log(`What is ${num1} + ${num2} ?`);
                    break;
                case 2:
                    correct = num1 - num2;
                    console.log(`What is ${num1} - ${num2} ?`);
                    break;
            }
            break;
        case 2:
            symbolNum = Math.floor(Math.random() * 3) + 1;
            switch(symbolNum){
            case 1:
                correct = num1 + num2;
                console.log(`What is ${num1} + ${num2} ?`);
                break;
            case 2:
                correct = num1 * num2;
                console.log(`What is ${num1} * ${num2} ?`);
                break;
            case 3:
                correct = num1 - num2;
                console.log(`What is ${num1} - ${num2} ?`);
                break;
            }
            break;
        case 3:
            symbolNum = Math.floor(Math.random() * 4) + 1;
            switch(symbolNum){
                case 1:
                    correct = num1 + num2;
                    console.log(`What is ${num1} + ${num2} ?`);
                    break;
                case 2:
                    correct = num1 * num2;
                    console.log(`What is ${num1} * ${num2} ?`);
                    break;
                case 3:
                    correct = num1 - num2;
                    console.log(`What is ${num1} - ${num2} ?`);
                    break;
                case 4:
                    correct = Math.floor((num1 / num2) * 100) / 100;
                    console.log(`What is ${num1} / ${num2} ?`);
                    break;
            }
            break;
        }
    let start: number = Date.now();

    let answer: string = await Promise.race([
        askQuestion("Your answer: "),
        new Promise<string>((resolve) =>
        setTimeout((): void => resolve("TIMEOUT"), 30000))
    ]);

    let end: number = Date.now();

    let timeTaken: number = (end - start) / 1000;

    if (answer === "TIMEOUT") {

        console.log("Time is up! correct is: " + correct);
        console.log(`You answered ${correctAnswers} questions correctly`);
        process.exit();

    }

    if (Number(answer) !== correct) {

        console.log("Wrong answer! correct is: " + correct);
        console.log(`You answered ${correctAnswers} questions correctly`);
        process.exit();

    }

    console.log(`Correct! Time taken: ${timeTaken} seconds`);

        correctAnswers++; 

    }

    console.log("Congratulations! You answered all 10 questions correctly!");

    rl.close();

}
async function startGame2players(difficulty: number): Promise<void> {

    let correctAnswers: number = 0;
    let player1Name:string = await Promise.race([
        askQuestion("player 1 what is thy name? ")
    ]);
    let player2Name:string = await Promise.race([
        askQuestion("player 2 what is thy name? ")
    ]);
    let players = [player1Name, player2Name];
    while (correctAnswers < 10*difficulty) {
        console.log(players[correctAnswers % 2]);

        let num1: number = Math.floor(Math.random() * 20) + 1;
        let num2: number = Math.floor(Math.random() * 20) + 1;
        let symbolNum: number;

        let correct: number = num1 + num2;
        switch(difficulty){
        case 1:
            symbolNum = Math.floor(Math.random() * 2) + 1;
            switch(symbolNum){
                case 1:
                    correct = num1 + num2;
                    console.log(`What is ${num1} + ${num2} ?`);
                    break;
                case 2:
                    correct = num1 - num2;
                    console.log(`What is ${num1} - ${num2} ?`);
                    break;
            }
            break;
        case 2:
            symbolNum = Math.floor(Math.random() * 3) + 1;
            switch(symbolNum){
            case 1:
                correct = num1 + num2;
                console.log(`What is ${num1} + ${num2} ?`);
                break;
            case 2:
                correct = num1 * num2;
                console.log(`What is ${num1} * ${num2} ?`);
                break;
            case 3:
                correct = num1 - num2;
                console.log(`What is ${num1} - ${num2} ?`);
                break;
            }
            break;
        case 3:
            symbolNum = Math.floor(Math.random() * 4) + 1;
            switch(symbolNum){
                case 1:
                    correct = num1 + num2;
                    console.log(`What is ${num1} + ${num2} ?`);
                    break;
                case 2:
                    correct = num1 * num2;
                    console.log(`What is ${num1} * ${num2} ?`);
                    break;
                case 3:
                    correct = num1 - num2;
                    console.log(`What is ${num1} - ${num2} ?`);
                    break;
                case 4:
                    correct = Math.floor((num1 / num2) * 100) / 100;
                    console.log(`What is ${num1} / ${num2} ?`);
                    break;
            }
            break;
        }

        let start: number = Date.now();

        let answer: string = await Promise.race([
        askQuestion("Your answer: "),
        new Promise<string>((resolve) =>
        setTimeout(() => resolve("TIMEOUT"), 30000)
        )
        ]);

        let end: number = Date.now();

        let timeTaken: number = (end - start) / 1000;

        if (answer === "TIMEOUT") {
            console.log("Time is up! correct is: " + correct);
            if(correctAnswers % 2 == 1){
            console.log(player1Name + " won");
            }
            else{
                console.log(player2Name + " won");
            }
            process.exit();
        }

        if (Number(answer) !== correct) {
            console.log("Wrong answer! correct is: " + correct);
            if(correctAnswers % 2 == 1){
                console.log(player1Name + " won");
            }
            else{
                console.log(player2Name + " won");
            }
            process.exit();
        }

        console.log(`Correct! Time taken: ${timeTaken} seconds`);

        correctAnswers++;

    }
    console.log("tie");
    rl.close();
}
async function startGame() : Promise<void>{
    let playersAmount:string = await Promise.race([
        askQuestion("1 or 2 players? ")
    ]);
    if(playersAmount == "1"){
        let difficulty:string = await Promise.race([
            askQuestion("Sellect difficulty 1-3: ")
        ]);
        let difficultyNum = parseInt(difficulty);
        if(difficultyNum >= 1 && difficultyNum <= 3){
            startGame1players(difficultyNum);
        }
        else{
            console.log("I dont understand");
            process.exit();

        }
    }
    else if(playersAmount == "2"){
        let difficulty:string = await Promise.race([
            askQuestion("Sellect difficulty 1-3: ")
        ]);
        let difficultyNum = parseInt(difficulty);
        if(difficultyNum >= 1 && difficultyNum <= 3){
            startGame2players(difficultyNum);
        }
        else{
            console.log("I dont understand");
            process.exit();
        }
    }
    else{
        console.log("I dont understand");
        process.exit();
    }
}
startGame();