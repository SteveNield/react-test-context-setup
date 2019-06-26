const React = require('react');
const useContext = React.useContext;

module.exports = ({ Context }) => {
  const { state } = useContext(Context);

  return (
    <div>
      {
        Object.keys(state).map(s => {
          return (
            <div
              key={`test-element_${s}`}
              data-testid={s}>{state[s]}</div>
          );
        })
      }
    </div>
  );
}