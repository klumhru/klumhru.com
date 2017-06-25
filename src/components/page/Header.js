import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

import { header } from './styles'

const Header = (props) => {
  const { classes } = props
  return (
    <Typography
      type="display1"
      align="right"
      className={classes.root}
    >Högni Gylfason</Typography>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(header)(Header)
