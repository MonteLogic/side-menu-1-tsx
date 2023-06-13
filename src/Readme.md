# Side Menu documentation

A reusable navigation menu for React apps. Has mobile, tablet and desktop views.
The main components is SideMenu, SideMenuItem and MenuWrapper.
Built with Material Ui components, so it's easy to customize and change styles as needed, with [classes prop](https://material-ui.com/customization/components/#overriding-styles-with-classes), and with [theme object](https://material-ui.com/customization/theming/).
Overlay Scrollbars is used for custom scrollbars, [styling also avaible](https://kingsora.github.io/OverlayScrollbars/#!documentation/styling).

## MenuWrapper

Wraps any app content with side menu, app bar for mobile view, and custom styled scrollbar.
By default, on small breakpoint menu opens temporarily above content on the right edge of the screen (controlled by a button on the toolbar), and is permanently fixed to the left edge of the screen on bigger breakpoints.

### **Props**

_IMenuWrapperProps_
| Name | Type | Description |
| ------------------- | ------------------- | ------------------- |
| children | `ReactNode` | The content to wrap. |
| menuOptions | `Array<{ text: string; Icon?: React.FunctionComponent; linkTo: string }>` | Data to render navigation menu items. |
| renderMobileToolbar | `(isMenuOpen: boolean, toggleMenu: () => void) => ReactNode` | A function to render app bar that controls menu opening in mobile view. |
| classes? | `object` | Styles to apply to the component. See classes API below for more details. |
| menuProps? | `ISideMenuProps` | Props applied to the SideMenu component. |
| menuItemProps? | `ISideMenuItemProps` | Props applied to the SideMenuItem component. |

---

### **Classes**

| Rule name        | Description                                    |
| ---------------- | ---------------------------------------------- |
| root             | Styles applied to the root element.            |
| content          | Styles applied to the content wrapper element. |
| contentScrollbar | Styles applied to the scrollbar host element.  |

---

## SideMenu

Consists of a list of menu items and optional header and footer.
Uses MUi [Drawer](https://material-ui.com/api/drawer/) and [List](https://material-ui.com/api/list/) components.
By default, adapted to "temporary" or "permanent" variants with "right" or "left" anchor.
Header and footer are fixed, and list is scrollable if has overflow, with smooth shading of the top and bottom edges, and 'swipe' hint below on md breakpoint.
Log out button is rendered, if onLogOut prop is passed, either as last item of the list in mobile view, or below the list.
Width and colors of the component can be set in `theme.sideMenu` object.
Default values: `width = 220px; widthMd = 72px; backgroundColor = theme.palette.primary.main; color = theme.palette.primary.contrastText;`

### **Props**

_ISideMenuProps_
| Name | Type | Description |
| ------------------- | ----------------------- | ------------------- |
| classes? | `object` | Styles to apply to the component. See classes API below for more details. |
| listProps? | `ListProps` | Props applied to the MUi List component |
| logOutItemProps? | `ISideMenuItemProps` | Props applied to the log out button |
| onLogOut? | `() => void` | Callback for the log out click. Log out button will be rendered only if this prop provided. |
| renderHeader? | `() => React.ReactNode` | A function that renders header |
| renderFooter? | `() => React.ReactNode` | A function that renders footer |

---

Any other props supplied will be provided to the Drawer component.

### **Classes**

| Rule name     | Description                                                               |
| ------------- | ------------------------------------------------------------------------- |
| root          | Styles applied to the Drawer root element.                                |
| body          | Styles applied to the body element (`Paper`).                             |
| rootDesktop   | Styles applied to the root element if `variant`="permanent or persistent" |
| bodyDesktop   | Styles applied to the body if `variant`="permanent or persistent"         |
| modal         | Styles applied to the `Modal` component if `variant` is "temporary"       |
| menu          | Styles applied to the menu list root element                              |
| scrollbarRoot | Styles applied to the menu list scrollbar host element.                   |

---

## SideMenuItem

Renders menu items as React Router links or as buttons.
Uses MUi [ListItem](https://material-ui.com/api/list-item/), [ListItemIcon](https://material-ui.com/api/list-item-icon/), [ListItemText](https://material-ui.com/api/list-item-text/) and React Router [NavLink](https://reactrouter.com/web/api/NavLink) components.

### **Props**

_ISideMenuItemProps_
| Name | Type | Description |
| ------------------- | ------------------- | ------------------- |
| text | `string` | Text content of menu item |
| icon? | `ReactElement` | Icon to attach to menu item |
| linkTo? | `NavLinkProps["to"]`| Navigation link location. If provided, item will be rendered as NavLink. Otherwise, use onClick prop |
| classes? | `object` | Styles to apply to the component. See classes API below for more details. |
| iconProps? | `ListItemIconProps` | Props applied to the MUi ListItemIcon component |
| textProps? | `ListItemTextProps` | Props applied to the MUi ListItemText component |

---

Any other props supplied will be provided to the ListItem component.

### **Classes**

All classes of the MUi ListItem are avaible, plus these:
| Rule name | Description |
| ---------------- | ---------------- |
| icon | Styles applied to the root of ListItemIcon. |
| text | Styles applied to the root of ListItemText primary typography component. |
