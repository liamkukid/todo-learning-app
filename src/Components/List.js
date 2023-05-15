import PropTypes from 'prop-types';

export default function List({ todos }) {
  function dotosList() {
    if (!todos || todos.length === 0) {
      return [];
    }
    const rowsArr = [];
    for (let j = 0; j < todos.length; j++) {
      rowsArr.push(
        <div key={j} className="list_item">
          {todos[j].title}
        </div>
      );
    }
    return rowsArr;
  }

  return <div className="list">{dotosList()}</div>;
}

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
};

List.defaultProps = {
  todos: [],
};
