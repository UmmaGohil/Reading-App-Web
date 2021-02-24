import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Calendar from './Calendar';

let documentBody: RenderResult;describe('<Calendar />', () => {
  beforeEach(() => {
    documentBody = render(<Calendar />);
  });  it('shows pages to read each day!', () => {
    expect(documentBody.getByText('pages to read each day!')).toBeInTheDocument();
  });
});