import React, {Component} from "react";
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class AddTeams extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Add Teams
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <div className="team-container" >
                   To Add Form Fields for Teams
               </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        )
    }


}
