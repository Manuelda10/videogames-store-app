import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const StyledModal = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    backdrop-filter: blur(15px);
    display: flex;
    justify-content: center;
    align-items: center;
` 

const Modal = ({ children }) => {
    return (<StyledModal>
        {children}
    </StyledModal>)
}

const ModalPortal = ({ children }) => {
    return ReactDOM.createPortal(
        <Modal>{children}</Modal>
        , document.getElementById('modal-root')
    )
}

export default ModalPortal