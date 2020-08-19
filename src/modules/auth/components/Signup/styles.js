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
    @media (max-width: 599px) {
        width: 100%;
        padding: 10px;
      }
`
export const StyledLogo = styled.div`
    width: 60px;
    height: 60px;
    display: block;
    margin-bottom: 45px;
`
export const StyledTypography = styled.div`
    height: 36px;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 47px;
    @media(max-width: 599px) {
        font-size: 26px;
        height: auto;
        line-height: 28px;
        padding: 0 10px;
        font-weight: bold;
        margin-bottom: 42px;
     
    }
`
export const StyledWrap = styled.div`    
    display: flex;
    flex-direction: row;
    @media (max-width: 599px) {
        flex-direction: column;
    }
}
`
export const StyledFname = styled.div`    
    margin-right: 8px;
    width: 50%;
    @media (max-width: 599px) {
        margin-right: 0px;
        width: 100%;
    }
}
`
export const StyledLname = styled.div`    
    margin-left: 8px;
    width: 50%;
    @media (max-width: 599px) {
        margin-left: 0px;
        width: 100%;
    }
}
`
export const StyledForm = styled.div`   
    width: 100%;
}
`
export const StyledAgree = styled.span` 
    margin-right: 4px;
}
`
export const StyledWrapper = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 599px) { 
        margin-bottom: 29px;
    }
    margin-bottom: 31px;
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
