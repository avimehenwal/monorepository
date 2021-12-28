import { render } from '@testing-library/react';

import BusinessLogic from './business-logic';

describe('BusinessLogic', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BusinessLogic />);
    expect(baseElement).toBeTruthy();
  });
});
