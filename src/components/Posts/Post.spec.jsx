import { render, screen } from '@testing-library/react';
import { Posts } from '.';

const props = {
  posts: [
    {
      id: 1,
      title: 'Teste 1',
      body: 'body 1',
      cover: 'img/imagem1.png',
    },
    {
      id: 2,
      title: 'Teste 2',
      body: 'body 2',
      cover: 'img/imagem2.png',
    },
    {
      id: 3,
      title: 'Teste 3',
      body: 'body 3',
      cover: 'img/imagem3.png',
    },
  ],
};

describe('<Posts />', () => {
  it('should render posts', () => {
    render(<Posts {...props} />);
    expect(screen.getAllByRole('heading', { name: /Teste/i })).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /Teste/i })).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);
    expect(screen.getByRole('img', { name: /Teste 3/i })).toHaveAttribute('src', 'img/imagem3.png');
  });

  it('should not render posts', () => {
    render(<Posts />);
    expect(screen.queryAllByRole('heading', { name: /Teste/i })).toHaveLength(0);
  });

  it('should match snapshot', () => {
    const { container } = render(<Posts {...props} />);
    expect(container).toMatchSnapshot();
  });
});
