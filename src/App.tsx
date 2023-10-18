import './App.scss';
import { IComponentWithChildren } from './interfaces/IComponentWithChildren.interface';
import Layout from './views/Layout';

const App = ({ children }: IComponentWithChildren) => (
  <div className="App">
    <Layout>
      {children}
    </Layout>
  </div>
);

export default App;
