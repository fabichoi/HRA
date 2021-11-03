import React, {Component} from 'react';
import {AuthContent, AuthButton} from 'components/Auth';
import storage from '/lib/storage';

class Logout extends Component {

    handleLogout = async () => {
        const {userActions} = this.props;
        try {
            await userActions.logout();
        } catch (e) {
            console.log(e);
        }

        storage.remove('loggedInfo');
        window.location.href = '/';
    }

    handleLogoutCancel = async () => {
        window.location.href = '/';
    }

    render() {
        const {handleLogout, handleLogoutCancel} = this;
        return (
            <AuthContent title="로그아웃">
                로그아웃 하시겠습니까?
                <AuthButton onClick={handleLogout}>예</AuthButton>
                <AuthButton onClick={handleLogoutCancel}>아니오</AuthButton>
            </AuthContent>
        );
    }
}

export default Logout;