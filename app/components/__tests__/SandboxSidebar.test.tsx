import { render } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, test } from 'vitest';
import { SandboxSidebar } from '../SandboxSidebar';
import type { SandboxSidebarProps } from '../SandboxSidebar';

describe('SandboxSidebar Component', () => {
  let component: RenderResult;
  let props: SandboxSidebarProps;

  beforeEach(() => {
    props = {};

    component = render(
      <MemoryRouter>
        <SandboxSidebar {...props} />
      </MemoryRouter>,
    );
  });

  test('should render', () => {
    expect(component.baseElement).toMatchSnapshot();
  });
});
