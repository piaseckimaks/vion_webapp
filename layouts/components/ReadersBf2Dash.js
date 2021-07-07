import React, { useEffect, useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function CustomToolTip(){

        return (
            <div>
                
            </div>
        )

}

export default function ReadersBf2Dash({ data }) {
    // const [ select, setSelect ] = useState('')
    const data1 = data.filter(e=> { if(e.name < 1100) return e}  ) //Cutting and Deboning
    const data2 = data.filter(e=> { if(e.name < 1600 && e.name > 1099) return e} ) //Flexvers
    const data3 = data.filter(e=> { if(e.name < 2001 && e.name > 1599) return e} ) //Dolav tipping
    const data4 = data.filter(e=> { if(e.name < 1163 && e.name > 1099) return e} ) //Repack stations
    const data5 = data.filter(e=> { if(e.name < 3001 && e.name > 2500) return e} ) //Ribb lines
    const data6 = data.filter(e=> { if(e.name < 3051 && e.name > 3000) return e} ) //DMM, Botensilo, Wasmachine
    const data7 = data.filter(e=> { if(e.name > 3100 ) return e} ) // no reads

    const [ currData, setCurrData ] = useState(data1);

   

    function handleSelect(e) { 
        // console.log(typeof e.currentTarget.value)
        switch(e.currentTarget.value){
            case '1': setCurrData( data1 )
            break;
            case '2': setCurrData( data2 )
            break;
            case '3': setCurrData( data3 )
            break;
            case '4': setCurrData( data4 )
            break;
            case '5': setCurrData( data5 )
            break;
            case '6': setCurrData( data6 )
            break;
            case '7': setCurrData( data7 )
            break;
            default: setCurrData( data1 )
        } }
    
    // console.log('currData' ,currData)

    return (
        <div className="h-100 w-100">
            <select onChange={handleSelect} className="form-select mx-auto w-50 bg-dark text-white" aria-label="Default select example">
                <option value="1">Cutting and Deboning</option>
                <option value="2">Flexvers</option>
                <option value="3">Dolav tipping</option>
                <option value="4">Repack stations</option>
                <option value="5">Ribb lines</option>
                <option value="6">DMM and Botensilo</option>
                <option value="7">Washing machine</option>
            </select>
            {/* {<p className="text-white" >{select}</p>} */}
            <ResponsiveContainer width="100%" height="35%">
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
                    <Tooltip  />
                    <Legend />
                    <Bar yAxisId="left" dataKey="name" fill="#15ff66" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
