import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link,} from 'react-router-dom'
import s from "./Header.module.sass"
import Mainpage from '../Pages/Mainpage'
import Translation from '../Pages/Translation/Translation'
import Eventspage from '../Pages/Eventspage'
// import News from '../Pages/News'
import About from '../Pages/About'

export default function Header() {
  return (
      <Router>
        <div className={s.navigation}>
          <div className={s.menu}>
            <div className={s.logo}>
              <img src="/media/logo.jpg" alt="" />
            </div>
            <ul>
              <Link className={s.menubutton} to="/">Главная</Link>
              <Link className={s.menubutton} to="/translation">Трансляции</Link>
              <Link className={s.menubutton} to="/events">Мероприятия</Link>
              {/* <Link className={s.menubutton} to="/news">Новости</Link> */}
              <Link className={s.menubutton} to="/aboutus">О нас</Link>
            </ul>
          </div>
        </div>
        <div className={s.mainbackground}>
          <div className={s.maincontent}>
            <Routes>
                <Route exact path="/" element={<Mainpage/>}/>
                <Route exact path="/translation" element={<Translation/>}/>
                <Route exact path="/events" element={<Eventspage/>}/>
                {/* <Route exact path="/news" element={<News/>}/> */}
                <Route exact path="/aboutus" element={<About/>}/>
            </Routes>
          </div>
        </div>
      </Router>
  )
}


