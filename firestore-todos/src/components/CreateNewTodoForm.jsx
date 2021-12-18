import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp, doc } from "firebase/firestore";
import { useAuthContext } from "../contexts/AuthContext";
//
const CreateNewTodoForm = () => {
	const inputTitle = useRef();
	const { currentUser } = useAuthContext();
	const handleSubmit = async (e) => {
		e.preventDefault();
		// make firestore doc, plz

		console.log(currentUser);
		// ignored the empty input
		if (!inputTitle.current.value) {
			return;
		}

		// *create ref to users/id collection (users/Vm9UKtJdi7X2pCneqcpJ70sVSj72)
		// const refUser = doc(db, "users", currentUser.uid);

		// const ref = collection(db, 'todos')
		// const docRef = await addDoc(ref, {})
		const docRef = await addDoc(collection(db, "todos"), {
			title: inputTitle.current.value,
			completed: false,
			timestamp: serverTimestamp(),
			// user: refUser,
			user: currentUser.uid,
		});

		inputTitle.current.value = "";
	};
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className="md-2" controlId="title">
				<Form.Label> Todo title</Form.Label>
				<Form.Control type="text" ref={inputTitle} />
			</Form.Group>

			<Button type="submit" variant="success">
				Create
			</Button>
		</Form>
	);
};

export default CreateNewTodoForm;
