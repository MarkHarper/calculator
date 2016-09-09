import React, {PropTypes} from 'react'
import {LineChart, Line, XAxis, YAxis,
  CartesianGrid, Pie, PieChart} from 'recharts'
import {Table} from 'components'
import {GoalFormContainer} from 'containers'
import {table, bottomContainer, topContainer} from './styles.css'
import {macroCalc, timelineCalc} from 'helpers/calc'
import {formatPieData} from 'helpers/utils'

GoalDashboard.propTypes = {

}

const mockGoalData = {
  currentWeight: 170,
  currentBodyFat: 15,
  exerciseTime: 4,
  exerciseIntensity: 11,
  targetWeight: 165,
  targetBodyFat: 8,
  fatPreference: 0.4,
}

const mockLineData = timelineCalc(mockGoalData)
const data = macroCalc(mockGoalData)
const mockPieData = formatPieData(data)

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
        <LineChart width={600} height={300} data={mockLineData}>
          <Line type='monotone' dataKey='weight' stroke='#8884d8' />
          <Line type='monotone' dataKey='bodyFat' stroke='#8884d8' />
          <YAxis />
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
