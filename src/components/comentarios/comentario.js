import React, {Component} from 'react';

class Comentario extends Component { 

  render(){    
    return ( 
      <div>
        {this.props.texto}
      </div>
    ); 
  } 
}

export default Comentario;
