// Solicitud 9: Verificar recurso eliminado
/**
 * Función asíncrona que intenta recuperar un post específico para comprobar si existe.
 * Si el post 1 fue eliminado en pasos previos, esta solicitud devolverá un error 404.
 */
const verificarRecursoEliminado = async () => {
    // Realiza una petición GET al recurso con ID 1 y espera la respuesta del servidor.
    let respuesta = await fetch('http://localhost:3000/posts/1');
    
    // Verificamos la propiedad 'ok' de la respuesta. 
    // Si es falsa (ej. status 404), significa que el recurso no se encontró.
    if (!respuesta.ok) {
        // Retornamos un mensaje de texto explicando que el status no fue exitoso (confirmando el borrado).
        return `Análisis Solicitud 9: El servidor respondió con status ${respuesta.status} (Not Found). Esto confirma que el recurso fue eliminado exitosamente.`;
    }

    // Si el recurso SI existe (status 200), transformamos el cuerpo de la respuesta a JSON.
    let datos = await respuesta.json();
    // Retornamos los datos del objeto encontrado.
    return datos;
};

// Solicitud 10: Obtener lista general para comparar
/**
 * Función asíncrona para obtener el listado completo de publicaciones actuales.
 */
const obtenerEstructuraGeneral = async () => {
    // Solicita al servidor todos los elementos de la colección 'posts'.
    let respuesta = await fetch('http://localhost:3000/posts');
    // Convierte la respuesta recibida en un array de objetos JavaScript.
    let datos = await respuesta.json();
    // Retorna dicho array.
    return datos;
};

// Función principal para ejecutar y analizar
/**
 * Función orquestadora que ejecuta la verificación y realiza un análisis lógico de los datos.
 */
const ejecutarAnalisis = async () => {
    // Imprime el título de la Solicitud 9 en la consola.
    console.log('=== SOLICITUD 9: Verificando el recurso ID=1 ===');
    // Llama a la función de verificación y espera su mensaje o datos.
    const resultado9 = await verificarRecursoEliminado();
    // Muestra en consola el resultado (ya sea el mensaje de error 404 o el objeto si aún existiera).
    console.log(resultado9); 

    // Imprime un salto de línea y el título de la Solicitud 10.
    console.log('\n=== SOLICITUD 10: Estructura general de la lista ===');
    // Llama a la función para obtener todos los posts y espera el array resultante.
    const resultado10 = await obtenerEstructuraGeneral();
    // Muestra la lista completa de publicaciones en la consola.
    console.log(resultado10);

    // Bloque de análisis de la estructura de los datos obtenidos.
    console.log('\n--- CONCLUSIÓN DEL ANÁLISIS ---');
    // Comprueba si el array obtenido tiene elementos (longitud mayor a 0).
    if (resultado10.length > 0) {
        // Informa cuántas publicaciones hay en total en el servidor actualmente.
        console.log(`La lista general ahora tiene ${resultado10.length} publicaciones.`);
        // Muestra los nombres de las propiedades (llaves) del primer objeto del array usando Object.keys.
        console.log("Estructura de un objeto post:", Object.keys(resultado10[0]));
    } else {
        // Si el array está vacío, informa que no se encontraron publicaciones.
        console.log("La lista de posts está vacía actualmente.");
    }
};

// Ejecución de la función principal de análisis.
ejecutarAnalisis();