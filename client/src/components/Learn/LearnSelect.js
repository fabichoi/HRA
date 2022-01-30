import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import 'style/Learn/LearnSelect.css';

class LearnSelect extends React.Component {
  constructor (props) {
    super(props);

    this.state = { level: -1, type: -1,
      levelLabel: "급수선택", levelDdOpen: false,
      typeLabel: "타입선택", typeDdOpen: false,
      learnBtnLabel: "학습시작", learnBtnColor: "primary",
      levels: [
        {level: 30, levelLabel: "3급"},{level: 32, levelLabel: "3급2"},
        {level: 40, levelLabel: "4급"},{level: 42, levelLabel: "4급2"},
        {level: 50, levelLabel: "5급"},{level: 52, levelLabel: "5급2"},
        {level: 60, levelLabel: "6급"},{level: 62, levelLabel: "6급2"},
        {level: 70, levelLabel: "7급"},{level: 80, levelLabel: "8급"},
      ],
      types: [
        {type: 1, typeLabel: "가나다 순으로"},
        {type: 4, typeLabel: "무작위 순으로"},       
      ]
    };

    this.onLevelBtnClick = this.onLevelBtnClick.bind(this);    
    this.onTypeBtnClick = this.onTypeBtnClick.bind(this);    
    this.onLearnBtnClick = this.onLearnBtnClick.bind(this);    
    
    this.levelToggle = this.levelToggle.bind(this);
    this.typeToggle = this.typeToggle.bind(this);
  }

  onLevelBtnClick(level, levelLabel) {
    this.setState({ level: level, levelLabel: levelLabel });
  }
  onTypeBtnClick(type, typeLabel) {
    this.setState({ type: type, typeLabel: typeLabel});
  }
  onLearnBtnClick() {
    if(!this.props.learning) {
      if(this.state.level !== -1 && this.state.type !== -1) {      
        this.setState({learnBtnLabel: "학습종료", learnBtnColor: "danger"});
        this.props.onStart(this.state);      
      } else {  
        alert("항목을 모두 선택하세요.");
      }
    } else {
      this.setState({learnBtnLabel: "학습시작", learnBtnColor: "primary"});
      this.props.onStop(this.state);
    }    
  }  

  levelToggle() {
    this.setState(prevState => ({
      levelDdOpen: !prevState.levelDdOpen
    }));
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
          <Dropdown isOpen={this.state.levelDdOpen} toggle={this.levelToggle}>
            <DropdownToggle caret disabled={learning} outline>{this.state.levelLabel}</DropdownToggle>
            <DropdownMenu>
              {this.state.levels.map((l) => {
                return (<DropdownItem onClick={() => this.onLevelBtnClick(l.level, l.levelLabel)}>
                        {l.levelLabel}</DropdownItem>);
              })}            
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="center">
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

export default LearnSelect;