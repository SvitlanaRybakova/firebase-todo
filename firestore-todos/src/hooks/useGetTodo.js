import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const useGetTodo = (id) => {
	const [loading, setLoading] = useState(true);
	const [todo, setTodo] = useState([]);

	useEffect(async () => {
		setLoading(true);
		// get doc reference
		const ref = doc(db, "todos", id);

		const snabshot = await getDoc(ref);
    // console.log("snab", snabshot);
    if(!snabshot.exists()){
      setTodo(false)
      setLoading(false)
      return
    }
    setTodo(snabshot.data())
    setLoading(false)

	}, [id]);

	return { loading, todo };
};
export default useGetTodo;
