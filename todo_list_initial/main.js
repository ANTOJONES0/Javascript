 let tasks = []

 resultElement =  document.querySelector('#result')


 function renderTask(array){
    resultElement.innerHTML = ''

    array.forEach( item =>{
        resultElement.innerHTML += `
                                     <div class=text-wrapper>
                                         <input onChange = 'toggleComplete(${item.id})' type='checkbox' ${item.isCompleted ? 'checked' : ''}>
                                         <h1 class='${item.isCompleted ? 'completed' : ''}'> ${item.name} </h1>
                                         <div>
                                             <button onclick = "deleteTask(${item.id})"> Delete </ button>
                                         </div>
                                     </div>

                                    `
    })
 }


document.querySelector('#addbtn').addEventListener('click',()=>{
    let value = document.querySelector('#taskInput').value
    let task = {id: Date.now(), name : value , isCompleted: false}
    tasks.push(task)
    renderTask(tasks)
})


function deleteTask(id){
    tasks = tasks.filter( item => {
        return item.id != id
    })
    renderTask(tasks)
}


document.querySelector('#searchInput').addEventListener('keyup', event =>{
    let key = event.target.value

   let filteredTasks = tasks.filter(item => {
        return item.name.includes(key)
    })

    renderTask(filteredTasks)
})



function toggleComplete(id){
    let obj = tasks.find( item => item.id === id)
    obj.isCompleted = !obj.isCompleted

    renderTask(tasks)
}