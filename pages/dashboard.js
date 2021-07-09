import Layout from '../layouts/_Layout'
import React, { useState, useEffect } from 'react'
import { ReadersBf2Dash } from '../layouts/components'
import { Spinner } from 'react-bootstrap'
import readers from '../../../../Vion/readers_web/readers'
import { ResizeableDiv } from '../layouts/components'

const allReaders = readers.tsrdReaders.concat(readers.tssmReaders);

function readersToData(array)
{
  const dataArray = []
  for ( let index in array )
    dataArray.push({name: array[index]})

  return dataArray;
}

const data = readersToData(allReaders);

export default function dashboard(){

    if(data.length === 0)return (
        <Layout active="dashboard">
            <div className="" >
                <Spinner animation="border" role="status" variant="dark"/>
            </div>
        </Layout>

      )

    // console.log(data);

    return (
        <Layout active="dashboard">
            <div className="h-100 w-100 py-2">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item text-white" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button">Readers BF2</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Map</button>
            </li>
            <li className="nav-item" >
                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Map 2</button>
            </li>
            </ul>
            <div className="tab-content h-100 w-100" id="myTabContent">
            <div className="tab-pane fade h-100 show active p-2" id="home" role="tabpanel" aria-labelledby="home-tab"><ReadersBf2Dash /></div>
            <div className="overflow-auto tab-pane fade h-100 w-100" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <img src="/map.svg"></img>
            </div>
            <div className="tab-pane fade h-100 w-100 p-3" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div className="border border-white w-75 mx-auto">
                    <img src="/map (1).svg"></img>
                </div>
            </div>
            </div>
            </div>
        </Layout>
    )
}




// const data = [
//     {
//       name: 'Page A',
//       pv: 2400,
//     },
//     {
//       name: 'Page B',
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: 'Page C',
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: 'Page D',
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: 'Page E',
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: 'Page F',
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: 'Page G',
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//     {
//         name: 'Page A',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//       },
//       {
//         name: 'Page B',
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//       },
//       {
//         name: 'Page C',
//         uv: 2000,
//         pv: 9800,
//         amt: 2290,
//       },
//       {
//         name: 'Page D',
//         uv: 2780,
//         pv: 3908,
//         amt: 2000,
//       },
//       {
//         name: 'Page E',
//         uv: 1890,
//         pv: 4800,
//         amt: 2181,
//       },
//       {
//         name: 'Page F',
//         uv: 2390,
//         pv: 3800,
//         amt: 2500,
//       },
//       {
//         name: 'Page G',
//         uv: 3490,
//         pv: 4300,
//         amt: 2100,
//       },
//   ];

