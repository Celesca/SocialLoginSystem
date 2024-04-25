"use client";
import React from 'react'

const LoginButton = () => {

    const handleLogin = () => {
        // POST method to localhost:8000/
        fetch("localhost:8000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        })
    }
  return (
    <button onClick={handleLogin}>Login with Google Account</button>
  )
}

export default LoginButton