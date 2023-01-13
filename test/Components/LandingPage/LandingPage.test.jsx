import { describe, it, afterEach, expect } from 'vitest'
import LandingPage from '@/components/LandingPage'
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

describe('#LandingPage', () => {
  afterEach(() => cleanup)

  it('should render correctly', () => {
    render(<LandingPage />)

    expect(screen.getByRole('heading').textContent).toBe("💀Cadaver Exquisito🍷")
  })

  it('should render a log in form', () => {
    render(<LandingPage />)

    const formElement = screen.getByLabelText('Log In Form')
    expect(formElement).toBeTruthy()
  })

  it('should show a validation message after the user enters their email', ()=>{
    render(<LandingPage />)

    const formElement = screen.getByLabelText('Log In Form')
    const inputElement = screen.getByPlaceholderText('Correo Electrónico')
    fireEvent.change(inputElement, {target: { value: 'joe@mail.com' }})
    fireEvent.submit(formElement)

    const validationMessage = screen.queryByLabelText('Validation message')

    expect(validationMessage).toBeTruthy()
  })
})