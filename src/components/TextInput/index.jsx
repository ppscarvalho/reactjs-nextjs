import P from 'prop-types';
import './styles.css';

export const TextInput = ({ actionFn, inputValue }) => {
  return (
    <input className="text-input" type="search" onChange={actionFn} value={inputValue} placeholder="Type your search" />
  );
};

TextInput.propTypes = {
  actionFn: P.func.isRequired,
  inputValue: P.string.isRequired,
};
