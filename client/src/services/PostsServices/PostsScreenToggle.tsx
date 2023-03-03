import React, { useState } from 'react'

export const ActiveToggle = () => {

    const [IsPageActive, setIsPageActive] = useState(false)
    const Toggle = () => setIsPageActive(!IsPageActive)

    return {
        IsPageActive,
        Toggle
    }
}
