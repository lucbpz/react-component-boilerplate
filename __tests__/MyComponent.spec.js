import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import MyComponent from '../src/MyComponent';

test('loads and displays greeting', async () => {
    const name = 'Lucas';
    const { container, getByText } = render(<MyComponent name={name} />)

    const greetingNode = await waitForElement(() => getByText('Hello Lucas'))

    expect(greetingNode).toBeInTheDocument();
    expect(container.firstChild).toMatchInlineSnapshot(`
        <div>
          Hello 
          Lucas
        </div>
    `);
});