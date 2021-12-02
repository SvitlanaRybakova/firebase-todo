import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import useGetTodo from "../hooks/useGetTodo";

const TodoPage = () => {
	const { id } = useParams();
	const { loading, todo } = useGetTodo(id);

	return (
		<Container className="py-3">
			<div className="d-flex justify-content-between align-items-center mb-3">
				<h1>{id}</h1>

				<Button onClick={() => {}}>Refresh</Button>
			</div>
			{loading && <p>Loading...</p>}
			{todo && <p>{todo.title}</p>}
			<ButtonGroup className="todo-actions">
				<Button variant="primary" onClick={() => {}}>
					Toggle
				</Button>
				<Button variant="danger" onClick={() => {}}>
					Delete
				</Button>
			</ButtonGroup>
		</Container>
	);
};

export default TodoPage;
