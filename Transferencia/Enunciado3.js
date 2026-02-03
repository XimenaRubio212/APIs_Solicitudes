/**
 * Objetivo: Consultar información detallada de una publicación específica por su ID.
 */
const buscarDetallePublicacion = async (postId) => {
    // 1. Consultar la publicación específica por su ID
    let resPost = await fetch(`http://localhost:3000/posts/${postId}`);
    
    // Validar si la publicación existe antes de seguir
    if (!resPost.ok) return console.log("La publicación no existe.");
    
    let post = await resPost.json();

    // 2. Consultar los comentarios relacionados con esa publicación
    let resComents = await fetch(`http://localhost:3000/comments?postId=${postId}`);
    let comentarios = await resComents.json();

    // 3. Datos de salida: Información detallada
    console.log("=== DETALLE DE PUBLICACIÓN ===");
    console.log(`Título: ${post.title}`);
    console.log(`Contenido: ${post.body}`);
    console.log(`Número de comentarios asociados: ${comentarios.length}`);
};

// Ejemplo: Consultar la publicación con ID 5
buscarDetallePublicacion(5);