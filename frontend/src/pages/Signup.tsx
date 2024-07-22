import Form from "../components/Form";
import Label from "../components/Label";

const Signup = () => {
  return (
    <div className="flex w-screen h-screen items-center">
      <div className="w-full md:w-1/2 h-full">
        <Form type="signup" />
      </div>
      <div className="hidden md:block w-1/2 h-full">
        <Label />
      </div>
    </div>
  );
};

export default Signup;
