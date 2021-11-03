import React from 'react';
import '/style/Learn/LearnForm.css';

class LearnForm extends React.Component {
  state = {
      answer: ''
  }  
  handleChange = (e) => {
    this.setState({
      answer: e.target.value
    })
  }
  handleKeyDown = (e) => {
    if(e.keyCode === 13) {
      this.checkAnswer(e);      
    }
  }
  handleBlur = (e) => {
    if(this.state.answer !== '') {
      this.checkAnswer(e);
    }
  }
  checkAnswer = (e) => {        
    this.props.onCheckAnswer(this.state);      

    this.setState({
      answer: ''
    }); 
    
  }

  render() {
    return (
      <div className="learn_form">
        <label>{this.props.question}</label>
        <input           
          placeholder="답" 
          value={this.state.answer} 
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown} 
          onBlur={this.handleBlur}          
        />
      </div>
    );
  }
}

export default LearnForm;