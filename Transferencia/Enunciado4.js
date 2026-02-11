// Función para obtener los comentarios de una publicación específica
export const getCommentsByPost = async (postId) => {
  const respuesta = await fetch(`http://localhost:8000/comments?postId=${postId}`);
  const data = await respuesta.json();
  return data;
};

// Función para eliminar una publicación usando su id
export const eliminarPublicacion = async (id) => {
  const respuesta = await fetch(`http://localhost:8000/posts/${id}`, {
    method: 'DELETE',
  });
  
  if (respuesta.ok) {
    return "Publicación eliminada correctamente";
  } else {
    return "Error al intentar eliminar la publicación";
  }
};

// Función para buscar una publicación (se usará para la validación final)
export const getPostById = async (id) => {
  const respuesta = await fetch(`http://localhost:8000/posts/${id}`);
  // Si el status es 404, significa que ya no existe
  if (respuesta.status === 404) return null;
  const data = await respuesta.json();
  return data;
};