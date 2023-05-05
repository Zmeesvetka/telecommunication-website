import React from 'react';

import aboutImg from './base-about.jpg';


export default class About extends React.Component {
    render() {
        return (
            <section id="About" className="bg-companyBlue-100">
                <div className="container py-20">
                    <div className="mb-8">
                        <p className="text-3xl font-medium text-companyBlue-600 text-center">About Us</p>
                    </div>
                    <div className="flex flex-wrap items-center">
                        <div className="md:flex-1 md:mr-3">
                            <img src={aboutImg}
                                 className="max-w-full h-auto border border-1 shadow-lg shadow-gray-400/30 rounded"
                                 alt="About Us"/>
                        </div>
                        <div className="md:flex-1 md:ml-3">
                            <p className="md:text-left text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
