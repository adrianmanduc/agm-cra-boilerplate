import React from 'react';
import styled from 'styled-components';
import RingLoader from 'react-spinners/RingLoader';

export const FullPageSpinner = () => {
  return (
    <SpinnerWrapper>
      <RingLoader
        size={60}
        color="#4486e8"
        loading
      />
      <span>Loading...</span>
    </SpinnerWrapper>
  );
};

const SpinnerWrapper = styled.div`
    position: absolute;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span{
        margin-top: 16px;
    }
`;
