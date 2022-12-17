import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeatureCard from '../src/components/featureCard/featureCard';

test('Render FeatureCard component', () => {
  const feature = {
    id: 1,
    title: 'Multilingual',
    icon: 'multi.svg',
    discription: 'Be accessible. The applicationis supported in multiple languages',
  };

  const { getByText } = render(<FeatureCard feature={feature} />);

  expect(getByText('Multilingual')).toBeInTheDocument();
  expect(getByText('Be accessible. The applicationis supported in multiple languages')).toBeInTheDocument();
});
