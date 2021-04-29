import classnames from 'classnames';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { withAuthProtected } from '../../hoc/withAuthProtected';

function Profile(props) {
  const history = useHistory();
  const onLogOut = () => {
    localStorage.removeItem('auth.token');
    history.replace('/');
  };

  return (
    <div>
      <div className={classnames('profile row mt-4')}>
        <h3>{props.title}</h3>
        <button className="btn btn-primary" onClick={onLogOut}>
          Log Out
        </button>
      </div>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    <span data-feather="home"></span>
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/books">
                    <span data-feather="file"></span>
                    Books
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">
                    <span data-feather="shopping-cart"></span>
                    Users
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <hr />
            <h2>Section title</h2>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,002</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>data</td>
                    <td>rich</td>
                    <td>dashboard</td>
                    <td>tabular</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>information</td>
                    <td>placeholder</td>
                    <td>illustrative</td>
                    <td>data</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default withAuthProtected(Profile);
