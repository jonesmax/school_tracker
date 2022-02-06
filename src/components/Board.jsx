import React from "react";
import axios from "axios";
import moment from "moment";
import styles from "../css/login.css";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  NavDropdown,
  Tab,
} from "react-bootstrap";
import {
  Dropdown,
  Icon,
  Button,
  Card,
  Divider,
  Segment,
  Checkbox,
  Input,
  Label,
  Loading,
  Loader,
  Dimmer,
  List,
  Table,
  Container,
  Modal,
  TableRow,
} from "semantic-ui-react";

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      user: this.props,
      classes: null,
      colors: ["teal", "blue", "purple", "cyan"],
      assignments: null,
      schedule: null,
      modal: false,
      currentAssignment: { name: "None Selected" },
      today: null,
      notes: null,
      modal2: false,
      currentNote: { content: "None Selected" },
      hours: [],
      currentHours: 0,
    };
  }

  async getData(user_id) {
    axios
      .get("https://maxwelljonesdesign.com/schedule/" + user_id)
      .then((res) => {
        if (res.data) {
          this.setState({ schedule: res.data });
        } else {
        }
      });

    axios
      .get("https://maxwelljonesdesign.com/assignments/" + user_id)
      .then((res) => {
        if (res.data) {
          this.setState({ assignments: res.data });
        } else {
        }
      });

    axios.get("https://maxwelljonesdesign.com/notes/" + user_id).then((res) => {
      if (res.data) {
        this.setState({ notes: res.data });
      } else {
      }
    });

    axios
      .get("https://maxwelljonesdesign.com/classes/" + user_id)
      .then((res) => {
        if (res.data) {
          this.setState({ classes: res.data });
        } else {
        }
      });

    axios.get("https://maxwelljonesdesign.com/hours/" + user_id).then((res) => {
      if (res.data) {
        let hours = 0;
        res.data.forEach((item) => {
          hours += item.hours;
        });
        console.log(res.data);
        this.setState({ hours: res.data, currentHours: hours });
      } else {
      }
    });
  }

  componentDidMount() {
    this.getData(this.props.user.id);
  }

  logout() {
    console.log("logging out");
    localStorage.setItem("user", null);
    this.setState({ user: null });
    window.location.reload(true);
  }

  createClass() {
    var name = prompt("Please enter the name of the class");
    var prof = prompt("Please enter the prof of the class");

    let classObject = {
      user_id: this.props.user.id,
      name: name,
      prof: prof,
    };
    axios
      .post("https://maxwelljonesdesign.com/classes/create", classObject)
      .then((res) => {
        if (res.data) {
          console.log("success");
          window.location.reload(true);
        } else {
          console.log("fail");
        }
      });
  }

  createSchedule() {
    let list = "";
    let classes = this.state.classes;

    classes.forEach((element) => {
      list += "\nID: " + element.id + " - " + element.name;
    });

    var class_id = prompt("Please enter the id of the class," + list);
    var dayOfWeek = prompt("Please enter the day of the week");
    var timeStart = prompt("Please enter when the class starts");
    var length = prompt("Please enter the length of the class");
    var link = prompt("Please enter the link (optional)");

    let scheduleObj = {
      user_id: this.props.user.id,
      class_id: class_id,
      dayOfWeek: dayOfWeek,
      timeStart: timeStart,
      length: length,
      link: link,
    };

    axios
      .post("https://maxwelljonesdesign.com/schedule/create", scheduleObj)
      .then((res) => {
        if (res.data) {
          console.log("success");
          window.location.reload(true);
        } else {
          console.log("fail");
        }
      });
  }

  createAssignment() {
    let list = "";
    let classes = this.state.classes;

    classes.forEach((element) => {
      list += "\nId: " + element.id + " - " + element.name + " ";
    });

    var class_id = prompt("Please enter the id of the class," + list);
    var due_date = prompt("Please enter the due date (yyyy-mm-dd)");
    var name = prompt("Please enter the name");
    var importance = prompt("Please enter the importance (1-10)");
    var link = prompt("Please enter the link (optional)");
    var type = prompt(
      "Please enter the type (0 = assignemnt/lab 1 = evalulation)"
    );

    let assignment = {
      user_id: this.props.user.id,
      class_id: class_id,
      due_date: due_date,
      name: name,
      importance: importance,
      type: type,
      status: 0,
      link: link,
    };

    axios
      .post("https://maxwelljonesdesign.com/assignments/create", assignment)
      .then((res) => {
        if (res.data) {
          console.log("success");
          window.location.reload(true);
        } else {
          console.log("fail");
        }
      });
  }

  deleteClass(e) {
    axios
      .get("https://maxwelljonesdesign.com/classes/delete/" + e.id)
      .then((res) => {
        if (res.status === 200) {
          console.log("success");
          window.location.reload(true);
        } else {
          console.log("fail");
        }
      });
  }

  preDeleteAsign(e) {
    this.setState({ currentAssignment: e, modal: true });
  }

  preDeleteNote(e) {
    this.setState({ currentNote: e, modal2: true });
  }

  deleteAssignment() {
    let e = this.state.currentAssignment;
    axios
      .get("https://maxwelljonesdesign.com/assignments/delete/" + e.id)
      .then((res) => {
        if (res.status === 200) {
          console.log("success");
          window.location.reload(true);
        } else {
          console.log("fail");
        }
      });
  }

  deleteSchedule(e) {
    axios
      .get("https://maxwelljonesdesign.com/schedule/delete/" + e.id)
      .then((res) => {
        if (res.status === 200) {
          console.log("success");
          window.location.reload(true);
        } else {
          console.log("fail");
        }
      });
  }

  deleteHour(e) {
    axios
      .get("https://maxwelljonesdesign.com/hours/delete/" + e.id)
      .then((res) => {
        if (res.status === 200) {
          console.log("success");
          window.location.reload(true);
        } else {
          console.log("fail");
        }
      });
  }

  navBar() {
    return (
      <div
        style={{
          width: "100%",
          padding: ".75rem",
          backgroundColor: "rgba(33,43,78,255)",
        }}
      >
        <Button
          style={{ backgroundColor: "rgba(33,53,108,255)", color: "white" }}
        >
          <Dropdown text="Classes" pointing>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => this.createClass()}>
                Create
              </Dropdown.Item>
              <Dropdown.Item>
                <Dropdown text="Delete" pointing>
                  <Dropdown.Menu>
                    {this.state.classes &&
                      this.state.classes.map((item) => (
                        <Dropdown.Item
                          key={item.id}
                          onClick={() => this.deleteClass(item)}
                        >
                          {item.name}
                        </Dropdown.Item>
                      ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Button>
        <Button
          style={{ backgroundColor: "rgba(33,53,108,255)", color: "white" }}
        >
          <Dropdown text="Schedule" pointing>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => this.createSchedule()}>
                Create
              </Dropdown.Item>
              <Dropdown.Item>
                <Dropdown text="Delete" pointing>
                  <Dropdown.Menu>
                    {this.state.schedule &&
                      this.state.schedule.map((item) => (
                        <Dropdown.Item
                          key={item.id}
                          onClick={() => this.deleteSchedule(item)}
                        >
                          {item.class_id} - {item.dayOfWeek} at {item.timeStart}
                        </Dropdown.Item>
                      ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Button>
        <Button
          onClick={() => this.logout()}
          style={{
            float: "right",
            margin: "auto",
            textAlign: "center",
            backgroundColor: "rgba(33,53,108,255)",
            color: "white",
            marginRight: "5px",
          }}
        >
          <Icon style={{ textAlign: "center", margin: "auto" }} name="unlock" />
        </Button>
      </div>
    );
  }

  getDate(date) {
    date = new Date(date);
    let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayOfWeek = weekday[date.getUTCDay()];
    let formatedDate =
      date.getUTCMonth() +
      1 +
      "/" +
      (date.getUTCDate() < 9 ? "" + date.getUTCDate() : date.getUTCDate()) +
      " " +
      dayOfWeek;
    return formatedDate;
  }

  getToday() {
    var objToday = new Date(),
      weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      dayOfWeek = weekday[objToday.getDay()],
      dayOfMonth =
        objToday.getDate() < 10 ? "0" + objToday.getDate() : objToday.getDate(),
      months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      curMonth = months[objToday.getMonth()],
      curYear = objToday.getFullYear(),
      curHour =
        objToday.getHours() > 12
          ? objToday.getHours() - 12
          : objToday.getHours() < 10
          ? "0" + objToday.getHours()
          : objToday.getHours(),
      curMinute =
        objToday.getMinutes() < 10
          ? "0" + objToday.getMinutes()
          : objToday.getMinutes(),
      curMeridiem = objToday.getHours() > 12 ? "pm" : "am";
    var today =
      curHour +
      ":" +
      curMinute +
      curMeridiem +
      " " +
      dayOfWeek +
      " " +
      dayOfMonth +
      " " +
      curMonth +
      ", " +
      curYear;
    return today;
  }

  getDaysFromDay(date) {
    let realDate = moment(date);
    let today = moment();

    return realDate.diff(today, "days") + 1;
  }

  tableBoard(assignments) {
    return assignments
      .sort(function (a, b) {
        return new Date(a.due_date) - new Date(b.due_date);
      })
      .map((item) => (
        <Table.Row
          onClick={() => this.preDeleteAsign(item)}
          color="blue"
          key={item.id}
        >
          <Table.Cell id="tbody">{this.getClassName(item.class_id)}</Table.Cell>
          <Table.Cell id="tbody">{item.name}</Table.Cell>
          <Table.Cell id="tbody">{this.getDate(item.due_date)}</Table.Cell>
          <Table.Cell id="tbody">
            {this.getDaysFromDay(item.due_date)}
          </Table.Cell>
        </Table.Row>
      ));
  }

  getClassName(id) {
    let classes = this.state.classes;

    for (let i = 0; i < classes.length; i++) {
      if (classes[i].id === id) {
        return classes[i].name;
      }
    }

    return "error";
  }

  closeModal() {
    this.setState({ modal: false });
  }

  closeModal2() {
    this.setState({ modal2: false });
  }

  click(direction) {
    var objToday = new Date();
    let weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let today;
    if (this.state.today === null) {
      today = weekday[objToday.getDay()];
    } else {
      today = this.state.today;
    }

    if (direction === "left") {
      if (today === "Sunday") today = "Saturday";
      else if (today === "Monday") today = "Sunday";
      else if (today === "Tuesday") today = "Monday";
      else if (today === "Wednesday") today = "Tuesday";
      else if (today === "Thursday") today = "Wednesday";
      else if (today === "Friday") today = "Thursday";
      else if (today === "Saturday") today = "Friday";
    }
    if (direction === "right") {
      if (today === "Sunday") today = "Monday";
      else if (today === "Monday") today = "Tuesday";
      else if (today === "Tuesday") today = "Wednesday";
      else if (today === "Wednesday") today = "Thursday";
      else if (today === "Thursday") today = "Friday";
      else if (today === "Friday") today = "Saturday";
      else if (today === "Saturday") today = "Sunday";
    }

    this.setState({ today: today });
  }

  addNote(item) {
    var content = prompt("Please enter the note:");

    let classObject = {
      user_id: this.props.user.id,
      class_id: item.id,
      content: content,
    };

    axios
      .post("https://maxwelljonesdesign.com/notes/create", classObject)
      .then((res) => {
        if (res.data) {
          console.log("success");
          window.location.reload(true);
        } else {
          console.log("fail");
        }
      });
  }

  deleteNote(e) {
    axios
      .get("https://maxwelljonesdesign.com/notes/delete/" + e.id)
      .then((res) => {
        if (res.status === 200) {
          console.log("success");
          window.location.reload(true);
        } else {
          console.log("fail");
        }
      });
  }

  classesComponent() {
    let classes = this.state.classes;
    let schedules = this.state.schedule;

    let today = this.state.today;

    if (today === null) {
      var objToday = new Date();
      let weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      today = weekday[objToday.getDay()];
    }
    let todaySchedule = [];

    for (let i = 0; i < schedules.length; i++) {
      if (schedules[i].dayOfWeek === today) {
        todaySchedule.push(schedules[i]);
      }
    }

    let comp;
    if (todaySchedule.length > 0) {
      comp = todaySchedule
        .sort(function (a, b) {
          return a.timeStart - b.timeStart;
        })
        .map((item) => (
          <Label
            color="blue"
            style={{ width: "100%", margin: "2px" }}
            key={item.id}
          >
            <div style={{ float: "left" }}>
              {item.timeStart === 12
                ? item.timeStart + "PM"
                : item.timeStart < 12
                ? item.timeStart + "AM"
                : item.timeStart - 12 + "PM"}{" "}
              -{" "}
              {item.timeStart + item.length === 12
                ? item.timeStart + item.length + "PM"
                : item.timeStart + item.length > 12
                ? item.timeStart + item.length - 12 + "PM"
                : item.timeStart + item.length + "AM"}
            </div>
            <div style={{ float: "right" }}>
              {this.getClassName(item.class_id)}
            </div>
          </Label>
        ));
    } else {
      comp = (
        <div style={{ width: "100%", textAlign: "center" }}>no class today</div>
      );
    }

    return (
      <div style={{ width: "100%", height: "100vh", overflowY: "auto" }}>
        <div style={{ width: "100%", overflowY: "auto" }}>
          <div
            style={{
              display: "inline-block",
              margin: "3vh",
              marginBottom: "-1.5vh",
            }}
          >
            <Card style={{ maxWidth: "500px" }} id="cardMain">
              <h1
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                  fontFamily: "monospace",
                }}
              >
                {this.getToday()}
              </h1>
              <Button.Group style={{ marginBottom: "0.5vh" }}>
                <Button onClick={() => this.createAssignment()} color="orange">
                  New Assignment
                </Button>
              </Button.Group>
              <Divider style={{ margin: "5px" }}></Divider>
              <div style={{ maxHeight: "800px", overflow: "auto" }}>
                <Table
                  striped
                  style={{ width: "100%", borderRadius: "7px" }}
                  compact
                  collapsing
                  unstackable
                >
                  <Table.Header color="blue">
                    <Table.Row>
                      <Table.HeaderCell id="thc">Class</Table.HeaderCell>
                      <Table.HeaderCell id="thc">Name</Table.HeaderCell>
                      <Table.HeaderCell id="thc">DueDate</Table.HeaderCell>
                      <Table.HeaderCell id="thc">Days</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body id="tbody">
                    {this.tableBoard(this.state.assignments)}
                  </Table.Body>
                </Table>
              </div>
              <Divider style={{ margin: "1vh" }}></Divider>
              <div style={{ width: "100%" }}>
                <Button
                  onClick={() => this.click("left")}
                  color="orange"
                  size="mini"
                  style={{ float: "left", margin: "0px" }}
                >
                  <Icon
                    style={{ padding: "0px", margin: "0px" }}
                    name="arrow alternate circle left"
                  ></Icon>
                </Button>
                <h3
                  style={{
                    display: "inline-block",
                    margin: "0px",
                    fontFamily: "monospace",
                    fontSize: "110%",
                    lineHeight: "3.5vh",
                  }}
                >
                  For {today}
                </h3>
                <Button
                  onClick={() => this.click("right")}
                  color="orange"
                  size="mini"
                  style={{ float: "right", margin: "0px" }}
                >
                  <Icon
                    style={{ padding: "0px", margin: "0px" }}
                    name="arrow alternate circle right"
                  ></Icon>
                </Button>
                <div style={{ paddingTop: "1vh" }}>{comp}</div>
              </div>
            </Card>
          </div>
          {/*                     
                    <div style={{display:'inline-block',margin:'3vh',marginBottom:'0px'}}>
                        <Card style={{maxWidth:'500px'}} id='cardMain'>
                            <h1 style={{fontSize:'18px',textAlign:'center',fontFamily:'monospace',marginBottom:'5px'}}>Classes</h1>
                            {this.state.classes && this.state.classes.map(item=>
                                                <div>
                                                    <Label onClick={()=> this.addNote(item)}  style={{margin:'0.7vh',width:'97%',marginBottom:'0px'}} key={item.id} color='orange' >{item.name}</Label>
                                                        {this.state.notes && this.state.notes.map(el=>
                                                                <Label color='white' style={item.id === el.class_id ? {width:'97%',margin:'0.7vh',borderRadius:'0px',marginTop:'-5px',marginBottom:'0px'} : {display:'none'}}  onClick={()=>this.preDeleteNote(el)}>{el.content}</Label>
                                                            )}
                                                </div>
                                            )}
                        </Card>
                    </div> */}

          {/* <div
            style={{
              display: "inline-block",
              margin: "3vh",
              marginBottom: "0px",
            }}
          >
            <Card
              style={{ width: "300px", fontFamily: "monospace" }}
              id="cardMainSmall"
            >
              <div>
                <div style={{ margin: "auto", alignContent: "center" }}>
                  <h3 style={{ margin: "5px" }}>{moment().format("MMMM")}</h3>
                  {/* <h3>Current Hours</h3> 

                  <div style={{ display: "inline", lineHeight: "20px" }}>
                    <div style={{ margin: "10px", display: "inline-block" }}>
                      <Button style={{ display: "inline-block" }}>Hi</Button>
                    </div>
                    <div style={{ margin: "10px", display: "inline-block" }}>
                      <div
                        style={{
                          background: "white",
                          color: "black",
                          width: "100%",
                          height: "100%",
                          margin: "auto",
                          borderRadius: "10px",
                        }}
                      >
                        <h1>{this.state.currentHours}</h1>
                      </div>
                    </div>
                    <div style={{ margin: "10px", display: "inline-block" }}>
                      <Button style={{ display: "inline-block" }}>Hi</Button>
                    </div>
                  </div>
                </div>

                <div style={{ maxHeight: "150px", overflow: "auto" }}>
                  <Table
                    striped
                    style={{
                      width: "100%",
                      borderRadius: "7px",
                      maxHeight: "100px",
                    }}
                    compact
                    collapsing
                    unstackable
                  >
                    <Table.Header color="blue">
                      <Table.Row>
                        <Table.HeaderCell id="thc">Date</Table.HeaderCell>
                        <Table.HeaderCell id="thc">Time</Table.HeaderCell>
                        <Table.HeaderCell id="thc">Hours</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body id="tbody">
                      {this.state.hours.map(
                        (
                          item // HERE
                        ) => (
                          <Table.Row
                            onClick={() => this.deleteHour(item)}
                            color="blue"
                            key={item.id}
                          >
                            <Table.Cell id="tbody">
                              {moment(item.start).format("ddd/DD")}
                            </Table.Cell>
                            <Table.Cell id="tbody">
                              {moment(item.start).format("hh")}-
                              {moment(item.finish).format("hh")}
                            </Table.Cell>
                            <Table.Cell id="tbody">
                              {moment(item.finish).diff(
                                moment(item.start),
                                "hours"
                              )}
                            </Table.Cell>
                          </Table.Row>
                        )
                      )}
                    </Table.Body>
                  </Table>
                </div>
              </div>
            </Card>
          </div> */}

          <div style={{ margin: "0px", textAlign: "center", height: "12.5vh" }}>
            <p
              style={{ textAlign: "center", color: "white", marginTop: "-5px" }}
            >
              <a
                style={{ color: "white", opacity: "50%" }}
                href="mailto:maxjones2001@hotmail.com?subject=Help"
              >
                Need help?
              </a>
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center", margin: "auto" }}>
          <Modal
            style={{
              padding: "10px",
              left: "auto",
              textAlign: "center",
              width: "220px",
              top: "20%",
            }}
            open={this.state.modal}
          >
            <div style={{ padding: "20px" }}>
              Are you sure you want to delete assignment,{" "}
              {this.state.currentAssignment.name}
              <Button.Group style={{ width: "100%", paddingTop: "20px" }}>
                <Button onClick={() => this.deleteAssignment()} color="green">
                  Yes
                </Button>
                <Button onClick={() => this.closeModal()} color="red">
                  No
                </Button>
              </Button.Group>
            </div>
          </Modal>
        </div>

        <div style={{ textAlign: "center", margin: "auto" }}>
          <Modal
            style={{
              padding: "10px",
              left: "auto",
              textAlign: "center",
              width: "220px",
              top: "20%",
            }}
            open={this.state.modal2}
          >
            <div style={{ padding: "20px" }}>
              Are you sure you want to delete note,{" "}
              {this.state.currentNote.content}
              <Button.Group style={{ width: "100%", paddingTop: "20px" }}>
                <Button
                  onClick={() => this.deleteNote(this.state.currentNote)}
                  color="green"
                >
                  Yes
                </Button>
                <Button onClick={() => this.closeModal2()} color="red">
                  No
                </Button>
              </Button.Group>
            </div>
          </Modal>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.state.classes &&
          this.state.schedule &&
          this.state.assignments &&
          this.navBar()}
        {this.state.classes &&
          this.state.schedule &&
          this.state.assignments &&
          this.classesComponent()}
      </div>
    );
  }
}

export default Board;
