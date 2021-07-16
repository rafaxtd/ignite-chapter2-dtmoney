import Modal from 'react-modal';
import { Container } from './styles';

import closeImg from '../../assets/close.svg';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (

        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >

            <button 
                type='button' 
                onClick={onRequestClose} 
                className='react-modal-close'
            >
                <img src={closeImg} alt="Close Modal Button" />
            </button>

            <Container>
                <h2>Set new transaction</h2>

                <input
                    placeholder='Title'
                    type="text"
                />

                <input
                    placeholder='Value'
                    type="number"
                />

                <input
                    placeholder='Category'
                    type="text"
                />

                <button type="submit">Save</button>


            </Container>

        </Modal>

    )
}