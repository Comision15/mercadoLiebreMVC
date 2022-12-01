import React from 'react'

export const SideBar = () => {
  return (
    <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

    <a className="sidebar-brand " href="/">
        <div className="sidebar-brand-icon">
            <img className="w-100" src="/images/logo-mercado-liebre.svg" alt="Mercado Liebre"/>
        </div>
    </a>

    
    <hr className="sidebar-divider my-0"/>

    
    <li className="nav-item active">
        <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>DASHBOARD</span></a>
    </li>

    
    <hr className="sidebar-divider"/>

    
    <div className="sidebar-heading">NAVEGACIÓN</div>

    
    <li className="nav-item">
        <a className="nav-link collapsed" href="/">
            <i className="fas fa-fw fa-folder"></i>
            <span>Productos</span>
        </a>
    </li>

    
    <li className="nav-item">
        <a className="nav-link" href="/">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Usuarios</span></a>
    </li>

    
    <li className="nav-item">
        <a className="nav-link" href="/">
            <i className="fas fa-fw fa-table"></i>
            <span>Categorias</span></a>
    </li>

    
    <hr className="sidebar-divider d-none d-md-block"/>
</ul>
  )
}
