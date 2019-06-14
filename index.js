import React, { useContext } from 'react';

export default ({ Context }) => {
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