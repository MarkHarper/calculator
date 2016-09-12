import React, {PropTypes} from 'react'
import {row, header, table} from './styles.css'

const Table = ({data, positioning}) => {
  return (
    <div className={positioning}>
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
            <td className={row}>{data.carbs}</td>
            <td className={row}>{data.fats}</td>
            <td className={row}>{data.proteins}</td>
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
