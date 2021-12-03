import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const useGetCollection = (col) => {
	const [data, setData] = useState([]);
	const [loading, setLoadind] = useState(true);

	useEffect(async () => {
		// get collection reference
		const colRef = collection(db, col);
		// create snabshot
		const snabshot = await getDocs(colRef);

		// get data from firestore
		const result = snabshot.docs.map((doc) => {
			return {
				id: doc.id,
				...doc.data(), //title, completed
			};
		});
    setData(result);
		setLoadind(false);
	}, []);

	return {  data, loading };
};

export default useGetCollection;
