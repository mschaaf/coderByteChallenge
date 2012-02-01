function jsChallenge() { 
    var n = 1000;
    var sevenTimesFive = 7 * 5;
    var seven = Math.floor(n / 7);
    var five = Math.floor(n / 5);
    var sevenFive = Math.floor(n / sevenTimesFive);
    var sevenFiveSum = ((sevenFive * (sevenFive + 1)) / 2);
    var sevenSum = ((seven * (seven + 1)) / 2);
    var fiveSum = ((five * (five + 1)) / 2);
    var num = ((n * (n + 1)) / 2) - (sevenSum * 7) - (fiveSum * 5) + (sevenFiveSum * sevenTimesFive);
    return num;
}

console.log(jsChallenge());
