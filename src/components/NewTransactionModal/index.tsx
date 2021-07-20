import Modal from 'react-modal';
import { FormEvent, useState } from 'react';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import { api } from '../../services/api';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = {
            title, 
            value, 
            category, 
            type
        };

        api.post('/transactions', data)
    }

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

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Set new transaction</h2>

                <input
                    placeholder='Title'
                    type="text"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    placeholder='Value'
                    type="number"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        onClick= {() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Incomes" />
                        <span>Income</span>

                    </RadioBox>

                    <RadioBox
                        type='button'
                        onClick= {() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Outcomes" />
                        <span>Outcome</span>

                    </RadioBox>

                </TransactionTypeContainer>

                <input
                    placeholder='Category'
                    type="text"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">Save</button>


            </Container>

        </Modal>

    )
}