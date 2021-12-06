import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const CreateNewTodoForm = () => {
	const inputTitle = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();
		// make firestore doc, plz

		// ignored the empty input
		if (!inputTitle.current.value) {
			return;
		}

		// const ref = collection(db, 'todos')
		// const docRef = await addDoc(ref, {})
		const docRef = await addDoc(collection(db, "todos"), {
			title: inputTitle.current.value,
			completed: false,
    });
    
    inputTitle.current.value='';
    
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
