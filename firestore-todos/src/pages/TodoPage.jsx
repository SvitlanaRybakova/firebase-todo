import React from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useGetTodo from "../hooks/useGetTodo";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

const TodoPage = () => {
	const { id } = useParams();
	const { getTodo, loading, data } = useGetTodo(id);

	const toggleTodo = async () => {
		const ref = doc(db, "todos", id);
		await updateDoc(ref, {
			completed: !data.completed,
		});
		getTodo()
	};

	
	return (
		<Container className="py-3">
			{loading && <p>Loading...</p>}
			{data && (
				<>
					<div className="d-flex justify-content-between align-items-center mb-3">
						<h1>{data.title}</h1>

						<Button
							onClick={getTodo}>
							Refresh
						</Button>
					</div>
					<p className="display-1">{data.completed ? "🥳" : "🥵"}</p>
					<ButtonGroup className="todo-actions">
						<Button variant="primary" onClick={toggleTodo}>
							Toggle
						</Button>
						<Button variant="danger" onClick={() => {}}>
							Delete
						</Button>
					</ButtonGroup>
				</>
			)}
		</Container>
	);
};

export default TodoPage;
