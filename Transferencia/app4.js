import { getCommentsByPost, eliminarPublicacion, getPostById } from "./Enunciado4.js";

const postIdAEliminar = 3;

console.log(`--- Iniciando validación para el Post ID: ${postIdAEliminar} ---`);

// 1. Consultar los comentarios asociados a la publicación
const comentarios = await getCommentsByPost(postIdAEliminar);

// 2. Verificar si tiene comentarios
if (comentarios.length > 0) {
  // REQUERIMIENTO: Si tiene comentarios, NO debe eliminarse.
  console.log("No se puede eliminar la publicación porque tiene comentarios");
} else {
  // 3. Si no tiene comentarios, proceder a la eliminación
  console.log("La publicación no tiene comentarios, procediendo a eliminar...");
  const resultadoEliminacion = await eliminarPublicacion(postIdAEliminar);
  console.log(resultadoEliminacion);

  // 4. Validar el resultado mediante una nueva consulta (Requerimiento final)
  const validacionPost = await getPostById(postIdAEliminar);
  if (validacionPost === null) {
    console.log("Validación confirmada: El post ya no existe en la base de datos.");
  } else {
    console.log("Error de validación: El post todavía existe.");
  }
}