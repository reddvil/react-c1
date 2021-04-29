import { Switch, Route } from 'react-router-dom';

import UsersPage from './pages/usersPage';
import BooksPage from './pages/booksPage';
import Navigation from './components/navigation';
import SignInPage from './pages/auth/login';
import Profile from './pages/profile';

function App() {
  return (
    <div className="container">
      <Navigation />
      <Switch>
        <Route path="/users">
          <UsersPage />
        </Route>
        <Route path="/books">
          <BooksPage />
        </Route>
        <Route path="/profile">
          <Profile title="Profile Page" />
        </Route>
        <Route path="/">
          <SignInPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
