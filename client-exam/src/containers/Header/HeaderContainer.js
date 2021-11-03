import React, { Component } from 'react';
import { Header } from '/components/Base/Header';
import { BrdBtn } from '/components/Base/Button';
import LoginMenu from './LoginMenu';
import { connect } from 'react-redux';
import * as userActions from '/redux/modules/user';
import { bindActionCreators } from 'redux';

class HeaderContainer extends Component {

    render() {
        const { visible, user } = this.props;
        if (!visible) return null;
        return (
            <Header>
                {
                    user.get('logged')
                        ? <LoginMenu />  // 로그인시 보여줄 메뉴
                        : <BrdBtn to="/auth/login">로그인/가입</BrdBtn>
                }
            </Header>
        );
    }
}

export default connect(
    (state) => ({
        visible: state.base.getIn(['header', 'visible']),
        user: state.user
    }),
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(HeaderContainer);