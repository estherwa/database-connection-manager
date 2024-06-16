// Table.style.ts
import { SxProps, Theme } from '@mui/system';

export const dataGridStyles: SxProps<Theme> = {
  '& .MuiDataGrid-root': {
    border: 'none',
  },
  '& .MuiDataGrid-cell': {
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
  },
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
  },
  '& .MuiDataGrid-footerContainer': {
    borderTop: '1px solid rgba(224, 224, 224, 1)',
  },

};
