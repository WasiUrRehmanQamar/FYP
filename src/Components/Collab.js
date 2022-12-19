import React, { Component } from 'react'
import './stylecollab.css';

export default class Collab extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row d-flex align-items-center collab-center'>
                    <div className='col-sm-2'>
                        <img src='https://ntu.edu.pk/assets/img/external/pakistan_citizen_portal.png' alt='Citizen Portal' />
                    </div>
                    <div className='col-sm-2'>
                        <img src='https://ntu.edu.pk/assets/img/external/ehsas_logo.png' alt='Ehsas' />
                    </div>
                    <div className='col-sm-2'>
                        <img src='https://ntu.edu.pk/assets/img/external/Nest.png' alt='NEST' />
                    </div>
                    <div className='col-sm-2'>
                        <img src='https://ntu.edu.pk/assets/img/external/PEEF.png' alt='PEEF' />
                    </div>
                    <div className='col-sm-4'>
                        <img src='https://ntu.edu.pk/assets/img/external/cpec_logo.png' alt='CPEC' />
                    </div>
                </div>
            </div>
        )
    }
}
