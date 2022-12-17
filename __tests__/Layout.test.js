import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from '../src/components/layout/layout';

test('renders children correctly', () => {
  const { getByText } = render(
    <Layout>
      <div>Some Content</div>
    </Layout>,
  );

  expect(getByText('Some Content')).toBeInTheDocument();
});
