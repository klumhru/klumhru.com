import { createStyleSheet } from 'material-ui/styles'
import { grey } from 'material-ui/styles/colors'

export const header = createStyleSheet('Header', (theme) => ({
  root: {
    color: theme.palette.text.primary,
    paddingTop: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    marginTop: 0,
  },
}))

export const bottomBar = createStyleSheet('BottomBar', (theme) => ({
  root: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  bar: {
    display: 'flex',
    minHeight: 10 * theme.spacing.unit,
    backgroundColor: grey[800],
    justifyContent: 'flex-end',
  },
  barIcon: {
    display: 'block',
    fontSize: 3 * theme.spacing.unit,
    color: grey[200],
  },
  barLabel: {
    fontSize: 2 * theme.spacing.unit,
    color: grey[200],
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
  },
  chipsWrap: {
    display: 'flex',
    // minHeight: theme.spacing.unit * 10,
  },
  chips: {
    flex: '1',
    padding: 0.5 * theme.spacing.unit,
  },
  chip: {
    margin: 0.5 * theme.spacing.unit,
    backgroundColor: grey[700],
  },
  icon: {
    margin: 'auto',
    display: 'block',
    // fontSize: 3 * theme.spacing.unit,
    height: 3 * theme.spacing.unit,
  },
}))
