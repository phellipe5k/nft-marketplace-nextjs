import { render, screen } from '@testing-library/react';

import HomeTemplate from '.';

describe('<HomeTemplate />', () => {
  const { container } = render(<HomeTemplate />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /HomeTemplate/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
