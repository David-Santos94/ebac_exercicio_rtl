import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('inserção de dois comentários', () => {
        const { debug } = render(<PostComment/>)
        
        fireEvent.change(screen.getByTestId('text'), {
            target: {
                value: 'Comentario de teste 1',
            }
        })
        fireEvent.click(screen.getByTestId('button'))
        
        fireEvent.change(screen.getByTestId('text'), {
            target: {
                value: 'Comentario de teste 2',
            }
        })
        fireEvent.click(screen.getByTestId('button'))
        
        expect(screen.getAllByTestId('comentario')).toHaveLength(2)
        debug()
    })
});