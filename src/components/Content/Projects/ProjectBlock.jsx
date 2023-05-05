import React from 'react';
import PropType from 'prop-types'

export default class ProjectBlock extends React.Component {
    static propTypes = {
        entity: PropType.shape({
            icon: PropType.func.isRequired,
            direction: PropType.string.isRequired,
            description: PropType.string.isRequired
        }).isRequired,
    };

    render() {
        return (
            <div className="flex flex-row md:w-2/5 px-4 pt-5 feature-box">
                <div>
                    <this.props.entity.icon className="text-companyBlue box-border h-10 w-10 pr-4"/>
                </div>
                <div className="grow">
                    <h4 className="font-bold text-xl py-2">{this.props.entity.direction}</h4>
                    <p className="text-sm text-botBottomBlack">{this.props.entity.description}<br/></p>
                </div>
            </div>
        );
    }
}
