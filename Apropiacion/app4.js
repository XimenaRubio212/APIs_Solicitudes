const eliminarPublicacion = async () => {
    let respuesta = await fetch('http://localhost:3000/posts/1', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (respuesta.ok) {
        console.log("La publicación ha sido eliminada con éxito.");
        let datos = await respuesta.json();
        return datos; 
    } else {
        console.error("Error al intentar eliminar la publicación.");
    }
};

eliminarPublicacion().then(resultado => console.log(resultado));