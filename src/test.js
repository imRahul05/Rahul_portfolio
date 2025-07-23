import React from 'react';
import { createRoot } from 'react-dom/client';

// Simple test component
function TestComponent() {
  return <div>Test Component is working!</div>;
}

// Create a container and render the test component
const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(<TestComponent />);

console.log('Test component rendered successfully!');
