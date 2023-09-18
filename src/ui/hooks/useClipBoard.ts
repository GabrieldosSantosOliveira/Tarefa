import { useContext } from "react"

import { ClipBoardContext } from "../context/ClipBoardContext"
import { WithoutProviderError } from "../errors/WithoutProviderError"

export const useClipBoard = () => {
  const value = useContext(ClipBoardContext)
  if (Object.keys(value).length === 0) {
    throw new WithoutProviderError("useClipBoard must be used within an ClipBoardProvider")
  }
  return value
}
