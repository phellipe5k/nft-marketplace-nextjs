import { render, screen } from '@testing-library/react';

import NftRow from '.';

describe('<NftRow />', () => {
  const { container } = render(<NftRow />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /NftRow/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
