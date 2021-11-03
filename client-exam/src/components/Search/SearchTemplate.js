import React from 'react';
import '/style/Search/SearchTemplate.css';

class SearchTemplate extends React.Component {

  render() {
    return (
      <main className="search-template">
        <div className="title">
          한자 검색
        </div>
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


export default SearchTemplate;