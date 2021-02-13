import React, { useState, useEffect } from 'react'
import './App.css'
import Card from './card'
export default function Form() {
    const [user, setUser] = useState({})
    const [name, setName] = useState('')

    useEffect(() => {
        getGithubUsers()
    }, [])
    async function getGithubUsers() {
        const api = await fetch(`https://api.github.com/users/${name}`)
        const data = await api.json()
        setUser(data)
    }
    function handelSubmit(event) {
        event.preventDefault()
        getGithubUsers()
        setName('')
    }
    return (
        <div>
            <div className="container form">
                <Card data={user} />
                <form action="" onSubmit={handelSubmit}>
                    <input type="text" required placeholder="Enter username" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} /><br />
                    <button>Find User</button>
                </form>
            </div>
        </div>
    )
}