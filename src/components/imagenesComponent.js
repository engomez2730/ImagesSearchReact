import React from 'react';

class Imagen extends React.Component {

    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }
    componentDidMount() {
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