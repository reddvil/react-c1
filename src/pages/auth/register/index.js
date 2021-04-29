import SignUpForm from '../../../components/forms/registerForm/RegisterForm';

function SignUpPage() {
  return (
    <div className="row mt-4">
      <div className="col-12">
        <h2 className="text-muted">Sign Up Page</h2>
      </div>
      <div className="d-flex justify-content-center">
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUpPage;
