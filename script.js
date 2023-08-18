//Crear un array 
// const palabras = Array()
/*const lenguajes = ["C#", "C++", "Python"]
const lista =  document.querySelector("#lista");

lenguajes.forEach(function(item, index){
    lista.innerHTML += `<li>${item}</li>`
})*/

/* Lista de Libros  */
const libros = ["libro1", "libro2"]
const libro = document.querySelector("#libro")
const listaLibros = document.querySelector("#misLibros")

//Agrega un evento de click al boton
btnAgregar.addEventListener("click", () => {
    libros.push(libro.value)
    mostrarLibros()
})

//Muestra la lista de libros
function mostrarLibros(){
    listaLibros.innerHTML = null
    libros.forEach((item,index) =>{
        listaLibros.innerHTML += `
        <li>${item} <button type="button"
         onclick="prestarLibro(${index})">Prestar</button></li>
        `
    })
}

function prestarLibro(index){
    libros.splice(index, 1)
    mostrarLibros()
    alert("Se presto un libro")
}


btnVerificar.addEventListener("click", () => {
    libros.push(libro.value)
    verificarLibros()
})
        function verificarLibros() {
            listaLibros.innerHTML = null
            libros.forEach((item,index) =>{
               listaLibros.innerHTML += `
                <li>${item} <button type="button"
                 onclick="verificarLibro(${index})">verificar</button></li>
                `
            })
        }
           function verificarLibro(index){
            libros.splice(index, 1)
            verificarLibros()
            alert("Existe el libro")
            alert("no existe el libro")
           }
        
