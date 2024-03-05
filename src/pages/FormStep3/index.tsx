import { useNavigate } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import * as C from './styles';
import { ChangeEvent, useEffect } from 'react';
import { FormActions, useForm } from '../../contexts/FormContext';
import { Link } from 'react-router-dom';

export const FormStep3 = () => {
    const navigate = useNavigate();
    const ctxForm = useForm();

    useEffect(() => {
        if(ctxForm?.state.name === '') {
            navigate('/');
        } else {
        ctxForm?.dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
        }
    }, [])

    const handleNextStep = () => {
        if(ctxForm?.state.email !== '' && ctxForm?.state.github !== ''){
        return navigate('/step4');
    } else 
        return alert('O campo não pode estar vazio!');
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        ctxForm?.dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    };
    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        ctxForm?.dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    };
    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {ctxForm?.state.name}, onde te achamos?</h1>
                <p>Preencha com seus dados para cotanto.</p>

                <hr />

                <label>
                    Qual seu e-mail?
                    <input 
                        type="email"
                        value={ctxForm?.state.email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label>
                    Qual seu GitHub?
                    <input 
                        type="url"
                        value={ctxForm?.state.github}
                        onChange={handleGithubChange}
                    />
                </label>
                

                <Link className='backButton' to={'/step2'}>Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    )
}