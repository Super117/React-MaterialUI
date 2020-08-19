import styled from 'styled-components'

export const StyledMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`
export const StyledRoot = styled.div`
    width: 512px;
    display: flex;    
    flex-direction: column;
    align-items: center;
    @media(max-width: 599px) {
        width: 100%;
        padding: 16px;
        margin: 130px auto;
    }
`
export const StyledLogo = styled.div`
    width: 60px;
    height: 60px;
    display: block;
    margin-bottom: 45px;
    @media(max-width: 599px) {
        margin-bottom: 20px;
    }
`
export const StyledTypography = styled.div`
    height: 36px;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 43px;
    @media(max-width: 599px) {
        font-size: 26px;
        height: auto;
        line-height: 28px;
        padding: 0 10px;
        margin-bottom: 42px;
        font-weight: bold;        
    }
`
export const StyledWrapper = styled.div`
flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 31px;
    @media(max-width: 599px) { 
        margin-bottom: 29px;
        margin-top: 4px;
    }
    & .MuiFormControl-root{     
        & .MuiFormGroup-root{
            justify-content: center;
            & .MuiFormControlLabel-root{
                margin-right: 12px;
                & .MuiTypography-root {
                    font-size: 13px;
                    line-height: 19px;
                    color: ${(props) => props.theme.colors.nero};
                }
                & .PrivateSwitchBase-root-1{
                    padding: 0;
                    & .MuiIconButton-label {
                        & .MuiSvgIcon-root {
                            width: 24px;
                            height: 24px;        
                        }
                    }                    
                }
            }
        }
    }
}
`
export const StyledForm = styled.div`   
    width: 100%;
}
`
export const StyledButton = styled.div`   
    margin-top: 4px;
}
`
export const StyledIcon = styled.span`   
    margin-right: 24px;
    font-size: 13px;
    line-height: 19px;
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.silver2};
    &  .svg-inline--fa{
        margin-right: 0;
    }
    @media(max-width: 599px) {
        margin-right: 16px;
    }
}
`
export const StyledDomain = styled.span`   
    padding: 19px 24px;
    font-size: 13px;
    line-height: 19px;
    color: ${(props) => props.theme.colors.charcoal};
    height: 58px;
    width: 136px;
    background:  ${(props) => props.theme.colors.white_smoke};
    @media(max-width: 599px) {
        padding: 19px 16px;
        width: 134px; 
    }
}
`
export const StyledAgree = styled.span` 
    margin-right: 4px;
}
`
