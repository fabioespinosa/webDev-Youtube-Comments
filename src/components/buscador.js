import React, {Component} from 'react';

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }
  
  buscar(termino) {
    this.setState({term: termino});
    this.props.buscarVideoYoutube(termino);
  }
  
  
  render() {
    return(
      <div className="col-md-12 buscador">
        <input type="text" onChange={(event) => this.buscar(event.target.value)}/>
      </div>
    )
  }
}

export default Buscador;
