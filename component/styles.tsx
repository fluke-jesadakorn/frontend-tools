import styled, { CSSProperties } from 'styled-components'
export const Button = styled.button<CSSProperties>`
    /* Custom styled */
    width:${props => props.width};
    margin:${props => props.margin};
`

// export const Tools = styled.div`
//     ${props => props}
// `

// export const Input = styled.input`
//     ${props => props}
// `

// export const Container = styled.div`
//     ${props => props}
// `