import React, {PropTypes} from 'react'
import {LineChart, Line, XAxis, YAxis,
  CartesianGrid, Pie, PieChart} from 'recharts'
import {Table} from 'components'
import {GoalFormContainer} from 'containers'
import {table, bottomContainer, topContainer} from './styles.css'

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


const RADIAN = Math.PI / 180 
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill='white' textAnchor={x > cx ? 'middle' : 'middle'} 	dominantBaseline='central'>
      {`${name}`}
    </text>
  )
}


export default function GoalDashboard (props) {
  return (
    <div>
      <div className={topContainer}>
        <GoalFormContainer />
        <LineChart width={200} height={200} data={mockLineData}>
          <Line type='monotone' dataKey='weight' stroke='#8884d8' />
          <Line type='monotone' dataKey='bodyFat' stroke='#8884d8' />
        </LineChart>
      </div>
      <div className={bottomContainer}>
        <PieChart width={170} height={170}>
          <Pie data={mockPieData} cx={85} cy={85}
            outerRadius={85}
            fill='#82ca9d'
            labelLine={false}
            label={renderCustomizedLabel} />
        </PieChart>
        <Table data={data} positioning={table}/>
      </div>
    </div>
  )
}
