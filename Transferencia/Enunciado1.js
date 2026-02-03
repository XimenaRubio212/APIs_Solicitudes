/**
 * Objetivo: Mostrar usuarios con su nombre y la cantidad de publicaciones que han realizado.
 */
const reporteUsuariosPosts = async () => {
    // 1. Consultar la lista completa de usuarios
    let resUsuarios = await fetch('http://localhost:3000/users');
    let usuarios = await resUsuarios.json();

    // 2. Consultar la lista completa de publicaciones
    let resPosts = await fetch('http://localhost:3000/posts');
    let posts = await resPosts.json();

    // 3. Procesar los datos (Relacionar y calcular)
    console.log("=== REPORTE DE USUARIOS Y PUBLICACIONES ===");
    
    // Recorremos el array de usuarios uno por uno
    usuarios.forEach(usuario => {
        // Filtramos las publicaciones donde el userId coincida con el id del usuario actual
        let totalPosts = posts.filter(post => post.userId === usuario.id).length;
        
        // 4. Mostrar datos de salida: Nombre y Cantidad
        console.log(`Usuario: ${usuario.name} | Publicaciones: ${totalPosts}`);
    });
};

reporteUsuariosPosts();