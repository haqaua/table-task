import React, { ReactElement } from 'react';
import DataInterface from './data.interface';
import data from '../../utils/data.json'
import Checkbox from '../../common/checkbox';
import StatusCheckBoxDiv from './checkbox';
import Status from './status.enum';
import TableRow from '../../common/tableRow';

const Home: React.FC = (): ReactElement => {
    const [filteredData, setFilteredData] = React.useState<DataInterface[]>(data);

    const [complete, setComplete] = React.useState(true);
    const [incomplete, setIncomplete] = React.useState(true);
    const [error, setError] = React.useState(true);


    function toggleDropdown(): void {
        const div: HTMLElement | null = document.getElementById("statusCheckBoxDiv");
        if (div != null)
            div.style.display === "block"
                ? (div.style.display = "none")
                : (div.style.display = "block");
    }

    return (
        <div className="App" style={{ height: "100vh" }}>
            <table
                width="50%"
                style={{
                    margin: "auto",
                }}
            >
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Carrier</td>
                        <td>
                            <span style={{ cursor: "pointer" }} onClick={toggleDropdown}>
                                Status &#9660;
                            </span>
                            <StatusCheckBoxDiv states={[complete, incomplete, error]} callbacks={[setComplete, setIncomplete, setError]} />
                        </td>
                        <td>Date</td>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((element) => {
                        if (
                            (element.status === Status.COMPLETE && complete) ||
                            (element.status === Status.INCOMPLETE && incomplete) ||
                            (element.status === Status.ERROR && error)
                        )
                            return <TableRow data={element} />
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Home;