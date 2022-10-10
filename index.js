console.log("Dice Game!!!");

let btn = document.getElementById('btn');
btn.addEventListener('click', getdice);

let resultText = document.querySelector("#result");

function getdice() {
    let a = (Math.random() * 100) % 6;
    a = Math.floor(a) + 1;

    let b = (Math.random() * 100) % 6;
    b = Math.floor(b) + 1;

    let image1 = document.getElementById("imgpl1");
    let image2 = document.getElementById("imgpl2");
    console.log(a);



    switch (a) {
        case 1:
            image1.setAttribute('src', "dice" + a + ".png");
            image2.setAttribute('src', "dice" + b + ".png");
            console.log(a);
            break;
        case 2:
            image1.setAttribute('src', "dice" + a + ".png");
            image2.setAttribute('src', "dice" + b + ".png");

            console.log(a);

            break;
        case 3:
            image1.setAttribute('src', "dice" + a + ".png");
            image2.setAttribute('src', "dice" + b + ".png");

            console.log(a);

            break;
        case 4:
            image1.setAttribute('src', "dice" + a + ".png");
            image2.setAttribute('src', "dice" + b + ".png");

            console.log(a);

            break;
        case 5:
            image1.setAttribute('src', "dice" + a + ".png");
            image2.setAttribute('src', "dice" + b + ".png");

            console.log(a);

            break;
        case 6:
            image1.setAttribute('src', "dice" + a + ".png");
            image2.setAttribute('src', "dice" + b + ".png");

            console.log(a);

            break;

        default:
            console.log("Error occured!!");
            break;
    }

    if (a > b) {
        resultText.innerHTML = "Player 1 won!"
    } else if (a < b) {
        resultText.innerHTML = "Player 2 won!"
    } else {
        resultText.innerHTML = "Draw!!"
    }

}

let dicee = document.querySelectorAll("img");
function roll(){
    dicee.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dicee.forEach(function(die){
            die.classList.remove("shake");
        });
    },
    1000
    );
}

