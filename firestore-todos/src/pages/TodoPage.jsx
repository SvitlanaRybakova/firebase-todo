import React from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useGetTodo from "../hooks/useGetTodo";

const TodoPage = () => {
	const { id } = useParams();
	const { getTodo, loading, data } = useGetTodo(id);

	return (
		<Container className="py-3">
			{loading && <p>Loading...</p>}
			{data && (
				<>
					<div className="d-flex justify-content-between align-items-center mb-3">
						<h1>{data.title}</h1>

						<Button onClick={() => {getTodo()}}>Refresh</Button>
					</div>
					<p className="display-1">{data.completed ? "🥳" : "🥵"}</p>
					<ButtonGroup className="todo-actions">
						<Button variant="primary" onClick={() => {}}>
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
