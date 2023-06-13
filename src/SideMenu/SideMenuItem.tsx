import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon, { ListItemIconProps } from '@material-ui/core/ListItemIcon';
import ListItemText, { ListItemTextProps } from '@material-ui/core/ListItemText';
import { NavLink, NavLinkProps } from 'react-router-dom';
import clsx from 'clsx';
import styles from './itemStyles';

export interface ISideMenuItemProps extends ListItemProps<any> {
  /** Text content of menu item */
  text: string;
  /** Icon to attach to menu item */
  icon?: React.ReactElement;
  /** Navigation link location. If provided, item will be rendered as react-router NavLink. */
  linkTo?: NavLinkProps['to'];
  /** Override or extend the styles applied to the component. */
  classes?: Partial<Record<keyof ReturnType<typeof styles>, string>>;
  /** Props to be forwarded to ListItemIcon component */
  iconProps?: ListItemIconProps;
  /** Props to be forwarded to ListItemText component */
  textProps?: ListItemTextProps;
}

function SideMenuItem(props: ISideMenuItemProps & WithStyles<typeof styles>) {
  const {
    text,
    icon,
    linkTo,
    iconProps,
    textProps,
    classes: { icon: iconClass, text: textClass, ...rootClasses },
    ...listItemProps
  } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<NavLinkProps, 'to'>>((itemProps, ref) => (
        <NavLink
          to={linkTo}
          ref={ref}
          activeClassName={clsx('Mui-selected', rootClasses.selected)}
          {...itemProps}
        />
      )),
    [linkTo, rootClasses.selected],
  );

  return (
    <ListItem
      button={true as any}
      component={linkTo ? renderLink : 'div'}
      classes={rootClasses}
      {...listItemProps}
    >
      {icon && (
        <ListItemIcon classes={{ root: iconClass }} {...iconProps}>
          {icon}
        </ListItemIcon>
      )}
      <ListItemText
        {...textProps}
        primaryTypographyProps={{
          classes: { root: textClass },
          noWrap: true,
          ...textProps?.primaryTypographyProps,
        }}
        primary={text}
      />
    </ListItem>
  );
}

export default withStyles(styles, { name: 'SideMenuItem' })(SideMenuItem);
