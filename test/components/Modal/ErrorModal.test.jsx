import { describe, expect, it } from "vitest";
import ErrorModal from "@/components/Modal/ErrorModal";

describe('#ErrorModal', () => {
  it('should be a function', () => {
    expect(ErrorModal).toBeTypeOf('function')
  })
})