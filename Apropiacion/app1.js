//PARTE 1: Solicitud 1.

/**
 * Función asíncrona para obtener la lista completa de usuarios.
 * Usa 'async' para permitir el uso de 'await' en su interior.
 */
const obtenerUsuario = async () => {
    // Realiza una petición HTTP GET a la URL indicada y espera (await) a que la promesa se resuelva.
    let respuesta = await fetch('http://localhost:3000/users');
    // Convierte el cuerpo de la respuesta a un objeto JavaScript (JSON) y espera a que termine el proceso.
    let datos = await respuesta.json();
    // Retorna el array de usuarios obtenidos.
    return datos;
}

//Solicitud 2
/**
 * Función que busca un usuario específico mediante su ID.
 */
const consultarUsuarioPorId = async (id) => {
    // Realiza una petición fetch usando un "template literal" para insertar el ID dinámicamente en la URL.
    let respuesta = await fetch(`http://localhost:3000/users/${id}`);
    // Procesa la respuesta para extraer los datos en formato JSON.
    let datos = await respuesta.json();
    // Retorna el objeto del usuario encontrado.
    return datos;
}

//Solicitud 3
/**
 * Función para obtener los posts o publicaciones de un usuario específico.
 */
const obtenerPublicacionesUsuario = async (userId) => {
    // Realiza la petición usando un parámetro de consulta (query string: ?userId=...) para filtrar resultados.
    let respuesta = await fetch(`http://localhost:3000/posts?userId=${userId}`);
    // Convierte la respuesta recibida en un formato legible para JavaScript.
    let datos = await respuesta.json();
    // Retorna la lista de publicaciones.
    return datos;
}

//Ejecutamos la solicitudes
/**
 * Función principal que orquestra la ejecución secuencial de todas las solicitudes anteriores.
 */
const ejecutarSolicitudes = async () => {

    // Imprime un encabezado en la consola para identificar la primera solicitud.
    console.log(`--- Solicitud 1 ---`);
    // Llama a obtenerUsuario y espera a que devuelva la lista de usuarios.
    let usuario = await obtenerUsuario();
    // Muestra en consola el array de usuarios recibido.
    console.log(usuario);

    // Extrae el ID del primer usuario de la lista (índice 0) para usarlo en las siguientes peticiones.
    let id = usuario[0].id;

//Ejecutamos la solicitud 2
// Imprime un salto de línea y el encabezado para la segunda solicitud.
    console.log(`\n`);
    console.log(`--- Solicitud 2 ---`);
    // Llama a la función de consulta por ID pasando el ID obtenido anteriormente y espera el resultado.
    let consulta = await consultarUsuarioPorId(id);
    // Muestra en consola la información del usuario específico.
    console.log(consulta);

    // Asigna el ID del usuario consultado a una variable para mayor claridad en la siguiente petición.
    let userId = id;

//Ejecutamos la solicitud 3
// Imprime un salto de línea y el encabezado para la tercera solicitud.
    console.log(`\n`);
    console.log(`--- Solicitud 3 ---`);
    // Llama a la función que busca publicaciones, pasando el userId y espera la respuesta.
    let publicaciones = await obtenerPublicacionesUsuario(userId);
    // Muestra en consola el array de publicaciones pertenecientes a ese usuario.
    console.log(publicaciones);
};

// Se invoca la función principal para iniciar todo el proceso de peticiones.
ejecutarSolicitudes();