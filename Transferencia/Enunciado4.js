/**
 * Objetivo: Eliminar una publicación solo si no tiene comentarios asociados.
 */
const eliminarSiNoTieneComentarios = async (postId) => {
    // 1. Consultar si existen comentarios para esta publicación específica
    let resComents = await fetch(`http://localhost:3000/comments?postId=${postId}`);
    let comentarios = await resComents.json();

    // 2. Verificar si tiene comentarios
    if (comentarios.length > 0) {
        // Si existen comentarios, bloqueamos la eliminación
        console.log("MENSAJE: No se puede eliminar la publicación porque tiene comentarios.");
    } else {
        // 3. Si no tiene comentarios, proceder a eliminar (DELETE)
        let resDelete = await fetch(`http://localhost:3000/posts/${postId}`, {
            method: 'DELETE'
        });

        if (resDelete.ok) {
            console.log("MENSAJE: Publicación eliminada correctamente.");
            
            // 4. Validar resultado mediante una nueva consulta
            let validacion = await fetch(`http://localhost:3000/posts/${postId}`);
            console.log(validacion.status === 404 ? "Validación: Confirmado, ya no existe." : "Validación: Error, aún existe.");
        }
    }
};

// Ejemplo: Intentar eliminar la publicación ID 10
eliminarSiNoTieneComentarios(10);