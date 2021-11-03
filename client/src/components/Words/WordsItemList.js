import React from 'react';

class WordsItemList extends React.Component {
    render() {             
        const { desc, showDesc, rate } = this.props;    
        return (
            <div className="desc">
                <div>
                    {showDesc && <label>{desc + ' ' + rate}</label>}
                </div>
            </div>            
        );
    }
}

export default WordsItemList;