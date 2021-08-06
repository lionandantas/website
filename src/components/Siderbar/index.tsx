import {
  CloseIcon,
  Icon,
  SiderbarContainer,
  SiderbarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SiderbarElements";

interface ISidebarParams {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar = (props: ISidebarParams) => {
  return (
    <SiderbarContainer isOpen={props.isOpen} onClick={props.toggle}>
      <Icon onClick={props.toggle}>
        <CloseIcon />
      </Icon>
      <SiderbarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={props.toggle} to="about">About</SidebarLink>
          <SidebarLink onClick={props.toggle} to="discover">Dicover</SidebarLink>
          <SidebarLink onClick={props.toggle} to="services">Services</SidebarLink>
          <SidebarLink  onClick={props.toggle} to="signup">Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute  onClick={props.toggle} to="signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SiderbarWrapper>
    </SiderbarContainer>
  );
};

export default Sidebar;
