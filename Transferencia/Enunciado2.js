/**
 * Objetivo: Listar publicaciones indicando título, número de comentarios y estado.
 */
const reportePublicacionesInteraccion = async () => {
    // 1. Consultar todas las publicaciones
    let resPosts = await fetch('http://localhost:3000/posts');
    let posts = await resPosts.json();

    // 2. Consultar todos los comentarios
    let resComentarios = await fetch('http://localhost:3000/comments');
    let comentarios = await resComentarios.json();

    console.log("=== ANÁLISIS DE INTERACCIÓN ===");

    // 3. Relacionar y clasificar
    posts.forEach(post => {
        // Filtramos comentarios que pertenecen a la publicación actual (postId)
        let numComentarios = comentarios.filter(coment => coment.postId === post.id).length;
        
        // Determinamos el estado según la cantidad
        let estado = numComentarios > 0 ? "Con comentarios" : "Sin comentarios";

        // 4. Datos de salida
        console.log(`Título: ${post.title}`);
        console.log(`Número de comentarios: ${numComentarios}`);
        console.log(`Estado: ${estado}`);
        console.log('---------------------------');
    });
};

reportePublicacionesInteraccion();