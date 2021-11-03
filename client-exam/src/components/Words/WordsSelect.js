import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button  } from 'reactstrap';
import '/style/Words/WordsSelect.css';

class WordsSelect extends React.Component {
  constructor (props) {
    super(props);

    this.state = { type: -1, 
      typeLabel: "타입선택", typeDdOpen: false,
      learnBtnLabel: "학습시작", learnBtnColor: "primary",
      types: [
        {type: 1, typeLabel: "가나다 순으로"},
        {type: 2, typeLabel: "낮은 정답률순"},
        {type: 3, typeLabel: "낮은 시도율순"},
        {type: 4, typeLabel: "무작위 순으로"},       
      ]
    };
    
    this.onTypeBtnClick = this.onTypeBtnClick.bind(this);    
    this.onLearnBtnClick = this.onLearnBtnClick.bind(this);

    this.typeToggle = this.typeToggle.bind(this);
  }
  
  onTypeBtnClick(type, typeLabel) {
    this.setState({ type: type, typeLabel: typeLabel});
  }

  onLearnBtnClick() {
    if(!this.props.learning) {
      if(this.state.type !== -1) {      
        this.setState({learnBtnLabel: "학습종료", learnBtnColor: "danger"});
        this.props.onStart(this.state);      
      } else {  
        alert("항목을 선택하세요.");
      }
    } else {
      this.setState({learnBtnLabel: "학습시작", learnBtnColor: "primary"});
      this.props.onStop(this.state);
    }    
  }  
 
  typeToggle() {
    this.setState(prevState => ({
      typeDdOpen: !prevState.typeDdOpen
    }));
  }

  render() { 
    let learning = this.props.learning;
    return (
      <div className="main">
        <div className="left">
          <Dropdown isOpen={this.state.typeDdOpen} toggle={this.typeToggle}>
            <DropdownToggle caret outline disabled={learning}>{this.state.typeLabel}</DropdownToggle>
            <DropdownMenu>
              {this.state.types.map((t) => {
                return (<DropdownItem onClick={() => this.onTypeBtnClick(t.type, t.typeLabel)}>
                        {t.typeLabel}</DropdownItem>);
              })}            
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="right"> 
          <Button className="learnBtn" color={this.state.learnBtnColor} onClick={() => this.onLearnBtnClick()}>
              {this.state.learnBtnLabel}</Button>   
        </div>
      </div>
    );
  }
}

export default WordsSelect;