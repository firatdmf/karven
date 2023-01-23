import FabricItem from "../components/FabricItem";
import { getFabrics } from "../features/fabrics/fabricSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import classes from "./Fabrics.module.css";
import FilterForm from "../components/FilterForm";
// import { motion, AnimatePresence } from "framer-motion";

function Fabrics() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { fabrics, isLoading, isError, message } = useSelector(
    (state) => state.fabrics
  );

  // const [filtered, setFiltered] = useState([])
  // const [activeGenre, setActiveGenre] = useState("")
  const [selectedOrigin, setSelectedOrigin] = useState({
    "United States": false,
    Italy: false,
  });
  const [selectedEndUse, setSelectedEndUse] = useState({
    drapery: false,
    upholstery: false,
    multipurpose: false,
  });
  const [allStates, setAllStates] = useState({
    selectedEndUse,
    selectedOrigin,
  });
  const [filteredFabrics, setFilteredFabrics] = useState({});
  // const [draperyChecked, setDraperyChecked] = useState(false);
  // const [upholsteryChecked, setUpholsteryChecked] = useState(false);
  // const [multipurposeChecked, setMultipurposeChecked] = useState(false);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getFabrics());
    //that will fetch the goals from the backend and put it in the const variable goals that we created at the top so we have access to it

    //now when we leave the dashboard we want the goals to clear so..
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className={classes.bread}>
        Home <span style={{ fontSize: "10px" }}>{">"}</span> Fabrics
      </div>
      <section className={classes.container}>
        <div className={classes.cover}>
          <div className={classes.headlineBox}>Fabric</div>
        </div>
        <div className={classes.filter}>
          <FilterForm
            fabrics={fabrics}
            selectedOrigin={selectedOrigin}
            setSelectedOrigin={setSelectedOrigin}
            // draperyChecked={draperyChecked}
            // setDraperyChecked={setDraperyChecked}
            // upholsteryChecked={upholsteryChecked}
            // setUpholsteryChecked={setUpholsteryChecked}
            // multipurposeChecked={multipurposeChecked}
            // setMultipurposeChecked={setMultipurposeChecked}
            selectedEndUse={selectedEndUse}
            setSelectedEndUse={setSelectedEndUse}
            setFilteredFabrics={setFilteredFabrics}
            allStates={allStates}
            setAllStates={setAllStates}
          />
        </div>

        {/* Now on the product display section */}
        {filteredFabrics.length > 0 ? (
          <div className={classes.fabrics}>
            {filteredFabrics.map((fabric) => (
                <FabricItem key={fabric._id} fabric={fabric} />
            ))}
          </div>
        ) : (
          <h3>You have not set any fabric</h3>
        )}
      </section>
    </>
  );
}

export default Fabrics;
