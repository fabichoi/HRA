import React from 'react';
import SearchItem from './SearchItem';

class SearchItemList extends React.Component {
    render() {
        const { hanjas } = this.props;
        const hanjaList = hanjas.map(
            ({id, level, shape, mean, sound, correct, wrong}) => (
                <SearchItem
                    id = {id}
                    level = {level}
                    shape = {shape}
                    mean = {mean}                    
                    sound = {sound}
                    key = {id}
                    correct = {correct}
                    wrong = {wrong}
                />
            )
        );        
        return (
            <div>
                {hanjaList}
            </div>
        );
    }
}

export default SearchItemList;