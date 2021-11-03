import React from 'react';
import '/style/Words/WordsTemplate.css';

class WordsTemplate extends React.Component {

  render() {
    return (
      <main className="words-template">
        <div className="title">
          단어 학습
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

export default WordsTemplate;