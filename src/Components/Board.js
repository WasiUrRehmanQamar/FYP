import React, { Component } from 'react'
import './styleboard.css'

export default class Board extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row d-flex align-items-center'>
                    <div className='col-sm-3 notice'>
                        <i class="fa-solid fa-circle-exclamation"></i>
                        <h6>
                            Notice Board
                        </h6>
                    </div>
                    <div className='col-sm-3 upcoming'>
                        <i class="fa-solid fa-calendar-days"></i>
                        <h6>
                            Upcoming Events
                        </h6>
                    </div>
                    <div className='col-sm-3 academic'>
                        <i class="fa-solid fa-file"></i>
                        <h6>
                            Academic Calender
                        </h6>
                    </div>
                    <div className='col-sm-3 career'>
                        <i class="fa-solid fa-graduation-cap"></i>
                        <h6>
                            Careers
                        </h6>
                    </div>
                </div>
            </div>
        )
    }
}
