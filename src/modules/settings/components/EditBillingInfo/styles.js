import styled from 'styled-components'
import { mediaQueries } from 'modules/core/utils/mediaQueries'

export const StyledMain = styled.div`
    @media ${mediaQueries.small}{
        padding: 10px;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 0px;
    width: 100%;
`
export const StyledRoot = styled.div`
    width: 722px;
    display: flex;
    flex-direction: column;
`

export const StyledContainer = styled.div`
    box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.06);
    background: #FFFFFF;
`;

export const StyledForm = styled.div`
    padding: 32px 16px;
    & .sc-AxirZ {
        height: 60px;
    }

    & .MuiFormLabel-root {
        font-size: 15px !important;
    }
    & .sc-AxirZ {
        border: 0px;
        background-color: #F5F5F5;
    }

    & .sc-AxiKw {
        margin-bottom: 16px;
    }

    @media ${mediaQueries.small}{
        width: 100%;
        padding: 32px;
        
        & .svg-inline--fa{
            font-size: 16px;
        }
        
        
        & .MuiInputLabel-root {
            color: #486581;
            &:focus {
                color: red !important;
            }
        }
        
        & .MuiPaper-root {
            width: 34.2%;
        }
    }
`;

export const StyledWrap = styled.div`    
    display: flex;
    flex-direction: row;

    @media (max-width: 599px) {
        flex-direction: column;
    }
}
`

export const StyledCName = styled.div`    
    margin-right: 0px;
    width: 100%;
    @media ${mediaQueries.small} {
        margin-right: 8px;
        width: 50%;
    }
}
`
export const StyledLname = styled.div`    
    margin-left: 0px;
    width: 100%;
    @media ${mediaQueries.small} {
    margin-right: 8px;
    width: 50%;
    }
}
`

export const StyledAName = styled.div`    
    margin-left: 0px;
    width: 100%;
    @media ${mediaQueries.small} {
        margin-left: 8px;
        width: 50%;
    }
}
`

export const StyledIcon = styled.span`   
    margin-right: 16px;
    font-size: 13px;
    line-height: 19px;
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.silver2};
    &  .svg-inline--fa{
        margin-right: 0;
    }
    @media ${mediaQueries.small} {
        margin-right: 24px;
    }
}
`
export const StyledCardWrap = styled.div`    
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    ${({ error, theme }) => error && `
    border: 1px solid ${theme.colors.red};
    `} 
    @media ${mediaQueries.small} {
        flex-direction: row;
    }
}
`
export const StyledCardText = styled.div`
    flex: 2;
    width: 100%
    & .MuiFormControl-root{
        & .MuiFormLabel-root {
            font-size: 15px;
        }
    }
    @media ${mediaQueries.small} {
        & .MuiFormLabel-root{
            font-size: 13px;
            color: ${(props) => props.theme.colors.grey_blue};
            ${({ error, theme }) => error && `
            color:  ${theme.colors.red};
            `} 
        }
     }
}
`
export const StyledZipeCode = styled.div`
    margin-right: 0;
    
    @media ${mediaQueries.small} {
        margin-right: 8.27px;
     }
     
`;
     
export const StyledState = styled.div`
    margin-right: 0;
    margin-left: 0;
    
    @media ${mediaQueries.small} {
        margin-left: 8.27px;
        margin-right: 8.27px;
    }

    
`;

export const StyledCity = styled.div`
    margin-left: 0px;
    
    @media ${mediaQueries.small} {
        margin-left: 8.27px;
    }
`;

export const StyledButton = styled.div`
    margin-top: 8px;
    display: flex;
    justify-content: flex-end;

    & .MuiButtonBase-root {
        border-radius: 0;
        width: 100%;
        height: 56px;
        & .MuiButton-label {
            font-size: 17px;
            font-weight: 600;
            line-height: 17px;
            font-family: Poppins;
            font-style: normal;
        }
        
        @media ${mediaQueries.small} {
            border-radius: 3px;
            width: 135px;
            font-size: 13px;
            
            & .MuiButton-label {
                font-size: 13px;
            }
        }
    }
`;