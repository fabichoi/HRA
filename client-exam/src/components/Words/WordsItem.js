import React from 'react';
import '/style/Words/WordsItem.css';

class WordsItem extends React.Component { 
    render() {
        return (
            <div className="desc">
                {this.props.showDesc && <img src={this.props.img} alt=""></img>}
            </div>
        );
    }
}

export default WordsItem;