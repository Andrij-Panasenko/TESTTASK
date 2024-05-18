import React from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle.jsx';
import { PrimaryButton } from '../Buttons/PrimaryButton.jsx';
import '../../css/_variables.scss';
import '../../css/hero/hero-mobile.scss';
import '../../css/hero/hero-tablet.scss';

import heroBg from '../../assets/hero-bg.jpeg';

export const Hero = () => {
    return (
        <section
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})`,
            }}
            className="hero-section"
        >
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
