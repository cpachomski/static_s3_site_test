import React from 'react'
import PropTypes from 'prop-types'
import { Scene } from './styled'
import CoffeeDrip from './coffee-drip'
import CoffeePot from './coffee-pot'
import SillySillyMan from './silly-man'

const MeAtWork = ({ isAnimating }) => (
  <Scene>
    <CoffeeDrip isAnimating={isAnimating} inScene />
    <CoffeePot inScene />
    <SillySillyMan isAnimating={isAnimating} inScene />
  </Scene>
)

MeAtWork.propTypes = {
  isAnimating: PropTypes.bool,
}

MeAtWork.defaultProps = {
  isAnimating: false,
}

export default MeAtWork
