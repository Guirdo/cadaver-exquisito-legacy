import { describe, it,expect } from 'vitest'
import CreateNickname from '@/components/HomePage/CreateNickname'
import { render, screen } from '@testing-library/react'

describe('#CreateNickname', () => {
  it('should be a function', () => {
    expect(CreateNickname).toBeTypeOf('function')
  })

  it('should contain a nickname input', () => {
    render(<CreateNickname />)

    const nicknameInput = screen.getByLabelText(/Nickname/i)

    expect(nicknameInput).toBeTruthy()
  })
})