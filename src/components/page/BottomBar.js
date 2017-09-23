import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'

import { BottomBar } from './styles'

import BottomBarLinks from './BottomBarLinks'
import BottomBarChips from './BottomBarChips'

class BottomBarComponent extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }
  state = {
    index: 0,
  }
  handleOnChange = (evt, index) => {
    this.setState({ index })
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={0}
          title="Find me"
          className={classes.bar}
          justify="space-around"
          align="stretch"
        >
          <Grid item md={5} xs={12} className={classes.chipsWrap}>
            <BottomBarChips />
          </Grid>
          <Grid item md={7} xs={12} className={classes.links}>
            <BottomBarLinks />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(BottomBar)(BottomBarComponent)
