import React from 'react';
import 'style/Search/SearchItem.css';

class SearchItem extends React.Component {

    transLevel = (level) => {                
        let l = level[0] + '급';                
        return level[1] === "0" ? l : l + level[1];
    }

    render() {
        const { id, shape, mean, sound, level, correct, wrong } = this.props;      
        let lvl = this.transLevel(level.toString());
        let rate = (correct/(correct + wrong)) * 100;
        if(isNaN(rate)) rate = 0.0;
        rate = rate.toFixed(2);

        return (
            <div className="hanja_item" id={id}>
                <div className="hanja_info">
                    <h3>[{lvl}] 정답률 : {rate} %</h3>
                    <h1> {shape} : {mean} {sound} </h1>
                </div>                
            </div>
        );
    }
}

export default SearchItem;