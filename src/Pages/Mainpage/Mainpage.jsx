import React from 'react'
import Card from '../../UI/Card/Card'
import s from './Mainpage.module.sass'
// import videoVO from '../../Media/VO_EFC.mp4'

export default function Mainpage() {
  return (
    <div className={s.container}>
        {/* <video className={s.videoblock}  autoPlay loop muted>
            <source src={videoVO} type='video/mp4' />
        </video> */}
        <h1>ВМЕСТЕ ОНЛАЙН</h1> 
        <p>ОРГАНИЗАЦИЯ СЪЕМОК, СПОРТИВНЫХ СОРЕВНОВАНИЙ, ПРЕЗЕНТАЦИЙ И ВЫСТУПЛЕНИЙ В ПРЯМОМ ЭФИРЕ.</p>   
        
        <div className={s.projectscontainer}>
          <h2>НАШИ ПРОЕКТЫ</h2>

        </div>
        <div className={s.teamscontainer}>
          <h2>НАША КОМАНДА</h2>
          <div className={s.teamscards}>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
    </div>
  )
}
