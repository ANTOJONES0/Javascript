
postID = 1


fetchPost()
toggleDiasbleBtn()

function toggleDiasbleBtn(){

    if(postID === 1){
        document.querySelector('#prevBtn').disabled = true
    }else{
        document.querySelector('#prevBtn').disabled = false
    }
}




function fetchPost(){

    let url = `https://jsonplaceholder.typicode.com/posts/${postID}`
    fetch(url).then(response =>{
        return response.json()
    }).then(data =>{
        debugger
    
        let resultElement = document.querySelector('#result')
            resultElement.innerHTML = `
                                       <h1>${data.id} - ${data.title}</h1>
                                       <p>${data.body}</p>
                                      `
        
    })
}


document.querySelector('#nextBtn').addEventListener('click', ()=>{
    postID++
    fetchPost()
    toggleDiasbleBtn()
})

document.querySelector('#prevBtn').addEventListener('click', ()=>{
    postID--
    fetchPost()
    toggleDiasbleBtn()
})