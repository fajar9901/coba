import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
class table extends Component {
 
    render() {
        const prmData = this.props.data;
        return (
            <tr >
                <td>{prmData.id}</td>
                <td>{prmData.nama}</td>
                <td>{prmData.telpon}</td>
                <td>{prmData.alamat}</td>
                <td>
                    {/* <Button href="Formtbhdata" variant="primary"> Edit </Button> */}
                    {/* <button className="my-button btn-blue" href="Formtbhdata" >Edit</button> */}
                    <button className="my-button btn-red" onClick={() => this.props.remove(prmData.id)} >Delete</button>
                </td>
            </tr>
        );
    }
}
 
export default table;