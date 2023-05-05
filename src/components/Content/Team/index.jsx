import React from 'react';

import leaderImg from './leader.jpg';
import {FiFacebook, FiLinkedin, FiGithub} from 'react-icons/fi'

export default class Team extends React.Component {

    render() {
        return (
            <section id="Team">
                <div className="container py-20">
                    <div className="mb-8">
                        <p className="text-3xl font-medium text-companyBlue-600 text-center">Team</p>
                    </div>
                    <div className="flex flex-wrap justify-center flex-row">
                        <div className="sm:w-1/2 px-4 lg:w-1/3 pt-2">
                            <div className="rounded border border-1 border-gray-300 text-center shadow-lg shadow-gray-400/30">
                                <img className="w-full rounded rounded-t block" alt="Katerina Aronson"
                                    src={leaderImg}/>
                            </div>
                        </div>
                        <div className="flex sm:w-1/2 px-4 lg:w-1/3 pt-2 grow">
                            <div className="grow flex flex-col px-10 items-center justify-center rounded border border-1 border-gray-300 shadow-lg shadow-gray-400/30">
                                <div className='flex flex-col items-right'>
                                    <h4 className="font-semibold mb-[5px]">Katerina Aronson</h4>
                                    <p className="mb-[20px]">Leader<br/></p>
                                    <h4 className="font-semibold mb-[5px]">Correspondence address</h4>
                                    <p className="mb-[20px]">Jacqueline House 322, 51 Fitzroy Road,<br/>London, England, NW1 8UA<br/></p>
                                    <div className="flex justify-start">
                                        <a className="m-2" href="/">
                                            <FiFacebook className="text-companyBlue text-lg"/>
                                        </a>
                                        <a className="m-2" href="/">
                                            <FiLinkedin className="text-companyBlue text-lg"/>
                                        </a>
                                        <a className="m-2" href="/">
                                            <FiGithub className="text-companyBlue text-lg"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}