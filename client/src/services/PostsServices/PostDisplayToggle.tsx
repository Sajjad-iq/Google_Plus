import React, { useState } from 'react'

export const PostDisplayToggle = () => {

    const [IsPostsActive, setIsPostsActive] = useState(true)
    const ActivePostsToggle = () => setIsPostsActive(!IsPostsActive)

    return {
        ActivePostsToggle,
        IsPostsActive
    }
}
