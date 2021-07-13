import React from 'react';
import ImagenesComponente from './imagenesComponent'
import './listImages.css'


//List of Images, rendering each ImagenesComponente Component.
const ListImages = (props) => {
    const listaImages = props.imagenes.map(imagen => {
        return <ImagenesComponente key={imagen.id} imagen={imagen} />
    })

    return <div className="list-images">{listaImages}</div>
}

export default ListImages