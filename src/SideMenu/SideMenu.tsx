import React, { useState } from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import List, { ListProps } from '@material-ui/core/List';
import { useMediaQuery } from '@material-ui/core';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import clsx from 'clsx';
import SideMenuItem, { ISideMenuItemProps } from './SideMenuItem';
import LogOut from '../assets/icons/LogOut';
import Swipe from '../assets/icons/Swipe';
import styles from './menuStyles';
import 'overlayscrollbars/css/OverlayScrollbars.css';

export interface ISideMenuProps extends DrawerProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<Record<keyof ReturnType<typeof styles>, string>>;
  /** Props to be forwarded to List component */
  listProps?: ListProps;
  /** Props applied to the log out item */
  logOutItemProps?: ISideMenuItemProps;
  /** Callback for the log out click. Log out button will be rendered only if this prop provided. */
  onLogOut?: () => void;
  /** A function that renders header */
  renderHeader?: () => React.ReactNode;
  /** A function that renders footer */
  renderFooter?: () => React.ReactNode;
}

const SideMenu = React.forwardRef(function SideMenu(
  props: ISideMenuProps & WithStyles<typeof styles, true>,
  ref: React.ForwardedRef<any>,
) {
  const {
    classes,
    theme,
    children,
    listProps,
    logOutItemProps,
    onLogOut,
    renderHeader,
    renderFooter,
    ModalProps,
    onClose,
    ...drawerProps
  } = props;

  const [isMenuScrollable, setScrollable] = useState(false);

  const downMd = useMediaQuery(theme.breakpoints.down('md'));
  const mobileView = useMediaQuery(theme.breakpoints.down('sm'));

  const LogOutButton = onLogOut ? (
    <SideMenuItem
      text="Log Out"
      icon={<LogOut />}
      onClick={onLogOut}
      divider={mobileView}
      {...logOutItemProps}
    />
  ) : null;

  return (
    <Drawer
      classes={{
        root: classes.root,
        docked: classes.rootDesktop,
        paper: classes.body,
        paperAnchorDockedLeft: classes.bodyDesktop,
        paperAnchorDockedRight: classes.bodyDesktop,
        modal: classes.modal,
      }}
      ref={ref}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
        style: { zIndex: 1080 }, // Prevent modal to pop over the app bar
        ...ModalProps,
      }}
      onClose={onClose}
      {...drawerProps}
    >
      {mobileView && <div className={classes.toolbarOffset} />}
      {renderHeader && renderHeader()}
      <div className={classes.menu}>
        {isMenuScrollable && <div className={classes.scrollAreaShading} />}
        <OverlayScrollbarsComponent
          options={{
            className: clsx('os-theme-light', classes.scrollbarRoot),
            autoUpdate: false,
            overflowBehavior: { x: 'hidden', y: 'scroll' },
            scrollbars: {
              visibility: downMd ? 'hidden' : 'auto',
            },
            callbacks: {
              onOverflowChanged({ yScrollable }) {
                setScrollable(yScrollable);
              },
            },
          }}
        >
          <div role="presentation" onClick={mobileView ? (onClose as () => void) : null}>
            <List component="nav" disablePadding={mobileView} {...listProps}>
              {children}
              {mobileView && LogOutButton}
            </List>
          </div>
        </OverlayScrollbarsComponent>
      </div>
      {isMenuScrollable && (
        <div className={classes.swipeHint}>
          <Swipe />
          <span>Swipe</span>
        </div>
      )}
      {!mobileView && LogOutButton}
      {renderFooter && renderFooter()}
    </Drawer>
  );
});

export default withStyles(styles, { name: 'SideMenu', withTheme: true })(SideMenu);
