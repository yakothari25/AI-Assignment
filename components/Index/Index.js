import React from 'react';
import './Index.scss'
import Circle from '../Circle/Circle'
const Index = () => {
    return (<div className="table-users">
        <div className="header">Index</div>
        <table >
            <tbody>
                <tr>
                    <th>Color</th>
                    <th>Represents</th>
                </tr>

                <tr>
                    <td><Circle color = 'blue'/></td>
                    <td>Source & Destination</td>


                </tr>

                <tr>
                <td><Circle color = 'red'/></td>
                    <td>Path</td>


                </tr>

                <tr>
                <td><Circle color = 'green'/></td>
                    <td>traversed Node</td>

                </tr>

                
            </tbody>
        </table>
    </div>);
}

export default Index;