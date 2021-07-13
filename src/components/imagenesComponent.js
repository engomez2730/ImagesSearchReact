import React from 'react';

class Imagen extends React.Component {

    constructor(props) {
        super(props);
        //Seting this.ImageRef as the Ref of the Img
        this.imageRef = React.createRef();
    }
    componentDidMount() {
        //Rendering the Ref after the component has rendered in the Dom
        console.log(this.imagenRef)
    }
    render() {
        const { description, urls } = this.props.imagen

        return (<div>
            <img ref={this.imagenRef} alt={description} src={urls.regular} />
        </div>)
    }
}
export default Imagen;