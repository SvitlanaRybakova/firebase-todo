import useGetDocument from "./useGetDocument";
import useStreamDocument from "./useStreamDocument";

const useGetTodo = (id) => {
	
	// return useGetDocument('todos', id)
	return useStreamDocument('todos', id)
};
export default useGetTodo;
