import "./styles.css";
import { Component } from "react";

class HomeSetState extends Component {
  state = {
    contador: 0
  };

  handleClick = () => {
    this.setState(
      (prevState, prevProps) => {
        return { contador: prevState.contador + 1 };
      },
      () => {
        console.log(this.state.contador);
      }
    );
  };

  render() {
    return (
      <section className="container">
        {this.state.contador}
        <div className="button-container">
          <button onClick={this.handleClick}>CONTADOR</button>
        </div>
      </section>
    );
  }
}

export default HomeSetState;
