import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from "./App";

describe("Testing Application", () =>
  test("Revisa si la palabra 'Vite' Existe en Application page", () => {
    render(<App />)
    expect(screen.getAllByText(/Vite/i)).toBeDefined()
  })
)