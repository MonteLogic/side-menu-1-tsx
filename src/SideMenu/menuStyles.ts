import { createStyles, Theme } from '@material-ui/core/styles';

const WIDTH_DEFAULT = 220;
const WIDTH_MD_DEFAULT = 72;

export default (theme: Theme) => {
  const width = theme.sideMenu?.width ?? WIDTH_DEFAULT;
  const widthMd = theme.sideMenu?.widthMd ?? WIDTH_MD_DEFAULT;
  const backgroundColor = theme.sideMenu?.bgColor || theme.palette.primary.main;
  const color = theme.sideMenu?.color || theme.palette.primary.contrastText;

  return createStyles({
    root: {
      width,
    },
    body: {
      width,
      overflow: 'hidden',
      padding: theme.spacing(1.5),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(1),
      },
      [theme.breakpoints.down('sm')]: {
        padding: 0,
      },
    },
    /* Styles applied to the root element if `variant="permanent or persistent"` */
    rootDesktop: {
      [theme.breakpoints.only('md')]: {
        width: widthMd,
      },
    },
    /* Styles applied to the body if `anchor="left or right"` and `variant` is not "temporary" */
    bodyDesktop: {
      backgroundColor,
      color,
      [theme.breakpoints.only('md')]: {
        width: widthMd,
      },
    },
    modal: {}, // Styles applied to the `Modal` component if `variant` is "temporary"
    menu: {
      position: 'relative',
      flexGrow: 1,
      margin: theme.spacing(1, 0),
      [theme.breakpoints.down('sm')]: {
        margin: 0,
      },
    },
    scrollbarRoot: {
      height: '100%',
      marginRight: -8,
      paddingRight: 8,
    },
    scrollAreaShading: {
      [theme.breakpoints.up('md')]: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: 100,
        pointerEvents: 'none',
        background: `linear-gradient(to bottom, ${backgroundColor} 0, transparent 10px), 
        linear-gradient(to top, ${backgroundColor} 0, transparent 10px)`,
      },
    },
    swipeHint: {
      display: 'none',
      [theme.breakpoints.only('md')]: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: 12,
        lineHeight: 1,
      },
    },
    toolbarOffset: theme.mixins.toolbar,
  });
};
