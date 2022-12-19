import React, { Component } from 'react'
import './style.css';

export default class Footer extends Component {
    render() {
        return (
            <div class="container-fluid">
                <footer>
                    <div class="row top-bottom"> 
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <h5>Faculty & Staff</h5>
                            <div class="minus"></div>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">NTU Webmail</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Update Profile</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Faculty & Staff Handbook</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Faculty Publications</a></li>
                            </ul>
                        </div>

                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <h5>Students</h5>
                            <div class="minus"></div>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Academic Calendar</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Class Time Table</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Exam Date Sheet</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Semester Results</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Teacher Evaluation</a></li>
                            </ul>
                        </div>

                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <h5>Quick Links</h5>
                            <div class="minus"></div>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Notice Board</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Tenders</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Upcoming Events</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Downloads</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Careers</a></li>
                            </ul>
                        </div>

                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <h5>Conferences / Innovation Centres</h5>
                            <div class="minus"></div>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">ICPC 2021</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Covitex 2021</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Dice Textile 2019</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">International Conference on Technical Textiles 2017</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Conference on Emerging Trends in Knitting (ETK-2018)</a></li>
                            </ul>
                        </div>

                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 bottom">
                        <p>Copyright © 2022 - National Textile University - All Rights Reserved</p>
                        <ul class="list-unstyled d-flex">
                            <a class="link-dark" href="#"><i class="ms-3 fa-brands fa-facebook-f"></i></a>
                            <a class="link-dark" href="#"><i class="ms-3 fa-brands fa-twitter"></i></a>
                            <a class="link-dark" href="#"><i class="ms-3 fa-brands fa-instagram"></i></a>
                            <a class="link-dark" href="#"><i class="ms-3 fa-brands fa-linkedin-in"></i></a>
                            <a class="link-dark" href="#"><i class="ms-3 fa-brands fa-youtube"></i></a>
                        </ul>
                    </div>
                </footer>
            </div>
        )
    }
}
