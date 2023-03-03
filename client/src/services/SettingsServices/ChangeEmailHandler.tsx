import React, { ChangeEvent, useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'

export const ChangeEmailHandler = (setIsActive: any) => {
  const { setUser } = useContext(GlobalContext)

  const [IsEmailValid, setIsEmailValid] = useState(true)
  const [EmailInputValue, setEmailInputValue] = useState("")

  const OnEmailChange = (e: ChangeEvent<HTMLInputElement>) => {

    let Regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const Valid = Regex.test(e.target.value)
    setIsEmailValid(Valid)
    setEmailInputValue(e.target.value)
  }

  const onSave = async () => {
    let User = await JSON.parse(localStorage.getItem('User') || "");

    if (IsEmailValid) {
      if (EmailInputValue !== "") {
        User.Email = EmailInputValue
        localStorage.setItem('User', JSON.stringify(User) || "");
        setIsActive(false)
      }
    } else {
      setIsEmailValid(false)
    }
  }

  return { OnEmailChange, IsEmailValid, onSave }
}
