import React from 'react';
import Modal from '../Modal.js';
import '../../css/sportsmen.scss';
import { Route } from "react-router-dom";
import Sportsman from './Sportsman.js';

class Sportsmen extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      showAddSportsmanModal: false,
      sportsmenElements: props.sportsmen.sportsmenData.map(el => <Sportsman name={el.name} /> ),
    };
    this.newSportsmanName = React.createRef();
    this.toggleAddSportsmanModal = this.toggleAddSportsmanModal.bind(this);
  };
  
  toggleAddSportsmanModal = () => {
    this.setState({showAddSportsmanModal: !this.state.showAddSportsmanModal});
  };

  onNameChange = () => {
    this.props.dispatch({
      type: 'updateSportsmanName',
      name: this.newSportsmanName.current.value
    });
  }

  addSportsman = () => {
    this.props.dispatch({type: 'addSportsman'});
    this.toggleAddSportsmanModal();
  };

  render(){
    return (
      <Route exact path="/sportsmen">
  
        <div className="sportsmen">
          <h2 className="title">You have {this.state.sportsmenElements.length} sportsmen</h2>
          {this.state.sportsmenElements}
          <div className="add" onClick={this.toggleAddSportsmanModal}>Add new +</div>
        </div>
        <Modal 
          active={this.state.showAddSportsmanModal} 
          dismiss={this.toggleAddSportsmanModal} 
          title="Add new sportsman"
        >
          <input type="text" onChange={this.onNameChange} ref={this.newSportsmanName} value={this.props.sportsmen.sportsmanName} />
          <button onClick={this.addSportsman}>Add</button>
        </Modal>

      </Route>
    );     
  };
  
}

export default Sportsmen;