import Navbar from "./components/Navbar";
import { TodoList } from "./features/TodoList";


function App() {
  return (
    <div className="md:px-[200px] md:pt-16 lg:px-[300px] xl:px-[450px] lg:pt-16 px-7 pt-[110px] text-sm">
      <Navbar />
      <TodoList />
    </div>
  );
}

export default App;
