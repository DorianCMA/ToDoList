let formulario = document.getElementById("formulario");
let header = document.querySelector("header")
let li = document.getElementById("li")


let tareas = []

formulario.addEventListener("submit",(e)=>{
  e.preventDefault()
  
  let nuevaTarea = document.getElementById("nuevaTarea").value
  
  
  if(!nuevaTarea.trim()){
    header.textContent="formulario vacio"
    
    setTimeout(()=>{
      header.textContent=""
    }, 2000)
    return
  }
  
  //  objeto

const objTarea ={
  id: Date.now(),
   tarea: nuevaTarea,
   estado:false

}
tareas = [...tareas,objTarea]



mostrarHTML();

})



const mostrarHTML= () =>{
  
  nuevaTarea.value ="" 
  li.innerHTML= ""

  if(tareas.length === 0){
    const mensaje = document.createElement("h5");
    mensaje.textContent =("Sin tareas")
    return
  }
 

  tareas.forEach((item)=>{
    itemTareas = document.createElement("div")
    itemTareas.classList.add("flex","justify-between","mt-5","mb-5")
   
    itemTareas.innerHTML= `
   
    <div>

    ${item.estado ? 
      `<p class=" text-green-600 ml-5 " id="parrafo">${item.tarea}</p>`
      : 
      `<p class="text-white ml-5 " id="parrafo">${item.tarea}</p>`
    }

    
              </div>
              <div class="flex gap-5 mr-5">
  
              <button  data-id="${item.id}" class="eliminar  rounded p-[10px] text-[#ccc] hover:bg-[#ccc] hover:text-black ">❌</i></button>
              <button  data-id="${item.id}" class="completada rounded p-[10px] text-[#ccc] hover:bg-[#ccc] hover:text-black">✔</i></button>
            </div>
    `
    
    li.appendChild(itemTareas)
   
  })
}


 li.addEventListener("click", (e)=>{
  if(e.target.classList.contains("eliminar")){

    const tareaID = Number(e.target.getAttribute("data-id"));
    const nuevasTarea = tareas.filter((item) => item.id !== tareaID)
    tareas = nuevasTarea
    mostrarHTML()

  }
})

li.addEventListener( "click", (e)=>{
  if(e.target.classList.contains("completada")){

    const tareaID = Number(e.target.getAttribute("data-id"));
    const nuevasTarea = tareas.map((item) => {

      if(item.id === tareaID){
        item.estado = !item.estado
        return item
      }else{
        return item
      }
      
    })
    
    mostrarHTML()

  }
})
  


