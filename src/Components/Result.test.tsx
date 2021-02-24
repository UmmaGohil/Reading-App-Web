import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Result from './Result';

let documentBody: RenderResult;describe('<Result />', () => {
  beforeEach(() => {
    documentBody = render(<Result />);
  });  it('shows pages to read each day!', () => {
    expect(documentBody.getByText('pages to read each day!')).toBeInTheDocument();
  });
});