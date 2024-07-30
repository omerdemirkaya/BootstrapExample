function App() {
  return (
    <>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              WebSiteName
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Page 1</a>
            </li>
            <li>
              <a href="#">Page 2</a>
            </li>
            <li>
              <a href="#">Page 3</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="row">
        <div className="col-sm-4 bg-primary text-uppercase">.col-sm-4</div>
        <div className="col-sm-4">.col-sm-4</div>
        <div className="col-sm-4">.col-sm-4</div>
      </div>
      <div className="container-fluid">
        <table className="table table-hover">
          <thead>
            <tr className="info">
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Ömer</th>
              <th>Demirkaya</th>
              <th>omer@gmail.com</th>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-info btn-lg">Info</button>
      </div>
      <div className="alert alert-success alert-dismissible">
        <a href="#" className="close" data-dismiss="alert" aria-label="close">
          &times;
        </a>
        <strong>Success!</strong> Indicates a successful or positive action.
      </div>
      <div className="container-fluid">
        <h1>Hello World!</h1>
        <div className="row">
          <div className="col-sm-4" style={{ backgroundColor: 'yellow' }}>
            <p>Lorem ipsum...</p>
          </div>
          <div className="col-sm-4" style={{ backgroundColor: 'pink' }}>
            <p>Sed ut perspiciatis...</p>
          </div>
          <div className="col-sm-4" style={{ backgroundColor: 'yellow' }}>
            <p>Lorem ipsum...</p>
          </div>
        </div>
      </div>
      <div className="row">
  <div className="col-md-6" style={{ backgroundColor:"red"}}>
    <p>Lorem ipsum...</p>
  </div>
  <div className="col-md-6" style={{ backgroundColor:"green"}}>
    <p>Sed ut perspiciatis...</p>
  </div>
</div>
    </>
  );
}

export default App;
