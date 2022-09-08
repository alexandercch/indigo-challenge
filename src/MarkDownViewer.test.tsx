import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MarkDownViewer from './MarkDownViewer';

test('render markdown elements', () => {
  const testContent = '# one\n## two\n--- line';
  render(<MarkDownViewer content={testContent} />);
  const elementH1 = screen.getByText('one');
  expect(elementH1.tagName).toBe('H1');

  const elementH2 = screen.getByText('two');
  expect(elementH2.tagName).toBe('H2');

  // ... more tests
});
