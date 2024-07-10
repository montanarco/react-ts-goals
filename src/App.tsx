import CourseGoal from "./components/CourseGoalComp.tsx"
import Header from "./components/Header.tsx";
import goalsImage from "../assets/goals.jpg"
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: string;
}

function App() {

  const[goals, setGoals] = useState<CourseGoal[]>([]);

  function addGoalHandler(goal: string, summary: string) {
    setGoals(prevGoals=>{
      const newGoal: CourseGoal = {
        id: Math.random().toString(), 
        title: goal, 
        description: summary};
      return [...prevGoals, newGoal]
    });
  }

  function handleDeleteGoal(goalId: string) {
    setGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  }

  return (<main>
    <Header image= {{ src: goalsImage, alt: "a list of goals"}}>
      <h1>Course Goals</h1>
    </Header>
    <NewGoal onAddGoal={addGoalHandler}/>
    <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
  </main> );
    
}

export default App ;
