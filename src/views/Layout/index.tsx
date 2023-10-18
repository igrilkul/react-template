import { IComponentWithChildren } from '../../interfaces/IComponentWithChildren.interface';

const Layout = ({ children }: IComponentWithChildren) => (
  <div className="Layout">
    {children}
  </div>
);

export default Layout;
