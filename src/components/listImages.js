import React from 'react';
import ImagenesComponente from './imagenesComponent'
import './listImages.css'

const ListImages = (props) => {
    const listaImages = props.imagenes.map(imagen => {
        return <ImagenesComponente key={imagen.id} imagen={imagen} />
    })

    return <div className="list-images">{listaImages}</div>
}

export default ListImages