import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { collection, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import CreateNewTodoForm from "../components/CreateNewTodoForm";
import useGetTodos from "../hooks/useGetTodos";
import { firebaseTimestampToString } from "../helpers/time";
import { useAuthContext } from "../contexts/AuthContext";
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

	const { currentUser } = useAuthContext();

	console.log(currentUser);
	// guery for firebase
	const queryFef = query(
		collection(db, "todos"),
		where("user", "==", currentUser.uid),
		orderBy("timestamp", "desc")
	);
	const { data, isLoading } = useFirestoreQueryData(
		["todos"],
		queryFef,
		{
			subscribe: true,
			idField: "id",
		},
		{
			refetchOnMount: "always",
		}
	);
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
							{data.map((todo, index) => {
								const timestamp = firebaseTimestampToString(
									todo.timestamp
								);
								const statusClass = todo.completed
									? "completed"
									: "not-completed";

								return (
									<ListGroup.Item
										as={Link}
										action
										to={`/todos/${todo.id}`}
										className={`${statusClass} d-flex justify-content-between align-items-center`}
										key={index}
									>
										<span>{todo.title}</span>
										<div className="timestamp">
											{timestamp ?? "-"}
										</div>
									</ListGroup.Item>
								);
							})}
						</ListGroup>
					) : (
						<p>Yay, you have NO todos 🥳!</p>
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
