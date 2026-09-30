import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('React Router rendering', () => {
  it('renders the current route through React DOM', () => {
    const markup = renderToStaticMarkup(
      React.createElement(
        MemoryRouter,
        { initialEntries: ['/'] },
        React.createElement(
          Routes,
          null,
          React.createElement(Route, {
            path: '/',
            element: React.createElement('main', null, 'Portfolio'),
          })
        )
      )
    );

    expect(markup).toContain('<main>Portfolio</main>');
  });
});