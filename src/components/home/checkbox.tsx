import React from 'react';
import Checkbox from '../../common/checkbox';
import CheckboxInterface from './checkbox.interface';

const StatusCheckBoxDiv: React.FC<CheckboxInterface> = ({ states, callbacks }: CheckboxInterface): JSX.Element => {


    return (
        <div
            id="statusCheckBoxDiv"
            className=""
            style={{
                display: "none",
                border: "1px solid black",
                position: "absolute",
                background: "white",
            }}
        >
            <Checkbox id="complete" name="complete" stateCallback={callbacks[0]} checked={states[0]} label="Complete" />
            <br></br>
            <Checkbox id="incomplete" name="incomplete" stateCallback={callbacks[1]} checked={states[1]} label="Incomplete" />
            <br></br>
            <Checkbox id="errored" name="errored" stateCallback={callbacks[2]} checked={states[2]} label="Errored" />

        </div>
    );
}

export default StatusCheckBoxDiv;