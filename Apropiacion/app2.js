// Solicitud 4 (POST es para crear nueva información o nuevos datos)
/**
 * Función asíncrona para crear una nueva publicación en el servidor.
 */
const crearPublicacion = async () => {
    // Definimos un objeto de JavaScript con la estructura que el servidor espera recibir.
    let nuevaPublicacion = {
        userId: 1, // ID del usuario que crea la publicación.
        title: "Nueva publicación con POST", // Título de la publicación.
        body: "UNA NUEVA TAREA SE HA AGREGADO A LA LISTA DE TAREAS." // Contenido de la publicación.
    };
    
    // Realizamos la petición fetch a la ruta '/posts'.
    // Al ser un POST, pasamos un segundo argumento con la configuración de la petición.
    let respuesta = await fetch('http://localhost:3000/posts', {
        method: 'POST', // Especificamos que el método HTTP es POST.
        headers: {
            // Indicamos al servidor que el contenido que estamos enviando es de tipo JSON.
            'Content-Type': 'application/json'
        },
        // Convertimos el objeto JavaScript 'nuevaPublicacion' a una cadena de texto JSON (string).
        body: JSON.stringify(nuevaPublicacion)
    });
    
    // Esperamos a que el servidor procese la creación y nos devuelva el objeto creado (usualmente con un nuevo ID).
    let datos = await respuesta.json();
    
    // Retornamos los datos confirmados por el servidor.
    return datos;
};

// Solicitud 5 (POST es para crear nueva información o nuevos datos)
/**
 * Función asíncrona para crear un nuevo comentario.
 */
const NuevoComentariodePublicacion = async () => {
    // Definimos el objeto con los datos del comentario que queremos registrar.
    let nuevoComentario = {
        userId: 1,
        title: "Nuevo comentario con POST",
        body: "UN NUEVO COMENTARIO SE HA AGREGADO A LA PUBLICACIÓN." 
    };

    // Iniciamos la petición fetch hacia el endpoint '/comments'.
    let respuesta = await fetch("http://localhost:3000/comments", {
        method: 'POST', // Declaramos la intención de crear (POST).
        headers: {
            // Es obligatorio avisar que enviamos JSON para que el servidor sepa cómo leerlo.
            "Content-Type": "application/json"
        },
        // Transformamos el objeto comentario a formato texto JSON para el envío por red.
        body: JSON.stringify(nuevoComentario)
    });

    // Procesamos la respuesta del servidor para obtener el resultado final.
    let datos = await respuesta.json();
    
    // Retornamos el objeto procesado.
    return datos;
};

/**
 * Función principal para ejecutar las solicitudes de creación (POST).
 */
const ejecutarSolicitudes = async () => {
    
    // Imprime un mensaje informativo en la consola.
    console.log('=== SOLICITUD 4: Crear nueva publicación ===');
    
    // Llama a la función y espera a que el servidor responda con el nuevo objeto creado.
    let publicacion = await crearPublicacion();
    
    // Muestra el resultado de la creación en la consola.
    console.log(publicacion);
    
    // Imprime un salto de línea para mejorar la legibilidad.
    console.log('\n');

    // Imprime el encabezado para la quinta solicitud.
    console.log('=== SOLICITUD 5: Crear nuevo comentario ===');
    
    // Ejecuta la función de creación de comentario y espera el resultado.
    let comentario = await NuevoComentariodePublicacion();
    
    // Muestra el comentario recién creado en la consola.
    console.log(comentario);
};

// Se invoca la función para poner en marcha las peticiones POST.
ejecutarSolicitudes();