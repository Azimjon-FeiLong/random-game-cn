let ism = prompt('嗨! 你叫什么名字?');

while (ism == "" || ism == null){
  ism = prompt('嗨! 你叫什么名字?');

}

alert(ism + "，我想到的数字是从1到100。请您以尽可能少的尝试来猜测它。 每次尝试之后，我都会说：少了一点，多了一点 或者 您猜对了。");

let num = Math.ceil(Math.random()*100);
let guess = prompt("我想的是什么数字?");
let numOfGuess = 0;

while(guess != num){
  if(guess > num){
    guess = prompt("多了一点. 猜错了，再试一次。");
    numOfGuess += 1;
  }
  if(guess < num){
    guess = prompt("少了一点。 猜错了，再试一次。");
    numOfGuess += 1;
  }
}

alert("恭喜恭喜! " + ism + ", 您猜对了！ 这个数字是 " + num + ". 您试了 " + numOfGuess + " 次。");