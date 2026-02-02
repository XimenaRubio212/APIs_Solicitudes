//Solicitud 4 (POST es para crear nueva informacion o nuevos datos)
const crearPublicacion = async () => {
    let nuevaPublicacion = {
        userId: 1,
        title: "Nueva publicación con POST",
        body: "UNA NUEVA TAREA SE HA AGREGADO A LA LISTA DE TAREAS."
    };
    
    let respuesta = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevaPublicacion)
    });
    
    let datos = await respuesta.json();
    return datos;
};

//Solicitud 5 (POST es para crear nueva informacion o nuevos datos)
const NuevoComentariodePublicacion = async () => {
    let nuevoComentario = {
        userId: 1,
        title: "Nuevo comentario con POST",
        body: "UN NUEVO COMENTARIO SE HA AGREGADO A LA PUBLICACIÓN." 
    }

    let respuesta = await fetch("http://localhost:3000/comments", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
    },
    body: JSON.stringify(nuevoComentario)
});

let datos = await respuesta.json();
return datos;

};

const ejecutarSolicitudes = async () => {
    
    console.log('=== SOLICITUD 4: Crear nueva publicación ===');
    let publicacion = await crearPublicacion();
    console.log(publicacion);
    console.log('\n');

    console.log('=== SOLICITUD 5: Crear nuevo comentario ===');
    let comentario = await crearComentario();
    console.log(comentario);
};

ejecutarSolicitudes();