import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import App from '@/components/App'
import { MemoryRouter } from 'react-router-dom'

describe('#App', () => {
  afterEach(()=> cleanup())

  it('should navigate to the landing page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText(/Registrate para jugar/i)).toBeTruthy()
  })

  it('should navigate to the home page', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <App />
      </MemoryRouter>
    )

    const createNewButton = screen.getByLabelText(/Create new room/i)
    expect(createNewButton).toBeTruthy()
  })
})
