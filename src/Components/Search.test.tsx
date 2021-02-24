import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Search from './Search';

let documentBody: RenderResult;describe('<Search />', () => {
  beforeEach(() => {
    documentBody = render(<Search onChange={}/>);
  });  it('shows pages to read each day!', () => {
    expect(documentBody.getByText('pages to read each day!')).toBeInTheDocument();
  });
});