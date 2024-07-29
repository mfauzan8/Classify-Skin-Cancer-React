import React from 'react';

const AboutComponent = () => {
    return (
        <section className="py-12 bg-primary-700 rounded-3xl">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        About CSC Now
                    </h2>
                    <p className="mt-8 text-lg text-white">
                        Our application is used to classify the type of skin cancer in the uploaded image by applying the <span className='font-extrabold'>YOLO v8</span> (You Only Look Once) Algorithm. This application also provides a way to prevent and treat the type of cancer detected.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutComponent;
