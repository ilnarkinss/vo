import React from 'react'
import s from './Card.module.sass'
import photo from '../../Media/Employeephoto/photo.jpg'

export default function Card() {
  const employeecard = document.querySelector('#employeecard')
  
  


  return (
    <div id='employeecard' className={s.employeecard}>
      <img src={photo} alt="" />
      <div id='employeeinfo' className={s.employeeinfo}>
        <h3>Иван Иванов</h3>
        <p>Инженер, оператор Бьютишот</p>
      </div>
    </div>
  )
}
