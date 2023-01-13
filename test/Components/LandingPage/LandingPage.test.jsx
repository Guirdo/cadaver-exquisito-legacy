import { describe, it, afterEach, expect } from 'vitest'
import LandingPage from '@/components/LandingPage'
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

describe('#LandingPage', () => {
  afterEach(() => cleanup)

  it('should render correctly', () => {
    render(<LandingPage />)

    const headingElement = screen.getByRole('heading',{name: "💀Cadaver Exquisito🍷"})

    expect(headingElement.textContent).toBeTruthy()
  })

  it('should render a log in form', () => {
    render(<LandingPage />)

    const formElement = screen.getByLabelText('Sign Up Form')
    expect(formElement).toBeTruthy()
  })

  it('should show a validation message after the user enters their email', ()=>{
    render(<LandingPage />)

    const formElement = screen.getByLabelText('Sign Up Form')
    const inputElement = screen.getByPlaceholderText('Correo Electrónico')
    fireEvent.change(inputElement, {target: { value: 'joe@mail.com' }})
    fireEvent.submit(formElement)

    const validationMessage = screen.queryByLabelText('Validation message')

    expect(validationMessage).toBeTruthy()
  })

  it('should show a validation message after the user enters their email and password', ()=>{
    render(<LandingPage />)

    const formElement = screen.getByLabelText('Sign Up Form')
    const emailElement = screen.getByPlaceholderText('Correo Electrónico')
    const withPasswordButton = screen.getByLabelText('with password')

    fireEvent.click(withPasswordButton)

    const passwordElement = screen.getByLabelText('Password')
    const confirmPasswordElement = screen.getByLabelText('Confirm password')

    fireEvent.change(emailElement, {target: { value: 'joe@mail.com' }})
    fireEvent.change(passwordElement, {target: { value: '#Bc43fghY' }})
    fireEvent.change(confirmPasswordElement, {target: { value: '#Bc43fghY' }})
    fireEvent.submit(formElement)

    const validationMessage = screen.queryByLabelText('Validation message')
    expect(validationMessage).toBeTruthy()
  })

  it('should display the Sign In form when the user click the signing option', () => {
    render(<LandingPage />)

    const signingButton = screen.getByLabelText('signing option')
    fireEvent.click(signingButton)

    const signInForm = screen.getByLabelText('Sign In Form')
    expect(signInForm).toBeTruthy()
  })

  it('should hide the Sign In form when the user click the signing option', () => {
    render(<LandingPage />)

    const signingButton = screen.getByLabelText('signing option')
    fireEvent.click(signingButton)

    let signInForm = screen.getByLabelText('Sign In Form')
    expect(signInForm).toBeTruthy()

    fireEvent.click(signingButton)

    signInForm = screen.queryByLabelText('Sign In Form')
    expect(signInForm).not.toBeTruthy()
  })
})