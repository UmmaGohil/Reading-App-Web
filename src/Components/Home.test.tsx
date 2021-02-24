import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Home from './Home';

let documentBody: RenderResult;describe('<Home />', () => {
  beforeEach(() => {
    documentBody = render(<Home />);
  });  it('shows pages to read each day!', () => {
    expect(documentBody.getByText('pages to read each day!')).toBeInTheDocument();
  });
});