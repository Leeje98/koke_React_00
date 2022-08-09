import React from 'react'
import all_rostery from '../components/All_Rostery_list'
// import RosteryDetail from './RosteryDetail.css'
import { Routes, Route, Link, useNavigate, Navigate, useHistory, useParams } from 'react-router-dom';


export default function RosteryDetail() {
  return (
    <>

      <div className="nav">
      </div>
       <section>
            
       {
        all_rostery.map((value, i) => {
          // if (value.id == all_rostery.id) {
          return (
            <>
            <div className="imgbox"><img src={`../public/imags/poto_img/${value.cafe_poto_01}`} width='280px' alt="" /></div>
            <div className="imgbox"><img src={`../public/imags/poto_img/${value.cafe_poto_02}`} alt="" /></div>
            <div className="imgbox"><img src={`../public/imags/poto_img/${value.cafe_poto_03}`} alt="" /></div>
            <div className="imgbox"><img src={`./imags/${value.logoImg}`} alt="" /></div>
            <div><p>{value.about}</p></div>
            <img src="../public/imags/poto_img/poto_1_1.jpg" alt="" width='280px' />
            </>
          )
        // }
        })
       }

        </section>
    </>
  )
}
