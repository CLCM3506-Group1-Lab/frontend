import React from "react";

type SiderRenderFunction = (props: {
  items: JSX.Element[];
  logout: React.ReactNode;
  dashboard: React.ReactNode;
  collapsed: boolean;
}) => React.ReactNode;

const Sider: SiderRenderFunction = ({
  items,
  logout,
  dashboard,
  collapsed,
}) => {
  // This component does nothing
  return null;
};

export default Sider;
