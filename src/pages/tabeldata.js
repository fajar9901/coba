import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Tabeldata extends Component {
 
    render() {
        const data = this.props.data;
        return (
            <tr >
                <td>{data.id}</td>
                <td>{data.kdmtk}</td>
                <td>{data.namamtk}</td>
                <td>{data.sks}</td>
                <td>
                    {/* <Button href="Formtbhdata" variant="primary"> Edit </Button> */}
                    {/* <button className="my-button btn-blue" href="Formtbhdata" >Edit</button> */}
                    <button className="my-button btn-red" onClick={() => this.props.remove(data.id)} >Delete</button>
                </td>
            </tr>
        );
    }
}
 
export default Tabeldata;