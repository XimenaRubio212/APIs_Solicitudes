//PARTE 1: Solicitud 1.

//aqui vamos a 
const obtenerUsuario = async () => {
    let respuesta = await fetch('http://localhost:3000/users');
    let datos = await respuesta.json();
    return datos;
}

//Solicitud 2
const consultarUsuarioPorId = async (id) => {
    let respuesta = await fetch(`http://localhost:3000/users/${id}`);
    let datos = await respuesta.json();
    return datos;
}

//Solicitud 3
const obtenerPublicacionesUsuario = async (userId) => {
    let respuesta = await fetch(`http://localhost:3000/posts?userId=${userId}`);
    let datos = await respuesta.json();
    return datos;
}

//Ejecutamos la solicitud 1
const ejecutarSolicitud1 = async () => {
    console.log(`--- Solicitud 1 ---`);
    let usuario = await obtenerUsuario();
    console.log(usuario);
}

//Ejecutamos la solicitud 2
const ejecutarSolicitud2 = async (id) => {
    console.log(`--- Solicitud 2 ---`);
    let usuario = await consultarUsuarioPorId(id);
    console.log(usuario);
}

//Ejecutamos la solicitud 3
const ejecutarSolicitud3 = async (userId) => {
    console.log(`--- Solicitud 3 ---`);
    let publicaciones = await obtenerPublicacionesUsuario(userId);
    console.log(publicaciones);
}

//Descomentar para ejecutar las solicitudes
ejecutarSolicitud1();
// ejecutarSolicitud2(1);
// ejecutarSolicitud3(1);