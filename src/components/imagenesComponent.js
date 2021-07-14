import React from 'react';

class Imagen extends React.Component {

    constructor(props) {
        super(props);
        //Seting this.ImageRef as the Ref of the Img
        this.imagenR = React.createRef();
        this.state = { spans: "" }
    }
    //Load event handler
    loadEventRefs = () => {
        const height = this.imagenR.current.clientHeight;
        const spans = Math.ceil(height / 10)
        this.setState({ spans })
    }

    //Calculating the Height after render the first time
    componentDidMount() {
        this.imagenR.current.addEventListener('load', this.loadEventRefs)
    }
    render() {
        const { description, urls } = this.props.imagen
        return (<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
            <img ref={this.imagenR} alt={description} src={urls.regular} />
        </div>)
    }
}
export default Imagen;