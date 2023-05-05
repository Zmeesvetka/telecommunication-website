import React from 'react';

import { GiAbstract070, GiAbstract116, GiBoltShield, GiBoltSpellCast } from "react-icons/gi";

import ProjectBlock from './ProjectBlock';

export default class ProjectList extends React.Component {
    projects = [
        {
            icon: GiAbstract070,
            direction: 'Lorem',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            icon: GiAbstract116,
            direction: 'Ipsum dolor',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            icon: GiBoltShield,
            direction: 'Sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            icon: GiBoltSpellCast,
            direction: 'Consectetur',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ];

    render() {
        return (
            <section id="Projects" className="px-2 clean-block features">
                <div className="container py-20">
                    <div className="mb-8">
                        <p className="text-3xl font-medium text-companyBlue-600 text-center">Projects</p>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        {
                            this.projects.map((project, index) => <ProjectBlock entity={project} key={index}/>)
                        }
                    </div>
                </div>
            </section>
        );
    }
}