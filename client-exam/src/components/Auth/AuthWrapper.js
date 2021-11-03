import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import {shadow} from '/lib/styleUtils';
import {Link} from 'react-router-dom';

const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ShadowedBox = styled.div`
  width: 500px;
  ${shadow(2)}
`;

const LogoWrapper = styled.div`
  background: ${oc.teal[7]};
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled(Link)`
  color: white;
  font-family: 'Rajdhani';
  font-size: 2.4rem;
  letter-spacing: 5px;
  text-decoration: none;
`;

const Contents = styled.div`
  background: white;
  padding: 2rem;
  height: auto;
`;

const AuthWrapper = ({children}) => (
    <Positioner>
        <ShadowedBox>
            <LogoWrapper>
                <Logo to="/">한자 학습 시스템</Logo>
            </LogoWrapper>
            <Contents>
                {children}
            </Contents>
        </ShadowedBox>
    </Positioner>
);

export default AuthWrapper;