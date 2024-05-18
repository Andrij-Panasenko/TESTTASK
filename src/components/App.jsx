import React from 'react';
import { Header } from './header/Header.jsx';
import { Hero } from './Hero/Hero.jsx';
import { Users } from './Users/Users.jsx';
import { SighUpForm } from './SignUpForm/SighUpForm.jsx';

export default function App() {
    return (
        <>
            <Header />
            <Hero />
            <Users />
            <SighUpForm />
        </>
    );
}
