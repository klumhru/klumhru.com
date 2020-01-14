import React from 'react'
import PropTypes from 'prop-types'

import Chip from 'material-ui/Chip'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'

import { BottomBar } from './styles'

const chipValues = [
  { key: 0, label: 'Coder' },
  { key: 1, label: 'Clouder' },
  { key: 2, label: 'Husband' },
  { key: 3, label: 'Parront' },
  { key: 4, label: 'Gamer' },
]

const BottomBarChips = (props) => {
  const { classes } = props
  return (
    <Grid
      spacing={0}
      title="What I am"
      className={classes.chips}
      container
      justify="space-around"
      align="center"
    >
      {chipValues.map((v) =>
        (<Grid key={v.key} item xs={4} sm={2}>
          <Chip className={classes.chip} {...v} />
        </Grid>),
      )}
    </Grid>
  )
}

BottomBarChips.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(BottomBar)(BottomBarChips)
