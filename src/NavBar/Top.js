import React, { Component } from 'react'
import './style.css';

export default class Top extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link top-nav campus" href="#">Karachi Campus</a>
              </li>
              <li class="nav-item">
                <a class="nav-link top-nav" href="#">Financial Aid</a>
              </li>
              <li class="nav-item">
                <a class="nav-link top-nav" href="#">Fee Challan</a>
              </li>
              <li class="nav-item">
                <a class="nav-link top-nav" href="#">Result Gazette</a>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link top-nav faculty-portal" href="#">Faculty Portal</a>
              </li>
              <li class="nav-item">
                <a class="nav-link top-nav student-portal" href="#">Student Portal</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
