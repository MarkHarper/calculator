import React, {PropTypes} from 'react'
import {row, header, table} from './styles.css'

const Table = ({data, positioning, grams}) => {
  return grams === true
  ? (
    <div className={positioning}>
      <table className={table}>
        <tbody>
          <tr>
            <td className={row}>{'Carbs'}</td>
            <td className={row}>{parseInt(data.carbs / 4)}</td>
          </tr>
          <tr>
            <td className={row}>{'Protein'}</td>
            <td className={row}>{parseInt(data.proteins / 4)}</td>
          </tr>
          <tr>
            <td className={row}>{'Fat'}</td>
            <td className={row}>{parseInt(data.fats / 9)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
  : <div className={positioning}>
      <table className={table}>
        <tbody>
          <tr>
            <td className={row}>{'Carbs'}</td>
            <td className={row}>{data.carbs}</td>
          </tr>
          <tr>
            <td className={row}>{'Protein'}</td>
            <td className={row}>{data.proteins}</td>
          </tr>
          <tr>
            <td className={row}>{'Fat'}</td>
            <td className={row}>{data.fats}</td>
          </tr>
        </tbody>
      </table>
    </div>
}

Table.propTypes = {
  data: PropTypes.object.isRequired,
  positioning: PropTypes.string.isRequired,
  grams: PropTypes.bool.isRequired,
}

export default Table
