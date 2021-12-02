import React, { useEffect, useState } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

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
	const [todos, setTodos] = useState([]);
	const [setLoading, setLoadind] = useState(true);

	useEffect(async() => {
		// get collection reference
		const colRef = collection(db, 'todos')
		// create snabshot
		const snabshot = await getDocs(colRef);
	
	}, []);


	return (
		<Container className="py-3">
			<div className="d-flex justify-content-between align-items-center mb-3">
				<h1>Todos</h1>
				<Button onClick={() => {}}>Refresh</Button>
			</div>

			<ListGroup>
				{todos.map((todo, index) => (
					<ListGroup.Item
						action
						href={`/todos/${todo.id}`}
						key={index}
					>
						{todo.title}
					</ListGroup.Item>
				))}
			</ListGroup>
		</Container>
	);
};

export default TodosPage;
