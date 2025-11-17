import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowForward } from '@mui/icons-material';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import Link from '@/src/components/Link';

export default function Page() {
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        p: 3,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          height: { xs: 80, md: 208 },
          flexShrink: 0,
          alignItems: 'flex-end',
          borderRadius: 2,
          bgcolor: 'primary.main',
          p: 2,
        }}
      >
        {/* <AcmeLogo /> */}
      </Paper>
      <Box
        sx={{
          mt: 2,
          display: 'flex',
          flexGrow: 1,
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
        }}
      >
        <Paper
          elevation={1}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 3,
            borderRadius: 2,
            bgcolor: 'background.paper',
            px: { xs: 3, md: 10 },
            py: 5,
            width: { xs: '100%', md: '40%' },
          }}
        >
          <Typography
            variant="h4"
            component="p"
            sx={{
              fontSize: { xs: '1.25rem', md: '1.875rem' },
              lineHeight: { xs: 1.75, md: 1.5 },
              color: 'text.primary',
            }}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <Link
              href="https://nextjs.org/learn/"
              style={{ color: '#3b82f6', textDecoration: 'none' }}
            >
              Next.js Learn Course
            </Link>
            , brought to you by Vercel.
          </Typography>
          <Button
            component={Link}
            href="/login"
            variant="contained"
            endIcon={<ArrowForward />}
            sx={{
              alignSelf: 'flex-start',
              textTransform: 'none',
              fontSize: { xs: '0.875rem', md: '1rem' },
              '&:hover': {
                bgcolor: 'primary.light',
              },
            }}
          >
            Log in
          </Button>
        </Paper>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 3,
            width: { xs: '100%', md: '60%' },
            px: { md: 14 },
            py: { md: 6 },
          }}
        >
          {/* Add Hero Images Here */}
        </Box>
      </Box>
    </Box>
  );
}
