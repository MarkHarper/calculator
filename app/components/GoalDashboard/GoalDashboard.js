import React, {PropTypes} from 'react'
import {AreaChart, Area, XAxis, YAxis,
  Pie, PieChart, Tooltip, Legend} from 'recharts'
import {Table} from 'components'
import {GoalFormContainer} from 'containers'
import {table, bottomContainer, topContainer, outerContainer} from './styles.css'
import Panel from 'muicss/lib/react/panel'
import {macroCalc, timelineCalc} from 'helpers/calc'
import {formatPieData} from 'helpers/utils'

GoalDashboard.propTypes = {
  currentWeight: PropTypes.string.isRequired,
  currentBodyFat: PropTypes.string.isRequired,
  targetWeight: PropTypes.string.isRequired,
  targetBodyFat: PropTypes.string.isRequired,
  exerciseTime: PropTypes.string.isRequired,
  exerciseIntensity: PropTypes.string.isRequired,
  fatPreference: PropTypes.string.isRequired,
  isFetchingGoal: PropTypes.bool.isRequired,
  height: PropTypes.string.isRequired,
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
    height: parseFloat(props.height),
  }
  const mockLineData = timelineCalc(mockData)
  const data = macroCalc(mockData)
  const mockPieData = formatPieData(data)

  return props.isFetchingGoal ? 
    <div>{'loading'}</div> :
    (
    <div className={outerContainer}>
      <Panel className={topContainer}>
        <AreaChart width={600} height={300} data={mockLineData}
          margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <Tooltip/>
          <YAxis />
          <XAxis dataKey='week'/>
          <Area type='monotone' dataKey='weight' stackId="2" stroke='#8884d8' fill='#8884d8' />
          <Area type='monotone' dataKey='bodyFat' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
        </AreaChart>
      </Panel>
      <Panel>
        <span>{data.cal + ' Kcal Daily'}</span>
      </Panel>
      <Panel className={bottomContainer}>
        <PieChart width={170} height={170}>
          <Pie data={mockPieData} cx={85} cy={85}
            outerRadius={85}
            fill='#82ca9d'
            labelLine={false}/>
        </PieChart>
        <Table data={data} positioning={table}/>
      </Panel>
    </div>
  )
}
