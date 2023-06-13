import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  /* Styles applied to the root element. */
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  /* Styles applied to the content wrapper element. */
  content: {
    padding: theme.spacing(2.5),
    backgroundColor: theme.palette.background.default,
  },
  /* Styles applied to the scrollbar host element. */
  contentScrollbar: {
    flexGrow: 1,
    '& > .os-scrollbar > .os-scrollbar-track > .os-scrollbar-handle': {
      background: theme.palette.primary.main,
      '&:hover': {
        background: theme.palette.primary.dark,
      },
    },
  },
}));
