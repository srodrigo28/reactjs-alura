import styled from '@emotion/styled'

export function Card({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    color: #000;
    padding: 32px;
    border-radius: 16px;
    background-color: #EBEAF9;
    border: 1px solid #5754ed;

`