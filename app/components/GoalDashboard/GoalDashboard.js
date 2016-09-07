import React, {PropTypes} from 'react'
import {LineChart, Line, XAxis, YAxis,
  CartesianGrid, Pie, PieChart} from 'recharts'
import {row, header, table} from './styles.css'

GoalDashboard.propTypes = {

}

const mockLineData = [
      {weight: 170, bodyFat: 15},
      {weight: 169.5, bodyFat: 14.5},
      {weight: 169, bodyFat: 14},
      {weight: 168, bodyFat: 13},
      {weight: 167, bodyFat: 12},
      {weight: 166, bodyFat: 11},
      {weight: 165, bodyFat: 10},
]

const mockPieData = [{name: 'Carbs', value: 500}, {name: 'Fats', value: 300},
                  {name: 'Proteins', value: 600}]
// function pieData (data) {
//   let clean = {}
  
//   return clean
// }

// function lineData (data) {
//   let clean = {}

//   return clean
// }

export default function GoalDashboard (props) {
  return (
    <div>
      {'Dashboard'}
      <LineChart width={200} height={200} data={mockLineData}>
        <Line type="monotone" dataKey="weight" stroke="#8884d8" />
        <Line type="monotone" dataKey="bodyFat" stroke="#8884d8" />
      </LineChart>
      <PieChart width={100} height={100}>
        <Pie data={mockPieData} cx={50} cy={50} outerRadius={30} fill="#82ca9d"/>
      </PieChart>
      <table className={table}>
        <thead>
          <tr>
            <th className={header}></th>
            <th className={header}>{'Carbohydrates'}</th>
            <th className={header}>{'Fats'}</th>
            <th className={header}>{'Proteins'}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={row}>{'Daily'}</td>
            <td className={row}>{'500'}</td>
            <td className={row}>{'300'}</td>
            <td className={row}>{'600'}</td>
          </tr>
          <tr>
            <td className={row}>{'Weekly'}</td>
            <td className={row}>{'3500'}</td>
            <td className={row}>{'2100'}</td>
            <td className={row}>{'4200'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
