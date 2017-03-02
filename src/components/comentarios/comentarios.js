import React, {Component} from 'react';
import Comentario from './comentario';

class Comentarios extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      comentarioActual: '',
      comentarios: []
    }
  }
  
  agregarComentario(event) {
    event.preventDefault();
    this.setState({
      comentarios: this.state.comentarios.concat(this.state.comentarioActual),
      comentarioActual: ''
    });
  }
  
  cambiarComentario(event) {
    this.setState({
      comentarioActual: event.target.value
    });
  }
  
  render() {
    return(
      <div>
        {this.state.comentarios.map(comentario => {
          return <Comentario texto={comentario} />
        })}
        <div>
          <form onSubmit={this.agregarComentario.bind(this)}>
            <input value={this.state.comentarioActual} type="text" onChange={this.cambiarComentario.bind(this)}/>
          </form>
        </div>
      </div>
    )
  }
}

export default Comentarios;
