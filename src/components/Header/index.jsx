import React from 'react';

import {Disclosure} from '@headlessui/react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


export default class Header extends React.Component {
    navigation = [
        {name: 'About Us', href: '#About'},
        {name: 'Projects', href: '#Projects'},
        {name: 'Team', href: '#Team'},
        {name: 'Contact Us', href: '#Contact'}
    ];

    render() {
        return (
            <Disclosure as="header" className="fixed h-15 w-full bg-white shadow-lg shadow-gray-400/30 z-50">
                {({open}) => (
                    <>
                        <div className="container h-full flex justify-between items-center">
                            <div className="text-2xl">
                                <a href="/">TELECOMMUNICATION LTD</a>
                            </div>
                            <div className="flex items-center md:hidden">
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-companyBlue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <AiOutlineClose className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <AiOutlineMenu className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="hidden md:block">
                                <div className="flex text-sm font-medium uppercase text-gray-500">
                                    {this.navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="mx-5 p-1 hover:text-gray-800 rounded"
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="bg-white md:hidden shadow-lg shadow-gray-400/30">
                            <div className="container px-2 pt-2 pb-3 space-y-1 text-sm font-medium uppercase text-gray-500">
                                {this.navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className="hover:bg-companyBlue-100 block px-3 py-2 rounded-md text-base"

                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        )
    }
}
