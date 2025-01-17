// function checkBox(){
//     return new Promise((resolve,reject)=> {
//         let orderID = document.querySelector('#input').value

//         if (orderID === 'order123'){
//             resolve("Order Delivered...!")
//         }else{
//             reject("Order Cancelled...!")
//         }
//     })
// } 


// document.querySelector('#checkBtn').addEventListener('click', ()=>{
//     checkBox().then((success) =>{
//         document.querySelector('#result').innerHTML = success
//     }).catch((failure) =>{
//         document.querySelector('#result').innerHTML = failure
//     })
// })



async function checkBox(){

    let orderID = document.querySelector('#input').value

    if (orderID === 'order123'){
        return "Order Delivered...!"
    }else{
        throw "Order Cancelled...!"
    }

   
} 

document.querySelector('#checkBtn').addEventListener('click', async() =>{
    try{
        let success = await checkBox()
        document.querySelector('#result').innerHTML = success
    }catch(error){
        document.querySelector('#result').innerHTML = error
    }
})

