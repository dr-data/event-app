import React, {Component} from 'react';
import './EventContainer.css';
import Modal from '@material-ui/core/Modal';
import Map from '../Map/Map';

class eventContainer extends Component {

  constructor(){
    super();
    this.showEvent = this.showEventHandler.bind(this);
    this.closePreviewHandler = this.closePreviewHandler.bind(this);
    this.state = {
      modalIsOpen: false,
      open: false
    };
  }

  showEventHandler = () => {
    this.setState ({
      open: true,
      modalIsOpen: !this.state.modalIsOpen
    });
  }

  closePreviewHandler = () => {
    console.log('backdrop');
    this.setState ({
      open: false
    });
  }

  
  render(){
    return (
    <div className="event-container" onClick={this.showEventHandler}>
      <img className="event-container__image" src={this.props.img} alt="default"/>
      <div className="event-container__date">
        <time className="time-container">{this.props.date}</time>
        <time className="time-container">{this.props.time}</time>
      </div>
      <h2 className="event-container__title">{this.props.title}</h2>
      <div className="event-container__meta"> 
        <p>{this.props.host}</p>
        <strong>{this.props.localization}</strong>
      </div>
      <span className="event-container__category"> {this.props.category}</span>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.state.open}
        onClose={this.closePreviewHandler}
        onBackdropClick={this.closePreviewHandler}
        >
          <div className="event-preview">
            <h1>{this.props.title}</h1>
            <img src={this.props.img} alt=""/>
            <div className="event-container__date">
              <time className="time-container">{this.props.date}</time>
              <time className="time-container">{this.props.time}</time>
            </div>
            <div className="event-container__meta"> 
              <p>{this.props.host}</p>
              <strong>{this.props.localization}</strong>
            </div>
            <p>{this.props.description}</p>
            <Map/>

            <button onClick={this.closePreviewHandler}>close</button>
          </div>
      </Modal>
    </div>
    
    );
  }

}

export default eventContainer;