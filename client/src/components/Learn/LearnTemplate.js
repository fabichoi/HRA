import React from 'react';
import 'style/Learn/LearnTemplate.css';

class LearnTemplate extends React.Component {

  render() {
    return (
      <main className="learn-template">
        <div className="title">
          한자 학습
        </div>
        <section className="select-wrapper">
          {this.props.select}
        </section>
        <section className="form-wrapper">
          {this.props.form}
        </section>
        <section className="search-wrapper">
          {this.props.children}
        </section>
      </main>
    );
  }
}


export default LearnTemplate;