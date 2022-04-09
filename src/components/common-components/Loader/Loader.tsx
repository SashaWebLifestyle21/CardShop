import React from 'react';
import styled, {keyframes} from "styled-components";
import { themes } from '../../../constants/themes';


const loaderAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const LoaderWrapper = styled.div`
position: relative;
  margin-top: 30px;
  
  & .loader{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  & .loader:before {
    position: absolute;
    content: '';
    top: 0%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 500rem;
    border: 0.2em solid rgba(0, 0, 0, 0.1);
  }
  & .loader:after {
    position: absolute;
    content: '';
    top: 0%;
    left: 50%;
    width: 100%;
    height: 100%;
    animation: ${loaderAnimation} 0.6s linear;
    animation-iteration-count: infinite;
    border-radius: 500rem;
    border-color: ${themes.colors.secondary} transparent transparent;
    border-style: solid;
    border-width: 0.2em;
    box-shadow: 0px 0px 0px 1px transparent;
  }

  & .loader:before,
  & .loader:after {
    width: 2.28571429rem;
    height: 2.28571429rem;
    margin: 0em;
  }
`

const Loader = () => {
    return (
        <LoaderWrapper>
            <div className='loader'/>
        </LoaderWrapper>
    );
};

export default Loader;