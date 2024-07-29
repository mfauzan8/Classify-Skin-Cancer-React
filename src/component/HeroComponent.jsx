import React from 'react';
import hero from '../assets/images/hero.jpg';

const HeroComponent = () => {
    return (
        <div className="mx-auto max-w-screen-xl pt-16">
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className="flex flex-col justify-center items-start">
                    <h1 className="xl:text-5xl lg:text-4xl text-3xl font-bold mb-4">
                        Protect Your <span className="text-primary-500">Skin</span>
                    </h1>
                    <p className="xl:text-2xl lg:text-xl text-lg font-semibold leading-relaxed tracking-wider">
                        Identify Symptoms Early and Stay Healthy
                    </p>
                </div>
                <div className="flex justify-center items-center ps-4">
                    <img src={hero} alt="deteksi" className="w-full h-auto object-cover" />
                </div>
            </div>
        </div>
    );
}

export default HeroComponent;
