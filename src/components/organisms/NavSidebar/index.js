import React from 'react'
import './index.scss'

export default function NavSidebar() {

    return (
        <div className="nav-sidebar">
            <div className="nav-sidebar__top">
                <div className="nav-sidebar__link nav-sidebar__link--active">
                    <img className="nav-sidebar__link__icon" src="/assets/images/icons/home.svg"/>
                    <span>Dashboard</span>
                </div>
                <div className="nav-sidebar__link">
                    <img className="nav-sidebar__link__icon" src="/assets/images/icons/search.svg"/>
                    <span>Recherche</span>
                </div>
                <div className="nav-sidebar__link">
                    <img className="nav-sidebar__link__icon" src="/assets/images/icons/activity.svg"/>
                    <span>Rapports</span>
                </div>
                <div className="nav-sidebar__link">
                    <img className="nav-sidebar__link__icon" src="/assets/images/icons/more-circle.svg"/>
                    <span>Ajouter</span>
                </div>
            </div>
            <div className="nav-sidebar__bottom">
                <div className="nav-sidebar__link">
                    <img className="nav-sidebar__link__icon" src="/assets/images/icons/settings.svg"/>
                    <span>Réglages</span>
                </div>
            </div>
        </div>
    )
}
