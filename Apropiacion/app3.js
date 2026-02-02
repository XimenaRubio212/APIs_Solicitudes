//Solicitud 6
const actualizarPublicacionCompleta = async () => {
    let publicacionActualizada = {
        userId: 1,
        id: 1, // Es importante incluir el ID del recurso que se actualiza
        title: "Publicación actualizada con PUT",
        body: "ESTA PUBLICACIÓN HA SIDO REEMPLAZADA COMPLETAMENTE POR ESTE NUEVO TEXTO."
    };
    
    let respuesta = await fetch('http://localhost:3000/posts/1', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(publicacionActualizada)
    });
    
    let datos = await respuesta.json();
    return datos;
};

//Solicitud 7
const modificarCampoEspecifico = async () => {
    let modificacionParcial = {
        title: "Título modificado solo con PATCH"
    };
    
    let respuesta = await fetch('http://localhost:3000/posts/1', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(modificacionParcial)
    });
    
    let datos = await respuesta.json();
    return datos;
};

const ejecutarSolicitudes = async () => {

    console.log(`=== SOLICITUD 5: Crear nueva publicación ===`);
    let publicacion = await actualizarPublicacionCompleta();
    console.log(publicacion);
    console.log('\n');

    console.log(`=== SOLICITUD 6: Modificar campo específico de la publicación ===`);
    let publicacionModificada = await modificarCampoEspecifico();
    console.log(publicacionModificada);
};

ejecutarSolicitudes();