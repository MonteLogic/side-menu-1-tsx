import { createStyles, Theme } from '@material-ui/core/styles';

export default (theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.only('md')]: {
        flexDirection: 'column',
      },
    },
    container: {},
    focusVisible: {},
    dense: {},
    alignItemsFlexStart: {},
    disabled: {},
    divider: {},
    gutters: {
      paddingLeft: 12,
      paddingRight: 12,
    },
    button: {},
    secondaryAction: {},
    selected: {},
    icon: {
      color: 'inherit',
      fontSize: 24,
      [theme.breakpoints.only('md')]: {
        minWidth: 'unset',
      },
    },
    text: {
      [theme.breakpoints.only('md')]: {
        fontSize: 9,
        lineHeight: 1,
      },
    },
  });
