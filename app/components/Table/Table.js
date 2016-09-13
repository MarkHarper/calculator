import React, {PropTypes} from 'react'
import {row, header, table} from './styles.css'

const Table = ({data, positioning}) => {
  return (
    <div className={positioning}>
      <table className={table}>
        <thead>
          <tr>
            <th className={header}></th>
            <th className={header}>{'Grams'}</th>
            <th className={header}>{'Kcals'}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={row}>{'Carbs'}</td>
            <td className={row}>{parseInt(data.carbs / 4)}</td>
            <td className={row}>{data.carbs}</td>
          </tr>
          <tr>
            <td className={row}>{'Protein'}</td>
            <td className={row}>{parseInt(data.proteins / 4)}</td>
            <td className={row}>{data.proteins}</td>
          </tr>
          <tr>
            <td className={row}>{'Fat'}</td>
            <td className={row}>{parseInt(data.fats / 9)}</td>
            <td className={row}>{data.fats}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

Table.propTypes = {
  data: PropTypes.object.isRequired,
  positioning: PropTypes.string.isRequired,
}

export default Table
