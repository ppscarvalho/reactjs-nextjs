import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './index';

describe('<Button>', () => {
  it('should render the button with the test "load more"', () => {
    const fn = jest.fn();
    render(<Button text="load more" onClick={fn} />);

    expect.assertions(1);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="load more" onClick={fn} disabled={true} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });

  it('should be disabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="load more" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="load more" disabled={false} onClick={fn} />);
    expect(container).toMatchSnapshot();
  });
});
