import React from 'react'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'

import BottomBarButton from './BottomBarButton'
import { bottomBar } from './styles'

const BottomBarLinks = (props) => {
  const { classes } = props
  return (
    <Grid container className={classes.links} gutter={0}>
      <BottomBarButton
        icon="github-box"
        label="Github"
        url="https://github.com/Klumhru"
      />
      <BottomBarButton
        icon="facebook-box"
        label="Facebook"
        url="https://facebook.com/hogni.gylfason"
      />
      <BottomBarButton
        icon="twitter-box"
        label="@Klumhru"
        url="https://twitter.com/Klumhru"
      />
      <BottomBarButton
        icon="linkedin-box"
        label="LinkedIn"
        url="https://www.linkedin.com/in/hognigylfason/"
      />
      <BottomBarButton
        icon="key"
        label="Keybase"
        url="https://keybase.io/klumhru"
      />
    </Grid>
  )
}

BottomBarLinks.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(bottomBar)(BottomBarLinks)
