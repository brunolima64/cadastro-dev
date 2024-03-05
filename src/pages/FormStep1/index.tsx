import { useNavigate } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import * as C from './styles';
import { ChangeEvent, useEffect } from 'react';
import { FormActions, useForm } from '../../contexts/FormContext';

export const FormStep1 = () => {
    const navigate = useNavigate();
    const ctxForm = useForm();

    useEffect(() => {
        ctxForm?.dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, [])

    const handleNextStep = () => {
        if(ctxForm?.state.name !== ''){
        navigate('/step2');
    } else 
        return alert('O campo não pode estar vazio!');
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        ctxForm?.dispatch({
            type: FormActions.setName,
            payload: e.target.value
    })
    }
    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com o seu nome completo.</p>

                <hr />

                <label>
                    Seu nome completo
                    <input 
                        type="text"
                        autoFocus
                        value={ctxForm?.state.name}
                        onChange={handleNameChange}
                    />
                </label>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}