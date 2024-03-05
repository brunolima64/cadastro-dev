import { useNavigate } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import * as C from './styles';
import { ChangeEvent, useEffect } from 'react';
import { FormActions, useForm } from '../../contexts/FormContext';

export const FormStep4 = () => {
    const navigate = useNavigate();
    const ctxForm = useForm();

    useEffect(() => {
        if(ctxForm?.state.name === '') {
            navigate('/');
        } else {
        ctxForm?.dispatch({
            type: FormActions.setCurrentStep,
            payload: 4
        })}
    }, [])

    return (
        <Theme>
            <C.Container>
                <h1>Parábens, {ctxForm?.state.name}. </h1>
                <p>Cadastro concluido com sucesso.</p>

                <hr />

                <div>  
                    <label>
                        Nome
                        <C.ResultData>{ctxForm?.state.name}</C.ResultData>
                    </label>
                    <label>
                        Email
                        <C.ResultData>{ctxForm?.state.email}</C.ResultData>
                    </label>
                    <label>
                        Github
                        <C.ResultData>{ctxForm?.state.github}</C.ResultData>
                    </label>
                    {ctxForm?.state.level === 0 &&
                        <label>
                            Nivel atual
                            <C.ResultData>Iniciante 🥳</C.ResultData>
                        </label>
                    }
                    {ctxForm?.state.level === 1 &&
                        <label>
                            Nivel atual
                            <C.ResultData>Profissional 😎</C.ResultData>
                        </label>
                    }
                </div>
            </C.Container>
        </Theme>
    )
}