import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import LogInForm from "@/components/LandingPage/LogInForm";

describe('#LogInForm', () => {
  afterEach(()=>cleanup)

  it('should be a function', () => {
    expect(LogInForm).toBeTypeOf('function')
  })

  it('should contain a form', () => {
    render(<LogInForm />)

    const formElement = screen.getByLabelText('Log In Form')
    expect(formElement).toBeTruthy()
  })

  it('should contain an input for the user\s email', () => {
    render(<LogInForm />)

    const inputElement = screen.getByPlaceholderText('Correo Electrónico')
    expect(inputElement).toBeTruthy()
  })

  it('should contain a confirmation button', () => {
    render(<LogInForm />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeTruthy()
    expect(buttonElement.textContent).toBe('Entrar')
  })

  it('should show a with-password log in option with a button', () => {
    render(<LogInForm />)

    const withPasswordButton = screen.getByLabelText('with password')
    let passwordInput = screen.queryByPlaceholderText('Contraseña')

    expect(withPasswordButton).toBeTruthy()
    expect(passwordInput).not.toBeTruthy()

    fireEvent.click(withPasswordButton)

    passwordInput = screen.queryByPlaceholderText('Contraseña')
    expect(passwordInput).toBeTruthy()
  })

  it('should hide the with-password log in option', () => {
    render(<LogInForm />)

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
})