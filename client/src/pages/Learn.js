import React from 'react';
import axios from 'axios';
import LearnTemplate from '../components/Learn/LearnTemplate';
import LearnSelect from '../components/Learn/LearnSelect';
import LearnForm from '../components/Learn/LearnForm';
import LearnItem from '../components/Learn/LearnItem';
import info from '../info';

class Learn extends React.Component {
  state = {
    level: '',
    question: {},
    index: 0,
    limit: 10,
    hanjas: [],
    result: [],
    learning: false,
    showDesc: false,
    firstTry: true
  }
  fetchGetInfo = async (data) => {
    let order = "";
    switch (data.type) {
      case 1:
        order = "sound";
        break;
      case 2:
        order = "correct/(correct%2Bwrong)";
        break;
      case 3:
        order = "correct%2Bwrong";
        break;
      case 4:
        order = "random()";
        break;
      default:
        break;
    }
    const get = await axios.get(`http://${info.ip()}:${info.port()}/get?level=${data.level}&order=${order}&limit=${this.state.limit}`);
    this.setState({
      index: 0,
      level: data.level,
      hanjas: get.data,
      learning: true,
      showDesc: false,
      result: [],
      firstTry: true,
      type: data
    });
  }

  handleStart = async (data) => {
    await this.fetchGetInfo(data);
    await this.getQuestion();
  }

  handleStop = async () => {
    this.setState({
      hanjas: this.state.hanjas.map(h => {
        let r = this.state.result.find(res => res.id === h.id);
        if (r !== undefined) {
          h.correct = r.correct;
          h.wrong = r.wrong;
        }
        return h;
      }),
      question: {},
      index: 0,
      learning: false,
      showDesc: false
    });

    let data = JSON.stringify(this.state.result);
    await axios.get(`http://${info.ip()}:${info.port()}/set?result=${data}`);
    let retry = window.confirm("다시 하시겠습니까?");
    if (retry) {
      this.setState({
        result: [],
        learning: true
      });
      this.getQuestion();
    }
  }

  getQuestion = () => {
    let { index, hanjas, limit, result } = this.state;
    if (index === limit) {
      this.handleStop();
    } else {
      this.setState({
        result: result.concat({
          id: hanjas[index].id,
          correct: hanjas[index].correct,
          wrong: hanjas[index].wrong,
        })
      });
      this.setState({ question: hanjas[index], firstTry: true });
      this.setState({ index: index + 1, showDesc: false });
    }
  }

  checkAnswer = (data) => {
    let { mean, sound, id, correct, wrong } = this.state.question;
    if (data.answer === mean + ' ' + sound) {
      this.setState({
        result: this.state.result.map(r => {
          if (r.id === id) {
            if (this.state.firstTry) {
              r.correct = correct + 1;
            } else {
              r.wrong = wrong + 1;
            }
          }
          return r;
        })
      });
      this.getQuestion();
    } else {
      this.setState({
        showDesc: true,
        firstTry: false
      });
    }
  }

  render() {
    let { question, learning, showDesc } = this.state;
    let rate = (question.correct / (question.correct + question.wrong)) * 100;
    if (isNaN(rate)) rate = 0.0;
    rate = '[' + rate.toFixed(0) + '%]';
    return (
      <LearnTemplate 
        select={<LearnSelect learning={learning} onStart={this.handleStart} onStop={this.handleStop} />}
        form={<LearnForm question={question.shape} onCheckAnswer={this.checkAnswer} />}>
        <LearnItem showDesc={showDesc}          
          desc={question.mean + ' ' + question.sound}
          rate={rate} />
      </LearnTemplate>
    );
  }
}

export default Learn;