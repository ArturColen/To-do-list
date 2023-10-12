import { CheckboxCompleted, DeleteButton, TasksList ,TaskListItem, TaskText, WarningText } from '../../assets/styles/TaskList/TaskList.style';

export function TaskList({ tasks, onCompleteTask, onDeleteTask, currentPage }) {
    return (
        <TasksList>
            {tasks.length === 0 ? (
                <WarningText>
                    {currentPage === 'ativos' ? 'Não há tarefas pendentes.' : 'Não há tarefas concluídas.'}
                </WarningText>
            ) : (
                tasks.map((task) => (
                    <TaskListItem key={task.id}>
                        <CheckboxCompleted
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => onCompleteTask(task.id)} 
                        />
                        <TaskText>{task.text}</TaskText>
                        <DeleteButton onClick={() => onDeleteTask(task.id)}>Excluir</DeleteButton>
                    </TaskListItem>
                ))
            )}
        </TasksList>
    );
}