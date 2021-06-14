import { render, screen } from '@testing-library/react';

import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
  it('should render PosrCard correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', { name: /qui est esse 2/i })).toHaveAttribute(
      'src',
      'https://i.pinimg.com/originals/1e/06/e1/1e06e107f0ca520aed316957b685ef5c.jpg',
    );

    expect(screen.getByRole('heading', { name: /qui est esse 2/i })).toBeInTheDocument();

    expect(screen.getByText('@olore placeat quibusdam ea quo vitae magni quis enim qui')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
