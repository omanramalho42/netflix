import React from 'react';

import { Container } from './styled';

import './style.scss';

const Loading = () => {
  return (
    <Container>
      <div className='loader is-changing'>
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
        <div className='bar4'></div>
        <div className='bar5'></div>
      </div>
    </Container>
  )
}

export default Loading;