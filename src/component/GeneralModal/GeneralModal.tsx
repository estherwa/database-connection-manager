import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { StyledDialog } from './GeneralModal.style';
import { CSSProperties } from "styled-components";

type GeneralModalProps = {
  displayModal: boolean;
  children: JSX.Element;
  btnComp?: JSX.Element;
  displayClose?: boolean;
  customStyle?: { [key: string]: CSSProperties };
  handleCloseModal: () => void;
};


const GeneralModal = ({ displayModal, btnComp, children, displayClose = true, handleCloseModal }: GeneralModalProps) => {
  return (
    <div style={{ position: "absolute" }}>
      <StyledDialog open={displayModal} onClose={handleCloseModal} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogContent>
          {children}
          {btnComp && (
            <DialogActions id="alert-dialog-actions" className="alert-dialog-actions">
              {btnComp}
            </DialogActions>
          )}
        </DialogContent>
      </StyledDialog>
    </div>
  );
};

export default GeneralModal;