import { ReactNode } from 'react';
import { Header } from '../Header';
import * as C from './styled';
import { SideBarItem } from '../SideBarItem';
import { useForm } from '../../contexts/FormContext';
type Props = {
    children: ReactNode;
}
export const Theme = ({children}: Props) => {
    const ctxForm = useForm();

    return (
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.SideBar>
                        <SideBarItem
                            title='Pessoal'
                            description='Se indentifique'
                            icon='profile'
                            path='/'
                            active={ctxForm?.state.currentStep === 1}
                        />

                        <SideBarItem
                            title='Profissional'
                            description='Seu nível'
                            icon='book'
                            path='/step2'
                            active={ctxForm?.state.currentStep === 2}
                        />

                        <SideBarItem
                            title='Contatos'
                            description='Como te achar'
                            icon='mail'
                            path='/step3'
                            active={ctxForm?.state.currentStep === 3}
                        />
                        <SideBarItem
                            title='Concluido'
                            description='Tudo certo!'
                            icon='check'
                            path='/step4'
                            active={ctxForm?.state.currentStep === 4}
                        />
                    </C.SideBar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}