import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.';

describe('<TextInput>', () => {
  it('should have a value inputValue', () => {
    const fn = jest.fn();
    render(<TextInput actionFn={fn} inputValue={'testando'} />);

    const input = screen.getByPlaceholderText(/Type your search/i);
    expect(input.value).toBe('testando');
  });

  it('should call inputValue function on each key pressend', () => {
    const fn = jest.fn();
    render(<TextInput actionFn={fn} inputValue="um valor qualquer" />);
    const input = screen.getByPlaceholderText(/Type your search/i);
    const value = 'te fode porra';

    userEvent.type(input, value);
    expect(input.value).toBe('um valor qualquer');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snaposhopt', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput actionFn={fn} inputValue="" />);
    expect(container).toMatchSnapshot();
  });
});
