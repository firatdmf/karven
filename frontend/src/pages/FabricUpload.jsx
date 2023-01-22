import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FabricForm from "../components/FabricForm";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function FabricUpload() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); //just initializing the dispatch


  const { user } = useSelector((state) => state.auth); //useSelector takes in a function and that function takes in a state
  const {isLoading, isError, message } = useSelector(
    (state) => state.fabrics
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
    // dispatch(getFabrics()); //that will fetch the goals from the backend and put it in the const variable goals that we created at the top so we have access to it

    //now when we leave the dashboard we want the goals to clear so..
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <FabricForm />
    </div>
  );
}

export default FabricUpload;
