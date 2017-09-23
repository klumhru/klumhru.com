import React from 'react'
import PropTypes from 'prop-types'

import { BottomNavigationButton } from 'material-ui/BottomNavigation'
import { withStyles } from 'material-ui/styles'

import MdIcon from './MdIcon'

import { BottomBar } from './styles'

const BottomBarButton = (props) => {
  const { label, icon, classes, url } = props
  const handleOnClick = () => {
    if (url) {
      window.open(url, '_blank')
    }
  }
  return (
    <BottomNavigationButton
      classes={{ label: classes.barLabel }}
      label={label}
      showLabel
      icon={<MdIcon className={classes.barIcon} name={icon} />}
      onClick={(evt) => handleOnClick(evt)}
    />
  )
}

BottomBarButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  url: PropTypes.string,
}

BottomBarButton.defaultProps = {
  url: undefined,
}

export default withStyles(BottomBar)(BottomBarButton)
