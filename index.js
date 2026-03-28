"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askQuestion(question) {
    return new Promise(function (resolve) {
        rl.question(question, resolve);
    });
}
function startGame1players(difficulty) {
    return __awaiter(this, void 0, void 0, function () {
        var correctAnswers, num1, num2, symbolNum, correct, start, answer, end, timeTaken;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    correctAnswers = 0;
                    _a.label = 1;
                case 1:
                    if (!(correctAnswers < 10 * difficulty)) return [3 /*break*/, 3];
                    num1 = Math.floor(Math.random() * 20) + 1;
                    num2 = Math.floor(Math.random() * 20) + 1;
                    symbolNum = void 0;
                    correct = num1 + num2;
                    switch (difficulty) {
                        case 1:
                            symbolNum = Math.floor(Math.random() * 2) + 1;
                            switch (symbolNum) {
                                case 1:
                                    correct = num1 + num2;
                                    console.log("What is ".concat(num1, " + ").concat(num2, " ?"));
                                    break;
                                case 2:
                                    correct = num1 - num2;
                                    console.log("What is ".concat(num1, " - ").concat(num2, " ?"));
                                    break;
                            }
                            break;
                        case 2:
                            symbolNum = Math.floor(Math.random() * 3) + 1;
                            switch (symbolNum) {
                                case 1:
                                    correct = num1 + num2;
                                    console.log("What is ".concat(num1, " + ").concat(num2, " ?"));
                                    break;
                                case 2:
                                    correct = num1 * num2;
                                    console.log("What is ".concat(num1, " * ").concat(num2, " ?"));
                                    break;
                                case 3:
                                    correct = num1 - num2;
                                    console.log("What is ".concat(num1, " - ").concat(num2, " ?"));
                                    break;
                            }
                            break;
                        case 3:
                            symbolNum = Math.floor(Math.random() * 4) + 1;
                            switch (symbolNum) {
                                case 1:
                                    correct = num1 + num2;
                                    console.log("What is ".concat(num1, " + ").concat(num2, " ?"));
                                    break;
                                case 2:
                                    correct = num1 * num2;
                                    console.log("What is ".concat(num1, " * ").concat(num2, " ?"));
                                    break;
                                case 3:
                                    correct = num1 - num2;
                                    console.log("What is ".concat(num1, " - ").concat(num2, " ?"));
                                    break;
                                case 4:
                                    correct = num1 / num2;
                                    console.log("What is ".concat(num1, " / ").concat(num2, " ?"));
                                    break;
                            }
                            break;
                    }
                    start = Date.now();
                    return [4 /*yield*/, Promise.race([
                            askQuestion("Your answer: "),
                            new Promise(function (resolve) {
                                return setTimeout(function () { return resolve("TIMEOUT"); }, 30000);
                            })
                        ])];
                case 2:
                    answer = _a.sent();
                    end = Date.now();
                    timeTaken = (end - start) / 1000;
                    if (answer === "TIMEOUT") {
                        console.log("Time is up! correct is: " + correct);
                        console.log("You answered ".concat(correctAnswers, " questions correctly"));
                        process.exit();
                    }
                    if (Number(answer) !== correct) {
                        console.log("Wrong answer! correct is: " + correct);
                        console.log("You answered ".concat(correctAnswers, " questions correctly"));
                        process.exit();
                    }
                    console.log("Correct! Time taken: ".concat(timeTaken, " seconds"));
                    correctAnswers++;
                    return [3 /*break*/, 1];
                case 3:
                    console.log("Congratulations! You answered all 10 questions correctly!");
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
function startGame2players(difficulty) {
    return __awaiter(this, void 0, void 0, function () {
        var correctAnswers, player1Name, player2Name, players, num1, num2, symbolNum, correct, start, answer, end, timeTaken;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    correctAnswers = 0;
                    return [4 /*yield*/, Promise.race([
                            askQuestion("player 1 what is thy name? ")
                        ])];
                case 1:
                    player1Name = _a.sent();
                    return [4 /*yield*/, Promise.race([
                            askQuestion("player 2 what is thy name? ")
                        ])];
                case 2:
                    player2Name = _a.sent();
                    players = [player1Name, player2Name];
                    _a.label = 3;
                case 3:
                    if (!(correctAnswers < 10 * difficulty)) return [3 /*break*/, 5];
                    console.log(players[correctAnswers % 2]);
                    num1 = Math.floor(Math.random() * 20) + 1;
                    num2 = Math.floor(Math.random() * 20) + 1;
                    symbolNum = void 0;
                    correct = num1 + num2;
                    switch (difficulty) {
                        case 1:
                            symbolNum = Math.floor(Math.random() * 2) + 1;
                            switch (symbolNum) {
                                case 1:
                                    correct = num1 + num2;
                                    console.log("What is ".concat(num1, " + ").concat(num2, " ?"));
                                    break;
                                case 2:
                                    correct = num1 - num2;
                                    console.log("What is ".concat(num1, " - ").concat(num2, " ?"));
                                    break;
                            }
                            break;
                        case 2:
                            symbolNum = Math.floor(Math.random() * 3) + 1;
                            switch (symbolNum) {
                                case 1:
                                    correct = num1 + num2;
                                    console.log("What is ".concat(num1, " + ").concat(num2, " ?"));
                                    break;
                                case 2:
                                    correct = num1 * num2;
                                    console.log("What is ".concat(num1, " * ").concat(num2, " ?"));
                                    break;
                                case 3:
                                    correct = num1 - num2;
                                    console.log("What is ".concat(num1, " - ").concat(num2, " ?"));
                                    break;
                            }
                            break;
                        case 3:
                            symbolNum = Math.floor(Math.random() * 4) + 1;
                            switch (symbolNum) {
                                case 1:
                                    correct = num1 + num2;
                                    console.log("What is ".concat(num1, " + ").concat(num2, " ?"));
                                    break;
                                case 2:
                                    correct = num1 * num2;
                                    console.log("What is ".concat(num1, " * ").concat(num2, " ?"));
                                    break;
                                case 3:
                                    correct = num1 - num2;
                                    console.log("What is ".concat(num1, " - ").concat(num2, " ?"));
                                    break;
                                case 4:
                                    correct = num1 / num2;
                                    console.log("What is ".concat(num1, " / ").concat(num2, " ?"));
                                    break;
                            }
                            break;
                    }
                    start = Date.now();
                    return [4 /*yield*/, Promise.race([
                            askQuestion("Your answer: "),
                            new Promise(function (resolve) {
                                return setTimeout(function () { return resolve("TIMEOUT"); }, 30000);
                            })
                        ])];
                case 4:
                    answer = _a.sent();
                    end = Date.now();
                    timeTaken = (end - start) / 1000;
                    if (answer === "TIMEOUT") {
                        console.log("Time is up! correct is: " + correct);
                        if (correctAnswers % 2 == 1) {
                            console.log(player1Name + " won");
                        }
                        else {
                            console.log(player2Name + " won");
                        }
                        process.exit();
                    }
                    if (Number(answer) !== correct) {
                        console.log("Wrong answer! correct is: " + correct);
                        if (correctAnswers % 2 == 1) {
                            console.log(player1Name + " won");
                        }
                        else {
                            console.log(player2Name + " won");
                        }
                        process.exit();
                    }
                    console.log("Correct! Time taken: ".concat(timeTaken, " seconds"));
                    correctAnswers++;
                    return [3 /*break*/, 3];
                case 5:
                    console.log("tie");
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
function startGame() {
    return __awaiter(this, void 0, void 0, function () {
        var playersAmount, difficulty, difficultyNum, difficulty, difficultyNum;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.race([
                        askQuestion("1 or 2 players?")
                    ])];
                case 1:
                    playersAmount = _a.sent();
                    if (!(playersAmount == "1")) return [3 /*break*/, 3];
                    return [4 /*yield*/, Promise.race([
                            askQuestion("Sellect difficulty 1-3: ")
                        ])];
                case 2:
                    difficulty = _a.sent();
                    difficultyNum = parseInt(difficulty);
                    if (difficultyNum >= 1 && difficultyNum <= 3) {
                        startGame1players(difficultyNum);
                    }
                    else {
                        console.log("I dont understand");
                        process.exit();
                    }
                    return [3 /*break*/, 6];
                case 3:
                    if (!(playersAmount == "2")) return [3 /*break*/, 5];
                    return [4 /*yield*/, Promise.race([
                            askQuestion("Sellect difficulty 1-3: ")
                        ])];
                case 4:
                    difficulty = _a.sent();
                    difficultyNum = parseInt(difficulty);
                    if (difficultyNum >= 1 && difficultyNum <= 3) {
                        startGame2players(difficultyNum);
                    }
                    else {
                        console.log("I dont understand");
                        process.exit();
                    }
                    return [3 /*break*/, 6];
                case 5:
                    console.log("I dont understand");
                    process.exit();
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}
startGame();
