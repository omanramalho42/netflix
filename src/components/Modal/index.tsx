import React, { useEffect } from 'react';
import Button from '../Button';

import { Close, Container, Footer } from './styled';

interface ModalProps {
  show: boolean;
  buttonText: string;
  children?: React.ReactNode;
  onClick: () => void;
  onClose: () => void;
};

const Modal = ({ show, buttonText, children, onClick, onClose }: ModalProps) => {
  
  useEffect(() => { 
    console.log(show,'show') 
  },[show]);
  
  return (
    <>
      {show && (
        <Container show={show}>
          <Close 
            onClick={onClose}
          >
            x
          </Close>
          { children }
          <Footer>
            <Button 
              onClick={onClick}
              title={buttonText}
              color='secondary' 
            />
          </Footer>
        </Container>
      )}
    </>
  )
}

export default Modal;