document.querySelector('#runbtn').addEventListener('click',()=>{
    let totallap = parseInt(document.querySelector('#lap').value)
    currentlap=1

    let resultElement = document.querySelector('#result')

    resultElement.innerHTML = ''


    while(currentlap <=totallap){
        resultElement.innerHTML += `Lap ${currentlap} is completed`
        currentlap++
    }

    resultElement.innerHTML += `<h1> You Won </h1>`


})