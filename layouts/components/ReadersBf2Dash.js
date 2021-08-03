import React, { useEffect, useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function CustomToolTip(){

        return (
            <div className="bg-dark p-5">
                <img src="/g6956.svg"></img>
            </div>
        )

}

export default function ReadersBf2Dash() {
    const [ currData, setCurrData ] = useState([1001, 1002, 1003, 1004, 1005, 1010].map(e=> ({ name: e })));


    // const [data, setData] = useState([])
    // useEffect(()=> fetch('/api/data/readers_bf2').then( res => res.json() ).then( res => setData(res) ),[])
   

    function handleSelect(e) { 
        // console.log(typeof e.currentTarget.value)
        switch(e.currentTarget.value){
            case '1': setCurrData( [1001, 1002, 1003, 1004, 1005, 1010].map(e=> ({ name: e })) )
            break;
            case '2': setCurrData( [1030, 1035, 1040, 1050, 1055, 1070].map(e=> ({ name: e })) )
            break;
            case '3': setCurrData( [1201, 1301, 1401, 1501, 1651, 1652, 1653, 1660].map(e=> ({ name: e })) )
            break;
            case '4': setCurrData( [1100, 1151, 1152, 1153, 1154, 1155, 1556, 1157, 1158, 1159, 1160, 1161, 1162, 1135].map(e=> ({ name: e })) )
            break;
            case '5': setCurrData( [1700, 1800, 3000, 3100].map(e=> ({ name: e })) )
            break;
            default: setCurrData( data1 )
        } }
    
    // console.log('data' ,data)

    return (
        <div className="h-100 w-100">
            <select onChange={handleSelect} className="form-select mx-auto w-50 bg-dark text-white" aria-label="Default select example">
                <option value="1">Cutting and Deboning</option>
                <option value="2">Flexvers</option>
                <option value="3">Dolav tipping</option>
                <option value="4">Repack stations</option>
                <option value="5">Ribb lines</option>
                {/* {<option value="6">DMM and Botensilo</option>
                <option value="7">Washing machine</option>} */}
            </select>
            {/* {<p className="text-white" >{select}</p>} */}
            <ResponsiveContainer width="100%" height="50%">
                <BarChart
                    width={10}
                    height={10}
                    data={currData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                    <Tooltip  content={<CustomToolTip />}/>
                    <Legend />
                    <Bar yAxisId="left" dataKey="name" fill="#15ff66" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
