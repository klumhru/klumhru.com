import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { withStyles } from 'material-ui/styles'

import { BottomBar } from './styles'

const MdIcon = (props) => {
  const { name, classes } = props
  const className = classnames(
    'mdi',
    `mdi-${name}`,
    classes.barIcon,
  )
  return (
    <i {...{ className }} />
  )
}

MdIcon.propTypes = {
  name: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(BottomBar)(MdIcon)
