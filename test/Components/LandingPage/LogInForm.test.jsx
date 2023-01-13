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
})