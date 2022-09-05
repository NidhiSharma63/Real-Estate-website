import { createTheme } from "@mui/material";
import { color } from "@mui/system";

export const LogoTypo = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          fontFamily: 'var(--ff-primary)',
          fontWeight: '600',
          letterSpacing: '1px',
          fontSize: '2rem',
          color: 'var(--logo-color)',
        }
      }
    }
  }
});

let btn = {
  fontFamily: 'var(--ff-secondary)',
  textTransform:'capitalize',
  fontSize: '1.4rem',
  padding:'.5rem 1.6rem',
  color: 'var(--primary-color)',
}
export const NavBtnTypo = createTheme({
  components:{
    MuiButton:{
      styleOverrides:{
        root:{
          ...btn,
          border:'.1rem solid #d8d7e6'
        }
      }
    }
  }
});
export const NavBtnTypo2 = createTheme({
  components:{
    MuiButton:{
      styleOverrides:{
        root:{
          ...btn,
          border:'.1rem solid var(--primary-color)',
          backgroundColor:'var(--primary-color)',
          color:'white'
        }
      }
    }
  }
});