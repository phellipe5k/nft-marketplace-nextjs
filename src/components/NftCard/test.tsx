import { render, screen } from '@testing-library/react';

import NftCard from '.';

describe('<NftCard />', () => {
  const { container } = render(<NftCard />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /NftCard/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
