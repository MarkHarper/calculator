import React, {PropTypes} from 'react'
import {AreaChart, Area, XAxis, YAxis,
  Pie, PieChart} from 'recharts'
import {Table} from 'components'
import {GoalFormContainer} from 'containers'
import {table, bottomContainer, topContainer} from './styles.css'
import {macroCalc, timelineCalc} from 'helpers/calc'
import {formatPieData} from 'helpers/utils'

GoalDashboard.propTypes = {

}

export default function GoalDashboard (props) {
  const mockData = {
    currentWeight: parseFloat(props.currentWeight),
    currentBodyFat: parseFloat(props.currentBodyFat),
    exerciseTime: parseFloat(props.exerciseTime),
    exerciseIntensity: parseFloat(props.exerciseIntensity),
    targetWeight: parseFloat(props.targetWeight),
    targetBodyFat: parseFloat(props.targetBodyFat),
    fatPreference: parseFloat(props.fatPreference),
  }
  const mockLineData = timelineCalc(mockData)
  const data = macroCalc(mockData)
  const mockPieData = formatPieData(data)

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
  return props.isFetchingGoal ? 
    <div>{'loading'}</div> :
    (
    <div>
      <div className={topContainer}>
        <GoalFormContainer />
        <AreaChart width={600} height={300} data={mockLineData}>
          <YAxis />
          <XAxis dataKey='week'/>
          <Area type='monotone' dataKey='weight' stackId="2" stroke='#8884d8' fill='#8884d8' />
          <Area type='monotone' dataKey='bodyFat' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
        </AreaChart>
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
