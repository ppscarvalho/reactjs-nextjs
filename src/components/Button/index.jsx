import P from 'prop-types';

import './styles.css';

import { Component } from 'react';

export class Button extends Component {
  render() {
    const { text, onClick, disabled = false } = this.props;

    return (
      <button className="button" onClick={onClick} disabled={disabled}>
        {text}
      </button>
    );
  }
}

Button.defalutProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
