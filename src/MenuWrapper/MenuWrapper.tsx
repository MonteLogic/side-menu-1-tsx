import React, { ReactNode, useState } from 'react';
import { useTheme, useMediaQuery } from '@material-ui/core';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import clsx from 'clsx';
import SideMenu, { ISideMenuProps } from '../SideMenu/SideMenu';
import SideMenuItem, { ISideMenuItemProps } from '../SideMenu/SideMenuItem';
import { IsideMenuOption, TrenderToolbar } from '../model';
import useStyles from './styles';

interface IMenuWrapperProps {
  /** The content to wrap. */
  children: ReactNode;
  /** Data to render navigation menu items. */
  menuOptions: IsideMenuOption[];
  /** A function to render app bar that controls menu opening in mobile view. */
  renderMobileToolbar: TrenderToolbar;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<ReturnType<typeof useStyles>>;
  /** Props applied to the SideMenu component. */
  menuProps?: ISideMenuProps;
  /** Props applied to the SideMenuItem component. */
  menuItemProps?: ISideMenuItemProps;
}

/**
 * Wraps any app content with side menu, app bar for mobile view, and custom styled scrollbar.
 *
 * @remarks
 * By default, on small breakpoint menu opens temporarily above content on the right edge of the screen (controlled by a button on the toolbar),
 * and is permanently fixed to the left edge of the screen on bigger breakpoints.
 */
export default function MenuWrapper(props: IMenuWrapperProps) {
  const { children, menuOptions, renderMobileToolbar, menuProps, menuItemProps } = props;

  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((isOpen) => !isOpen);

  const classes = useStyles(props);

  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      {mobileView && renderMobileToolbar(isMenuOpen, toggleMenu)}

      <SideMenu
        variant={mobileView ? 'temporary' : 'permanent'}
        anchor={mobileView ? 'right' : 'left'}
        open={isMenuOpen} // ignored if variant is 'permanent'
        onClose={toggleMenu}
        {...menuProps}
      >
        {menuOptions.map(({ Icon, ...itemOptions }, i) => (
          <SideMenuItem
            key={i}
            divider={mobileView}
            icon={Icon ? <Icon /> : null}
            {...itemOptions}
            {...menuItemProps}
          />
        ))}
      </SideMenu>

      <OverlayScrollbarsComponent
        options={{
          className: clsx('os-theme-dark', classes.contentScrollbar),
          overflowBehavior: { x: 'hidden', y: 'scroll' },
          sizeAutoCapable: false,
          scrollbars: {
            visibility: mobileView ? 'hidden' : 'auto',
          },
        }}
      >
        <main className={classes.content}>{children}</main>
      </OverlayScrollbarsComponent>
    </div>
  );
}
