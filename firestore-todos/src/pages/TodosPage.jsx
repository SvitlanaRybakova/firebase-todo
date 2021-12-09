import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import CreateNewTodoForm from "../components/CreateNewTodoForm";
import useGetTodos from "../hooks/useGetTodos";
import { db } from "../firebase";
// const todos = [
// 	{
// 		id: '14c9b3244b4a',
// 		title: 'Learn React 😊',
// 		completed: true,
// 	},
// 	{
// 		id: '5e584050fc4f',
// 		title: 'Learn Firebase 🔥',
// 		completed: false,
// 	},
// 	{
// 		id: 'd3329c34dc67',
// 		title: 'Profit 💰',
// 		completed: false,
// 	},
// 	{
// 		id: '44fd9cc7e1a4',
// 		title: 'Take over the world 😈',
// 		completed: false,
// 	}
// ]

const TodosPage = () => {
	// const { data, loading } = useGetTodos();

	const queryFef = query(collection(db, "todos"), orderBy("timestamp","desc"));
	const { data, isLoading } = useFirestoreQueryData(["todos"], queryFef, {
		subscribe: true,
	});
	console.log(data);
	return (
		<Container className="py-3">
			<div className="d-flex justify-content-between align-items-center mb-3">
				<h1>Todos</h1>
				{/* <Button onClick={() => {getData()}}>Refresh</Button> */}
			</div>
			{isLoading && <p>Loading...</p>}
			{data && (
				<>
					{data.length ? (
						<ListGroup>
							{data.map((todo, index) => (
								<ListGroup.Item
									style={{
										display: "flex",
										justifyContent: "space-between",
									}}
									as={Link}
									action
									to={`/todos/${todo.id}`}
									key={index}
								>
									{todo.title}
									<span className="mx-5">
										{todo.completed ? "🥳" : "🥵"}
									</span>
								</ListGroup.Item>
							))}
						</ListGroup>
					) : (
						<p>You have No todos!!</p>
					)}
				</>
			)}

			<hr className="my-4" />
			<h2>Got more to do?</h2>
			<CreateNewTodoForm />
		</Container>
	);
};

export default TodosPage;
