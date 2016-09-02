import React, {PropTypes} from 'react'
import {LineChart, Line, XAxis, YAxis,
  CartesianGrid, Pie, PieChart} from 'recharts'

GoalDashboard.propTypes = {

}

// function pieData (data) {
//   let clean = {}
  
//   return clean
// }

// function lineData (data) {
//   let clean = {}

//   return clean
// }

export default function GoalDashboard () {
  return (
    <div>
      {'Dashboard'}
    </div>
  )
}


// <LineChart width={600} height={300} data={data}>
//         <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//         <CartesianGrid stroke="#ccc" />
//         <XAxis dataKey="name" />
//         <YAxis />
//       </LineChart>
//       <PieChart width={800} height={400}>
//         <Pie data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
//       </PieChart>