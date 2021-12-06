import useGetCollection from "./useGetCollection";
import useStreamCollection from "./useStreamCollection";

const useGetTodos = () => {
	// return useGetCollection("todos");
	return useStreamCollection('todos')
};

export default useGetTodos;
