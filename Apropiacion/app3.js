// Solicitud 6
/**
 * Función asíncrona para actualizar un recurso completo usando el método PUT.
 * El método PUT reemplaza el objeto destino con la nueva información enviada.
 * @param {number|string} idParaEditar - El ID del post que queremos actualizar.
 */
const actualizarPublicacionCompleta = async (idParaEditar) => {
    // Definimos el nuevo objeto que reemplazará al anterior en su totalidad.
    let publicacionActualizada = {
        userId: 1,
        title: "Publicación actualizada con PUT",
        body: "ESTA PUBLICACIÓN HA SIDO REEMPLAZADA COMPLETAMENTE POR ESTE NUEVO TEXTO."
    };
    
    // Realizamos la petición fetch indicando el ID en la URL.
    let respuesta = await fetch(`http://localhost:3000/posts/${idParaEditar}`, {
        method: 'PUT', // Especificamos el método PUT (reemplazo total).
        headers: {
            // Informamos al servidor que enviamos datos en formato JSON.
            'Content-Type': 'application/json'
        },
        // Convertimos el objeto de actualización a una cadena de texto JSON.
        body: JSON.stringify(publicacionActualizada)
    });
    
    // Esperamos la respuesta del servidor y la convertimos a un objeto JavaScript.
    let datos = await respuesta.json();
    
    // Retornamos el objeto actualizado.
    return datos;
};

// Solicitud 7
/**
 * Función asíncrona para modificar solo campos específicos usando el método PATCH.
 * A diferencia de PUT, PATCH solo cambia las propiedades que enviamos en el cuerpo.
 * @param {number|string} idParaEditar - El ID del post que queremos modificar.
 */
const modificarCampoEspecifico = async (idParaEditar) => {
    // Definimos solo la propiedad que deseamos cambiar (en este caso, solo el título).
    let modificacionParcial = {
        title: "Título modificado solo con PATCH"
    };
    
    // Realizamos la petición fetch apuntando al ID específico.
    let respuesta = await fetch(`http://localhost:3000/posts/${idParaEditar}`, {
        method: 'PATCH', // Especificamos el método PATCH (modificación parcial).
        headers: {
            // Indicamos que el cuerpo de la petición es JSON.
            'Content-Type': 'application/json'
        },
        // Convertimos el objeto parcial a texto JSON.
        body: JSON.stringify(modificacionParcial)
    });
    
    // Procesamos la respuesta JSON del servidor.
    let datos = await respuesta.json();
    
    // Retornamos el objeto con el campo ya modificado.
    return datos;
};

/**
 * Función principal para orquestar las pruebas de actualización.
 */
const ejecutarSolicitudes = async () => {

    // Primero obtenemos la lista actual de posts para asegurarnos de tener un ID válido.
    let respuestaPosts = await fetch('http://localhost:3000/posts');
    // Convertimos la respuesta para poder manipular la lista.
    let listaDePosts = await respuestaPosts.json();

    // Extraemos el ID del primer post de la lista para usarlo como referencia en las ediciones.
    let idExistente = listaDePosts[0].id;

    // Ejecutamos la Solicitud 6 (PUT).
    console.log(`=== SOLICITUD 6: Actualización completa del ID ${idExistente} ===`);
    let publicacion = await actualizarPublicacionCompleta(idExistente);
    // Mostramos el resultado del reemplazo total.
    console.log(publicacion);
    // Espacio estético en consola.
    console.log('\n');

    // Ejecutamos la Solicitud 7 (PATCH).
    console.log(`=== SOLICITUD 7: Modificar campo específico de la publicación ${idExistente} ===`);
    let publicacionModificada = await modificarCampoEspecifico(idExistente);
    // Mostramos el resultado de la modificación parcial.
    console.log(publicacionModificada);
};

// Se invoca la función para iniciar el flujo de actualizaciones.
ejecutarSolicitudes();