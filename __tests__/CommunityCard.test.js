import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CommunityCard from '../src/components/communityCard/communityCard';

test('Render CommunityCard component', () => {
  const community = {
    title: 'community card num1',
    icon: '/public/icon.png',
    discription: 'Here is the discription',
    features: ['Feature num1', 'Feature num2', 'Feature num3'],
  };

  const { getByText } = render(<CommunityCard community={community} />);

  expect(getByText('community card num1')).toBeInTheDocument();
  expect(getByText('Here is the discription')).toBeInTheDocument();
  expect(getByText('Feature num1')).toBeInTheDocument();
  expect(getByText('Feature num2')).toBeInTheDocument();
  expect(getByText('Feature num3')).toBeInTheDocument();
});
