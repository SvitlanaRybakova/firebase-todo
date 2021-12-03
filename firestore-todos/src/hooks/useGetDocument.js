import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const useGetDocument = (col, id) => {
  const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(async () => {
		setLoading(true);
		// get doc reference
		const ref = doc(db, col, id);

		const snabshot = await getDoc(ref);
    console.log("snab", snabshot);
    if(!snabshot.exists()){
      setData(false)
      setLoading(false)
      return
    }
    setData(snabshot.data())
    console.log('data from hook', data);
    setLoading(false)

  }, [id]);
  
  const getTodo = () => {
    console.log("MORE TODOS!!!");
  }

	return {getTodo, loading, data };

}

export default useGetDocument
