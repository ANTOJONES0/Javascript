document.querySelector('#joinBtn').addEventListener('click',()=>{
    
    let firstName = document.querySelector('#firstname').value
    let lastName = document.querySelector('#lastname').value



    if(firstName === '' || lastName === ''){
        document.querySelector('#result').innerHTML='Please fill out the field'
    }else{
        document.querySelector('#result').innerHTML=`${firstName} ${lastName}`
    }
})