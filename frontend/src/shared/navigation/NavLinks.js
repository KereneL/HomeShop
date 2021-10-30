import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import { FaShoppingCart } from 'react-icons/fa';

// import css

const NavLinks = props => {

    const [isUser, setIsUser] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setIsUser(true)
        }
    }, [])


    function logout() {
        localStorage.setItem('token', '')
        setIsUser(false)
    }

    return (
        <Nav>
            <Nav.Item>
                <Nav.Link href="/shop">Shop</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/cart">Cart <FaShoppingCart /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/user">User</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/admin">Admin</Nav.Link>
            </Nav.Item>

            {!isUser && <>
                <Nav.Item>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                </Nav.Item></>
            }
            {isUser && <Nav.Item>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
            </Nav.Item>}

        </Nav >
    )
}

export default NavLinks