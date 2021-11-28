import { ReactElement } from 'react';
import CheckboxPropsInterface from './CheckboxPropsInterface';


const Checkbox: React.FC<CheckboxPropsInterface> = ({ id, name, checked, stateCallback, label }: CheckboxPropsInterface): ReactElement => {
    return <>
        <input
            type="checkbox"
            onClick={(e) => stateCallback(e.currentTarget.checked)}
            id={id}
            name={name}
            checked={checked}
        />
        <label htmlFor={name}> {label} </label>
    </>;
}

export default Checkbox;
