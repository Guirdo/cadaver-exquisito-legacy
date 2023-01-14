import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import SignUpForm from "@/components/LandingPage/SignUpForm";

describe('#SignUpForm', () => {
  afterEach(() => cleanup())

  it('should be a function', () => {
    expect(SignUpForm).toBeTypeOf('function')
  })

  it('should contain a form', () => {
    render(<SignUpForm />)

    const formElement = screen.getByLabelText('Sign Up Form')
    expect(formElement).toBeTruthy()
  })

  it('should contain an input for the user\s email', () => {
    render(<SignUpForm />)

    const inputElement = screen.getByPlaceholderText('Correo Electrónico')
    expect(inputElement).toBeTruthy()
  })

  it('should contain a confirmation button', () => {
    render(<SignUpForm />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeTruthy()
    expect(buttonElement.textContent).toBe('Entrar')
  })

  it('should show a with-password sign up option with a button', () => {
    render(<SignUpForm />)

    const withPasswordButton = screen.getByLabelText('with password')
    let passwordInput = screen.queryByPlaceholderText('Contraseña')
    let confirmPasswordInput = screen.queryByPlaceholderText('Confirmar')

    expect(withPasswordButton).toBeTruthy()
    expect(passwordInput).not.toBeTruthy()
    expect(confirmPasswordInput).not.toBeTruthy()

    fireEvent.click(withPasswordButton)

    passwordInput = screen.queryByPlaceholderText('Contraseña')
    confirmPasswordInput = screen.queryByPlaceholderText('Confirmar')
    expect(passwordInput).toBeTruthy()
    expect(confirmPasswordInput).toBeTruthy()
  })

  it('should change the with-password option text', () => {
    render(<SignUpForm />)

    const withPasswordButton = screen.getByLabelText('with password')
    expect(withPasswordButton.textContent).toBe('Ingresar con contraseña')

    fireEvent.click(withPasswordButton)

    expect(withPasswordButton.textContent).toBe('Ingresar con link mágico')
  })
})