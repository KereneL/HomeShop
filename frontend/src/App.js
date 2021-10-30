import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Container from 'react-bootstrap/Container'

import Navbar from './shared/navigation/Navigation';
import Home from './home/pages/Home';
import Shop from './shop/pages/Shop';
import UserPage from './user/pages/UserPage';
import Cart from './cart/pages/Cart';
import Checkout from './cart/pages/Checkout';
import Login from './auth/pages/Login';
import SignUp from './auth/pages/SignUp';
import Dashboard from './admin/pages/Dashboard';
import AdminProducts from './admin/pages/AdminProducts';
import AdminCategories from './admin/pages/AdminCategories';
import AdminUsers from './admin/pages/AdminUsers'
import AdminOrders from './admin/pages/AdminOrders';
import AdminNewCategory from './admin/pages/AdminNewCategory';
import AdminNewProduct from './admin/pages/AdminNewProduct';
import AdminEditCategory from './admin/pages/AdminEditCategory';
import AdminEditProduct from './admin/pages/AdminEditProduct';




const App = () => {
  return (
    <Container>
      <div className="border border-secondary">
      <Router >
        <Navbar />
        <Switch>

        <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/shop" exact>
            <Shop />
          </Route>

          <Route path="/user" exact>
            <UserPage />
          </Route>

          <Route path="/admin" exact>
            <Dashboard />
          </Route>

          <Route path="/admin/products/new" component={AdminNewProduct} />
          <Route path="/admin/products/edit/:id" component={AdminEditProduct} />
          <Route path="/admin/products/" component={AdminProducts} />

          <Route path="/admin/categories/new" component={AdminNewCategory} />
          <Route path="/admin/categories/edit/:id" component={AdminEditCategory} />
          <Route path="/admin/categories/" component={AdminCategories} />


          <Route path="/admin/users" exact>
            <AdminUsers />
          </Route>

          <Route path="/admin/orders" exact>
            <AdminOrders />
          </Route>

          <Route path="/cart" exact>
            <Cart />
          </Route>

          <Route path="/checkout" exact>
            <Checkout />
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/signup" exact>
            <SignUp />
          </Route>
          
          {/* <Redirect to="/" /> */}
        </Switch>
      </Router>
      </div>
    </Container>
  );
}

export default App;
