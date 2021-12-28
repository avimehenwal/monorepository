import { render } from '@testing-library/react';

import External from './index';

describe('External', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<External />);
    expect(baseElement).toBeTruthy();
  });
});
