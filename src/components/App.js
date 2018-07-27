import React, { Component } from 'react';
import '../App.css';
import { connect } from "react-redux";
import { addReminder, deleteReminder ,clearReminders} from "../actions";
import PropTypes from 'prop-types'
import moment from 'moment'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      dueDate: ''
    };
  }
  addReminder(text, dueDate) {//提取文本框内容，添加到数组中
    this.props.addReminder(this.state.text, this.state.dueDate);
  }
  deleteReminder(id) {//onclick中传来
    this.props.deleteReminder(id);
  }
  clearReminders() {
    this.props.clearReminders();
  }
  renderReminders() {
    const { reminders } = this.props;
    // console.log(this.props)
    return (
      <ul className="list-group col-sm-8 mt-2" >
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div>
                  <div>{reminder.text}</div>
                  <div className="list_item delete-button"
                    onClick={() => this.deleteReminder(reminder.id)}>&#x2715;</div>
                  <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                </div>
              </li>
            )
          })
        }
      </ul >
    )
  }
  render() {

    return (
      <div className="App">
        <div className="title">Reminder Pro</div>
        <div className="form-inline mb-1" >
          <div className="form-group mr-2">
            <input type="text" className="form-control mr-2" placeholder="Add something..."
              onChange={(event) => this.setState({ text: event.target.value })} />
            <input type="datetime-local" className="form-control"
              onChange={(event) => this.setState({ dueDate: event.target.value })} />
          </div>
          <button type="button" className="btn btn-primary"
            onClick={() => this.addReminder()}>Add Reminder</button>
        </div>
        {this.renderReminders()}
        <div className="btn btn-danger mt-3"
          onClick={() => this.clearReminders()}>Clear All Reminders</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    reminders: state
  }
}
App.propTypes = {
  reminders: PropTypes.array.isRequired,
  addReminder: PropTypes.func.isRequire,
  deleteReminder: PropTypes.func.isRequire,
  clearReminders: PropTypes.func.isRequire
}
export default connect(mapStateToProps, { addReminder, deleteReminder ,clearReminders})(App);
