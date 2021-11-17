import React, {Component} from 'react';
import axios from 'axios';
import SearchTemplate from '../components/Search/SearchTemplate';
import SearchItemList from '../components/Search/SearchItemList';
import SearchForm from '../components/Search/SearchForm';
import info from '../info';

class Search extends Component {
    state = {
        hanjas: []
    }
    fetchGetInfo = async (data) => {
        let ms = data.keyword;
        let splitPoint = ms.lastIndexOf(" ");
        let mean = ms.substr(0, splitPoint);
        let sound = ms.substr(splitPoint + 1, ms.length);
        const get = await axios.get(`http://${info.ip()}/api/v1/hanja/search/?mean=${mean}&sound=${sound}`);
        this.setState({
            hanjas: get.data
        });
    }

    handleCreate = (data) => {
        this.fetchGetInfo(data);
    }

    render() {
        const {hanjas} = this.state;
        return (
            <SearchTemplate form={<SearchForm onCreate={this.handleCreate}/>}>
                <SearchItemList hanjas={hanjas}/>
            </SearchTemplate>
        );
    }
}

export default Search;