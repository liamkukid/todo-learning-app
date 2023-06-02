import reducer, {
  addTodo,
  todoDone,
  todoRemove,
  removeCompleted,
} from '../../features/todosSlice';

const todoUuid = '14e520cd-63f2-485e-9b3b-072ce068554e';
jest.mock('uuid', () => ({ v4: () => todoUuid }));

describe('todoReducer should', () => {
  test('add new todo', () => {
    const previousState = [];
    const todoTitle = 'new todo';
    expect(reducer(previousState, addTodo(todoTitle))).toEqual([
      { title: todoTitle, done: false, id: todoUuid },
    ]);
  });

  test('remove completed todos', () => {
    const previousState = [{ done: false }, { done: true }];
    expect(reducer(previousState, removeCompleted())).toEqual([
      { done: false },
    ]);
  });

  test('remove todo', () => {
    const previousState = [{ id: todoUuid, done: false }];
    expect(reducer(previousState, todoRemove(todoUuid))).toEqual([]);
  });

  test('make todo done=true', () => {
    const previousState = [
      { id: todoUuid, done: false },
      { id: '1', done: true },
    ];
    expect(
      reducer(previousState, todoDone({ id: todoUuid, done: true }))
    ).toEqual([
      { id: todoUuid, done: true },
      { id: '1', done: true },
    ]);
  });
});
