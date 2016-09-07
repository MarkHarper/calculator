import React, {PropTypes} from 'react'
import {LineChart, Line, XAxis, YAxis,
  CartesianGrid, Pie, PieChart} from 'recharts'
import {Table} from 'components'
import {table, bottomContainer} from './styles.css'

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

const data = {
  carbs: 500,
  fats: 300,
  proteins: 600,
}

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
      <div className={bottomContainer}>
        <PieChart width={100} height={100}>
          <Pie data={mockPieData} cx={50} cy={50} outerRadius={30} fill="#82ca9d"/>
        </PieChart>
        <Table data={data} positioning={table}/>
      </div>
    </div>
  )
}
