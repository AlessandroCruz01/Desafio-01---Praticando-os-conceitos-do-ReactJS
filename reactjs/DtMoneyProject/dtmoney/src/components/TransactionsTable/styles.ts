import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 4rem;
    
    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child{
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }

        }

        td > button {
            font-size: 1.3rem;
         
            right: 1.5rem;
            top: 1.5rem;
            border: 0;
            background: transparent;
            transition: 0.2s;
            color: var(--red);

            &:hover {
                filter: brightness(.10);
            }
        }
    }
`;
