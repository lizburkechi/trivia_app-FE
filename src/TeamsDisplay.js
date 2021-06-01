import React from "react";
import { Table } from "react-bootstrap";

class TeamsDisplay extends Component {
  render() {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Red Team</th>
            <th>Blue Team</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Guilherme</td>
            <td>Big Bird</td>
            <td>Grover</td>
            <td>Oscar</td>
          </tr>
          <tr>
            <td>Liz</td>
            <td>Jacki</td>
            <td>Delance</td>
            <td>Obie</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default TeamsDisplay;
