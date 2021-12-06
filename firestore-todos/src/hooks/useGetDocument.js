import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const useGetDocument = (col, id) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
    const getTodo = async () => {
		console.log("getTodo triggered");
		setLoading(true);
		// get doc reference
		const ref = doc(db, col, id);

		const snabshot = await getDoc(ref);
		console.log("snab", snabshot);
		if (!snabshot.exists()) {
			setData(false);
			setLoading(false);
			return;
		}
		setData(snabshot.data());
		console.log("data from hook", data);
		setLoading(false);
	};


	useEffect( () => {
		getTodo()
  }, [id]);
  

	return {getTodo, loading, data };

}

export default useGetDocument
