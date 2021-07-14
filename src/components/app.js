import React from 'react'
import axios from 'axios'
import Search from './Searchcomponent';
import ListaImages from './listImages';

class App extends React.Component {
    state = { imagenes: [] }
    verConsola = async (letras) => {
        try {
            //Making API REUEST with Axios
            const data = await axios.get('https://api.unsplash.com/search/photos', {
                params: { query: letras },
                headers: {
                    Authorization: "Client-ID 8ZrhdPdsqmfwHwMYgvYskdeETpEINPF6xSU9gs78YXE",
                }
            })
            //Setting the imagenes state value equal to the Data
            this.setState({ imagenes: data.data.results })
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        //Sending the this.verConsola as props
        return (
            <div className="ui container" style={{ marginTop: "20px" }}>
                <Search whenFormSubmit={this.verConsola} />
                <ListaImages imagenes={this.state.imagenes}></ListaImages>
            </div >
        )
    }
}

export default App