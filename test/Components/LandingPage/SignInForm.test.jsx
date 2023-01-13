import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import SignInForm from "@/components/LandingPage/SignInForm";

describe('#SignInForm', () => {
  afterEach(()=>cleanup)

  it('should be a function', () => {
    expect(SignInForm).toBeTypeOf('function')
  })

  it('should contain a form', () => {
    render(<SignInForm />)

    const formElement = screen.getByLabelText('Sign In Form')
    expect(formElement).toBeTruthy()
  })

  it('should contain an input for the user\s email', () => {
    render(<SignInForm />)

    const inputElement = screen.getByPlaceholderText('Correo Electrónico')
    expect(inputElement).toBeTruthy()
  })

  it('should contain a confirmation button', () => {
    render(<SignInForm />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeTruthy()
    expect(buttonElement.textContent).toBe('Entrar')
  })

  it('should show a with-password log in option with a button', () => {
    render(<SignInForm />)

    const withPasswordButton = screen.getByLabelText('with password')
    let passwordInput = screen.queryByPlaceholderText('Contraseña')

    expect(withPasswordButton).toBeTruthy()
    expect(passwordInput).not.toBeTruthy()

    fireEvent.click(withPasswordButton)

    passwordInput = screen.queryByPlaceholderText('Contraseña')
    expect(passwordInput).toBeTruthy()
  })

  it('should hide the with-password log in option', () => {
    render(<SignInForm />)

    const withPasswordButton = screen.getByLabelText('with password')
    let passwordInput = screen.queryByPlaceholderText('Contraseña')

    expect(withPasswordButton).toBeTruthy()
    expect(passwordInput).not.toBeTruthy()

    fireEvent.click(withPasswordButton)
    passwordInput = screen.queryByPlaceholderText('Contraseña')
    expect(passwordInput).toBeTruthy()

    fireEvent.click(withPasswordButton)
    passwordInput = screen.queryByPlaceholderText('Contraseña')
    expect(passwordInput).not.toBeTruthy()
  })

  it('should change the with-password option text', () => {
    render(<SignInForm />)

    const withPasswordButton = screen.getByLabelText('with password')
    expect(withPasswordButton.textContent).toBe('Ingresar con contraseña')

    fireEvent.click(withPasswordButton)

    expect(withPasswordButton.textContent).toBe('Ingresar con link mágico')
  })
})