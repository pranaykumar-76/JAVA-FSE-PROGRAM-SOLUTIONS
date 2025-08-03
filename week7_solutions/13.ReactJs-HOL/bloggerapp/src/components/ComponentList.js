import React from 'react';

/**
 * Renders a list of components passed as items.
 * @param {{ id: number, component: JSX.Element }[]} items
 */
export default function ComponentList({ items }) {
  return (
    <div>
      {items.map(({ id, component }) => (
        <div key={id} style={{ margin: '1rem 0' }}>
          {component}
        </div>
      ))}
    </div>
  );
}
