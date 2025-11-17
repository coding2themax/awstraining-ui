import { Public } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        lineHeight: 1,
        color: 'white',
        fontFamily: lusitana.style.fontFamily,
      }}
    >
      <Public
        sx={{
          height: 48,
          width: 48,
          transform: 'rotate(15deg)',
        }}
      />
      <Typography
        sx={{
          fontSize: '44px',
          fontFamily: 'inherit',
        }}
      >
        Acme
      </Typography>
    </Box>
  );
}
