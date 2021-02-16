
import './App.css';
import Home from './demo/Home';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Things from './demo/Things';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Register from './components/Register';
import Login from './components/Login';
import Users from './components/LoggedIn/Users';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import User from './components/LoggedIn/User';
import Products from './components/LoggedOut/Products';
import OrderMain from './components/LoggedIn/OrderMain';
import OrderManagement from './components/LoggedIn/OrderManagement';
import AuthProvider from './providers/AuthProvider';
import OrdersProvider from './providers/OrdersProvider';

function App() {
  return (
  <>  
  <NavBar/>
  <FetchUser>
    <Container>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <ProtectedRoute exact path='/users' component={Users}/>
        <ProtectedRoute exact path='/things' component={Things}/>
        <ProtectedRoute exact path='/user' component={User}/>
        <Route exact path='/products' component={Products}/>
        <ProtectedRoute exact path='/order/:order_id' component={OrderMain}/>
        <ProtectedRoute exact path ='/order-management/' component={OrderManagement}/>
        <ProtectedRoute component={OrdersProvider}/> 
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </FetchUser>
  </>
  );
}

export default App;
