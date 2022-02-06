import { SIDEBAR_MENU_ITEMS_STRUCTURE } from "@/model";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import { SidebarMenuItem } from "./sidebar-menu-item";

const SidebarMenuWrapper = styled(List)(
  ({ theme }) => `
      .MuiListSubheader-root {
        text-transform: uppercase;
        font-weight: bold;
        background: ${theme.sidebar.background};
        color: ${theme.colors.alpha.trueWhite[50]};
        font-size: ${theme.typography.pxToRem(12)};
        line-height: 1.4;
        padding: ${theme.spacing(1, 2.5)};
      }
      .MuiListItem-root {
        padding: 5px;
        width: 100%;
        .has-default-icon {
          .MuiButton-startIcon {
            opacity: 0;
          }
          &:hover {
            .MuiButton-startIcon{
              opacity: 1;
            }
          }
        }
        .drop-down-toggle, a {
          width: 100%;
          justify-content: flex-start;
          padding: 9px 27px;
          color: ${theme.colors.alpha.trueWhite[50]};
          &.Mui-active, &:hover {
            color: ${theme.sidebar.textColor};
            background: ${theme.colors.alpha.trueWhite[10]};
            &.has-default-icon {
              .MuiButton-startIcon {
                opacity: 1;
              }
            }
          }
          .MuiButton-endIcon {
            margin-left: auto;
            margin-right: 0;
          }
        }
        .drop-down-toggle {
          padding-right: 15px;
        }
      }
      .sub-menu {
        display: block;
      }
    `
);

export const SidebarMenu: React.FC<{
  routes?: SIDEBAR_MENU_ITEMS_STRUCTURE;
}> = (props) => {
  const { routes = [] } = props;
  return (
    <>
      {routes.map((el, index) => (
        <SidebarMenuWrapper
          key={index}
          subheader={<ListSubheader key={index}>{el.heading}</ListSubheader>}
        >
          {(el.items || []).map((ele, ind) => (
            <SidebarMenuItem key={ind} {...ele} />
          ))}
        </SidebarMenuWrapper>
      ))}
    </>
  );
};
