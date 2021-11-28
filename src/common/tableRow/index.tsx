import React from 'react';
import DataInterface from '../../components/home/data.interface';
import Status from '../../components/home/status.enum';
import TableRowInterface from './tableRow.interface';

const TableRow: React.FC<TableRowInterface> = ({ data }: TableRowInterface): JSX.Element => {

    function buildStatusIcon(data: DataInterface): string {
        let icon: string = "&#x2714;";
        if (data.status === Status.COMPLETE) icon = "&#x2714;";
        if (data.status === Status.INCOMPLETE) icon = "&#x2718;";
        if (data.status === Status.ERROR) icon = "&#9888;";
        return icon;
    }

    return <>
        <tr>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.carrier}</td>
            <td>
                {buildStatusIcon(data)}
            </td>
            <td>{data.eventDate}</td>
        </tr></>;
}

export default TableRow;