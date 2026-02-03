/**
 * Función asíncrona para eliminar una publicación específica del servidor.
 * El método DELETE solicita al servidor que borre el recurso ubicado en la URL proporcionada.
 */
const eliminarPublicacion = async () => {
    // Realiza una petición fetch al endpoint del post con ID 1.
    // Se pasa un objeto de configuración como segundo argumento para definir el método.
    let respuesta = await fetch('http://localhost:3000/posts/1', {
        // Especificamos el método HTTP 'DELETE' para indicar que queremos borrar el recurso.
        method: 'DELETE',
    })
    
    // Una vez que el servidor responde (usualmente con un status 200 o 204),
    // imprimimos un mensaje en la consola confirmando que la petición se procesó.
    console.log(`Peticion 1: esta informacion se ha eliminado`);
}

// Se invoca la función para ejecutar el proceso de eliminación.
eliminarPublicacion();