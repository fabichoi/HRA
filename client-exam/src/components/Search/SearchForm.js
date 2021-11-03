import React from 'react';
import '/style/Search/SearchForm.css';

class SearchForm extends React.Component {
  state = {
    keyword: ''
  }
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }
  handleKeyDown = (e) => {
    if(e.keyCode === 13) {      
      this.props.onCreate(this.state);
      
      this.setState({
        keyword: ''
      })
    }
  }

  render() {
    return (
      <div className="search_form">
        <input 
          placeholder="음훈을 입력하세요." 
          value={this.state.keyword} 
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown} 
        />
      </div>
    );
  }
}

export default SearchForm;