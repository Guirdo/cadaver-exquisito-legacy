import { describe, it, expect } from 'vitest';
import HomePage from '@/components/HomePage';
import { render, screen } from '@testing-library/react';

describe('#HomePage', () => {
  it('should be a function', () => {
    expect(HomePage).toBeTypeOf('function')
  })

  it('should render a button for creating a new room',()=> {
    render(<HomePage />)
    const createNewButton = screen.getByLabelText(/Create new room/i)
    expect(createNewButton).toBeTruthy()
  })
})