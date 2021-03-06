import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import css from './Turn.css'

const Turn = ({ isDoingMatch, turn }) => {
  const cls = cx(css.turn, {
    'is-hidden': !isDoingMatch
  })

  return (
    <div className={cls}>
      <div className={cx(css.turnFloat, `is-${turn}`)}>{turn}</div>
    </div>
  )
}

Turn.propTypes = {
  isDoingMatch: PropTypes.bool.isRequired,
  turn: PropTypes.string.isRequired
}

export default memo(Turn)
