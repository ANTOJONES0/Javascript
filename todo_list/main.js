 let tasks = []

 resultElement =  document.querySelector('#result')


 function renderTask(array){
    resultElement.innerHTML = ''

    array.forEach((item, index) =>{
        resultElement.innerHTML += `
                                     <div>
                                         <h1> ${item} </h1>
                                         <button onclick = "deleteTask(${index})"> Delete </ button>
                                     </div>

                                    `
    })
 }


document.querySelector('#addbtn').addEventListener('click',()=>{
    let value = document.querySelector('#taskInput').value
    tasks.push(value)
    renderTask(tasks)
})


function deleteTask(index){
    tasks.splice(index,1)
    renderTask(tasks)
}


document.querySelector('#searchInput').addEventListener('keyup', event =>{
    let key = event.target.value

   let filteredTasks = tasks.filter(item => {
        return item.includes(key)
    })

    renderTask(filteredTasks)
})