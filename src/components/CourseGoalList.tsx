import { ReactNode } from "react";
import { CourseGoal } from "../App";
import CourseGoalComp from "./CourseGoalComp";
import InfoBox from "./InfoBox";

interface CourseGoalListProps {
    goals: CourseGoal[];
    onDeleteGoal: (id: string) => void;
  }
  

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {

    if(goals.length === 0) {
        return <InfoBox mode="info">No goals found. Maybe add one?</InfoBox>
        }

        let warningBox: ReactNode;
        if(goals.length >= 4) {
            warningBox = (
                <InfoBox mode="warning" severity="high">You have a lot of goals. Consider comleting these before pushing for more.</InfoBox>
            );
        }
        return ( 
        <>
            {warningBox}
            <ul>
                {goals.map( goal =>(
                <li>
                    <CourseGoalComp 
                        title= {goal.title} 
                        key={goal.id}
                        id={goal.id}
                        onDelete={onDeleteGoal} >
                            <p>{goal.description}</p>
                    </CourseGoalComp>
                </li>
            ))}
            </ul> 
        </>
        );
 
}