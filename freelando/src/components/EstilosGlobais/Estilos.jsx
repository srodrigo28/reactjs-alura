import { Global, css } from "@emotion/react"

const estilos = css`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: sans-serif;

        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        background-color: darkviolet;
    }
    h1{
        font-size: 4rem;
        color: #fff;
    }
`

export const Estilos = () => {
    return (<Global styles={estilos} />)
}