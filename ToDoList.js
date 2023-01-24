let formulario = document.getElementById("formulario");
let header = document.querySelector("header")
let li = document.getElementById("li")


let tareas = []

formulario.addEventListener("submit",(e)=>{
e.preventDefault()
 
const nuevaTarea = document.getElementById("nuevaTarea").value

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

mostrarHTML()
})



const mostrarHTML= () =>{

  li.innerHTML= ""

  if(tareas.length === 0){
    const mensaje = document.createElement("h5");
    mensaje.textContent =("Sin tareas")
    return
  }
 

  tareas.forEach((item)=>{
    itemTareas = document.createElement("div")
    itemTareas.classList.add("flex")
    itemTareas.classList.add("justify-between")
    itemTareas.classList.add("mt-5")
    itemTareas.classList.add("mb-5")
    itemTareas.innerHTML= `
   
    <div>

    ${item.estado ? 
      `<p class="text-black ml-5 " id="parrafo">${item.tarea}</p>`
      : 
      `<p class="text-white ml-5 " id="parrafo">${item.tarea}</p>`
    }

    
              </div>
              <div class="flex gap-5 mr-5">
  
              <button  data-id="${item.id}" class="eliminar p-[10px] bg-white"><i class="fa-solid fa-trash"></i></button>
              <button  data-id="${item.id}" class="completada p-[10px] bg-white"><i class="fa-solid fa-check"></i></button>
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
  


