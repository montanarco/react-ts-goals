import { type PropsWithChildren } from 'react';

type CourseGoalProps = PropsWithChildren<{ 
  id: string,
  title: string, 
  onDelete: (id: string) => void 
}>;

export default function CourseGoalComp({ id, title, children, onDelete}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={ () => onDelete(id)}>Delete</button>
    </article>
  );
}
