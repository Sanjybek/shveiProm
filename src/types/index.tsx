export interface NavbarType  {
  toggleSideBar:() => void
}

export interface SideBarType {
  isOpen:boolean,
  closedSideBar:()=>void;
}