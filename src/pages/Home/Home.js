import React, { useState } from "react";
import { Col, Modal, ProgressBar, Row, Tab, Tabs } from "react-bootstrap";
import AddNewTask from "../../Components/Home/AddNewTask";
import MainLayout from "../../Layout/MainLayout";
import { taskData } from "../../assets/dummyData/taskData";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <MainLayout>
      <Modal show={show} onHide={handleClose} className="modal-form-wrap">
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="add-new-task-form-wrap">
            <AddNewTask />
          </div>
        </Modal.Body>
      </Modal>
      <div className="main-task-page">
        <div className="task-info-top">
          <Row>
            <Col lg="3">
              <div className="single-task-info card-1">
                <h3>Task in Progress</h3>
                <h4>5 Tasks</h4>
                <p>Assign date:</p>
              </div>
            </Col>
            <Col lg="3">
              <div className="single-task-info card-2">
                <h3>New Task assign</h3>
                <h4>11 Tasks</h4>
                <p>Assign date:</p>
              </div>
            </Col>
            <Col lg="3">
              <div className="single-task-info card-3">
                <h3>Complete Tasks</h3>
                <h4>7 Tasks</h4>
                <p></p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="task-list-wrap">
          <div className="task-list-header">
            <h4>My Tasks</h4>
            <button onClick={handleShow}>Add task</button>
          </div>
          <Tabs
            defaultActiveKey="in-progress"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="in-progress" title="In Progress">
              <div className="task-view-card-wrap">
                {taskData &&
                  taskData?.map((task, idx) => (
                    <div className="single-task-view-card" key={idx}>
                      <div className="project-name">{task?.projectName}</div>
                      <div className="admin-name">{task?.teamAdmin}</div>
                      <div className="progress-bar">
                        <ProgressBar
                          now={task?.progress}
                          label={`${task?.progress}%`}
                        />
                      </div>
                      <button>View</button>
                    </div>
                  ))}
              </div>
            </Tab>
            <Tab eventKey="new-assign" title="New Assign task">
              Tab content for Profile
            </Tab>
            <Tab eventKey="completed" title="Completed">
              Tab content for Contact
            </Tab>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
