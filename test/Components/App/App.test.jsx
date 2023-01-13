import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import App from '@/components/App'

describe('#App', () => {
  afterEach(()=> cleanup())
  
  it('should render correctly', () => {
    render(<App />)

    const headingElement = screen.getByRole('heading', {name: "💀Cadaver Exquisito🍷"})
    expect(headingElement).toBeTruthy()
  })
})
