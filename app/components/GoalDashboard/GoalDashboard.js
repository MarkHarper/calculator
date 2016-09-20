import React, {PropTypes} from 'react'
import {AreaChart, Area, XAxis, YAxis,
  Pie, PieChart, Tooltip, Legend, Cell} from 'recharts'
import {Table} from 'components'
import {table, bottomContainer, topContainer,
  outerContainer, caloriesContainer, dailyCals,
  calUnits, tileTitle, areaChart, vizContainer,
  kCalsPie, gramsPie, pathToGoal, pieTop, pieBottom} from './styles.css'
import Panel from 'muicss/lib/react/panel'
import {macroCalc, timelineCalc} from 'helpers/calc'
import {formatPieData} from 'helpers/utils'
import {lineBreak} from 'sharedStyles/styles.css'

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
  const stats = {
    currentWeight: parseFloat(props.currentWeight),
    currentBodyFat: parseFloat(props.currentBodyFat),
    exerciseTime: parseFloat(props.exerciseTime),
    exerciseIntensity: parseFloat(props.exerciseIntensity),
    targetWeight: parseFloat(props.targetWeight),
    targetBodyFat: parseFloat(props.targetBodyFat),
    fatPreference: parseFloat(props.fatPreference),
    height: parseFloat(props.height),
  }
  const mockLineData = timelineCalc(stats)
  const data = macroCalc(stats)
  const mockPieDataGrams = formatPieData(data, false)
  const mockPieDataCals = formatPieData(data, true)
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28']
  let bodyFatArea
  if (stats.currentBodyFat) {
    bodyFatArea = <Area type='monotone' dataKey='bodyFat' stackId='1'
      stroke='#82ca9d' fill='#82ca9d'/>
  } else {
    bodyFatArea = null
  }
  return props.isFetchingGoal
   ? <div>{'loading'}</div>
   : (
    <div className={outerContainer}>
      <div className={topContainer}>
        <Panel className={pathToGoal}>
          <div className={tileTitle}>{'PATH TO GOAL'}</div>
          <hr className={lineBreak}/>
          <div className={vizContainer}>
            <AreaChart width={600} height={200} data={mockLineData}
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <Tooltip/>
              <YAxis domain={['dataMin - 2', 'dataMax + 2']} />
              <XAxis dataKey='week'/>
              <Area type='monotone' dataKey='weight' stackId='2'
                stroke='#8884d8' fill='#8884d8'/>
              {bodyFatArea}
            </AreaChart>
          </div>
        </Panel>
        <Panel className={gramsPie}>
          <div className={tileTitle}>{'MACROS BY GRAMS'}</div>
          <hr className={lineBreak}/>
          <PieChart width={140} height={140}
            style={{margin: '0 auto'}}>
            <Pie data={mockPieDataGrams} cx={70}
              cy={70}
              outerRadius={70}
              fill='#82ca9d'
              labelLine={false}>
              {mockPieDataGrams.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)}
            </Pie>
          </PieChart>
          <Table data={data} positioning={table} grams={true}/>
        </Panel>
      </div>
      <div className={bottomContainer}>
        <Panel className={caloriesContainer}>
          <div className={tileTitle}>{'TIME TO GOAL'}</div>
          <hr className={lineBreak}/>
          <span className={dailyCals}>{parseInt(mockLineData.length * 7)}</span>
          <span className={calUnits}>{'Days'}</span>
        </Panel>
        <Panel className={kCalsPie}>
          <div className={tileTitle}>{'MACROS BY KCALS'}</div>
          <hr className={lineBreak}/>
          <div className={vizContainer}>
            <PieChart width={140} height={140}>
              <Pie data={mockPieDataCals} cx={70} cy={70}
                outerRadius={70}
                fill='#82ca9d'
                labelLine={false}>
                {mockPieDataCals.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)}
              </Pie>
            </PieChart>
            <Table data={data} positioning={table} grams={false}/>
          </div>
        </Panel>
        <Panel className={caloriesContainer}>
          <div className={tileTitle}>{'DAILY CALORIES'}</div>
          <hr className={lineBreak}/>
          <span className={dailyCals}>{data.cal}</span>
          <span className={calUnits}>{'Kcal'}</span>
        </Panel>
      </div>
    </div>
  )
}
