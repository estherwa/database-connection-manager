import Dialog from '@mui/material/Dialog/Dialog';
import styled from 'styled-components';
import { size } from '../../utils/device';

export const StyledDialog = styled(Dialog)(
    ({ theme: { colors } }) => `

    .MuiDialogContent-root{
        overflow: hidden;
    }
  
    & > .MuiDialog-container > .MuiPaper-root {
        display: flex;
        align-items: center;
        position: absolute;
        padding: 60px 170px 60px 170px;
        border-radius: 24px;
        max-width:100%;
        box-sizing: border-box;
        
        // @media (max-width:${size.laptopL}) {
        //     padding: 20px 35px;
        // }
        
        // @media (max-width:${size.laptop}) {
        //     padding: 11px 30px 21px;
        // }
        
        // @media (max-width:${size.tabletL}) {
        //     padding: 6px 25px 13px;
        // }
    }
  
   .alert-dialog-title{
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        padding: 25.5px 0 22px;
        font-family: "Louis Vuitton Demi";
    }

    .alert-dialog-description{
        padding : 0 95px;
        font-size: 17px;
        line-height: 20px;
        text-align: center;
        padding:0 130px;
    
        font-family: "Louis Vuitton Regular";
    }

    .alert-dialog-actions{
        gap: 12px;
        position: absolute;
        font-family: "Louis Vuitton Regular";
        right: 60px;
        bottom: 39px;
        padding:0;
    
        
        @media (max-width:${size.laptopL}) {
            right: 30px; 
            bottom: 30px;
        }

        @media (max-width:${size.laptopL}) and (min-height: 620px) {
            right: 60px;
            bottom: 30px;
        }

        @media (max-width:${size.laptop}) {
            right: 50px;
            bottom: 21px;
        }
        
        @media (max-width:${size.tabletL}) {
            right: 50px;
            bottom: 13px;
        }
    }
`
);