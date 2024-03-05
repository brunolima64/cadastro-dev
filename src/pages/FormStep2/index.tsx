import { useNavigate } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import * as C from './styles';
import {  useEffect } from 'react';
import { FormActions, useForm } from '../../contexts/FormContext';
import { SelectOption } from '../../components/SelectOption';
import { Link } from 'react-router-dom';

export const FormStep2 = () => {
    const navigate = useNavigate();
    const ctxForm = useForm();

    useEffect(() => {
        if(ctxForm?.state.name === '') {
            navigate('/');
        } else {
        ctxForm?.dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        })
        }
    }, [])

    const handleNextStep = () => {
        if(ctxForm?.state.name !== ''){
        navigate('/step3');
    } else {
        return alert('O campo não pode estar vazio!');
    }
    }

    const setLevel = (level: number) => {
        ctxForm.dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }
    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{ctxForm?.state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com o seu estado atual, profissionalmente.</p>

                <hr />

                <SelectOption 
                    title='Sou iniciante'
                    description="Comecei a programar há menos de 2 anos"
                    icon="🥳"
                    selected={ctxForm?.state.level === 0}
                    onClick={() => setLevel(0)}
                />
                <SelectOption 
                    title='Sou Programador'
                    description="Já programo há 2 anos ou mais"
                    icon="😎"
                    selected={ctxForm?.state.level === 1}
                    onClick={() => setLevel(1)}
                />
                
                <Link className='backButton' to={'/'}>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}