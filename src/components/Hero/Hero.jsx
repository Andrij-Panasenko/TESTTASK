import React from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle.jsx';
import { PrimaryButton } from '../Buttons/PrimaryButton.jsx';
import '../../css/_variables.scss';
import '../../css/hero/hero-mobile.scss';
import '../../css/hero/hero-tablet.scss';

export const Hero = () => {
    return (
        <section className="hero-section hero-bg">
            <div className="container">
                <SectionTitle
                    className="hero-title"
                    title="Test assignment for front-end developer"
                    tag="h1"
                />
                <p className="hero-descr">
                    What defines a good front-end developer is one that has
                    skilled knowledge of HTML, CSS, JS with a vast understanding
                    of User design thinking as they'll be building web
                    interfaces with accessibility in mind. They should also be
                    excited to learn, as the world of Front-End Development
                    keeps evolving
                </p>
                <div className="hero-button-wrapp">
                    <PrimaryButton type="button" name="Sign up" />
                </div>
            </div>
        </section>
    );
};
