import React from 'react';

class Search extends React.Component {
    state = { valorChange: '' };
    //Managin form submit event
    submitFormEvent = (e) => {
        e.preventDefault();
        //Using props method to send Data back to parent component
        this.props.whenFormSubmit(this.state.valorChange);
    }

    render() {
        //Equalazing the value of the form to the Stete (Controller component)
        return <div className="ui segment">
            <form onSubmit={this.submitFormEvent} className="ui form">
                <div className="field">
                    <label>Input</label>
                    <input
                        type="text"
                        value={this.state.valorChange}
                        onChange={e => this.setState({ valorChange: e.target.value })}>
                    </input>
                </div>
            </form>
        </div >
    }
}
export default Search

