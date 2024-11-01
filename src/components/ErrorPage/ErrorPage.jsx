import { Link } from "react-router-dom";

const ErrorPage = () => {
    
    return (
      <div>
        <div>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <Link to="/">
            <button className="btn btn-secondary">Go Back</button>
          </Link>
        </div>
      </div>
    );
};

export default ErrorPage;