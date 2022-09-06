import { createTheme } from "@mui/material";
import { color } from "@mui/system";


let btn = {
  fontFamily: 'var(--ff-secondary)',
  textTransform:'capitalize',
  fontSize: '1.4rem',
  padding:'.5rem 1.6rem',
  color: 'var(--primary-color)',
}


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


export const NavBtnTypo = createTheme({
  components:{
    MuiButton:{
      styleOverrides:{
        root:{
          ...btn,
          border:'.1rem solid #d8d7e6',
          transition:'.3s ease-in-out',
          '&:hover':{
            backgroundColor:'transparent',
            border:'.1rem solid var(--primary-color)',
          }
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
          backgroundColor:'var(--primary-color)',
          color:'white',
          border:'.1rem solid var(--primary-color)',
          transition:'.3s ease-in-out',
          '&:hover':{
            backgroundColor:'transparent',
            border:'.1rem solid var(--primary-color)',
            color:'var(--primary-color)'
          }
        }
      }
    }
  }
});



export const headingTypo = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          fontFamily: 'var(--ff-primary)',
          fontWeight: '600',
          letterSpacing: '1px',
          fontSize: '3.4rem',
          color: 'var(--secondary-color)',

          "@media screen and (max-width:800px)": {
            fontSize:'3rem'
          },
          "@media screen and (max-width:600px)": {
            fontSize:'1.8rem'
          }
        }
      }
    }
  }
});

export const filterTextTypo = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          fontFamily: 'var(--ff-secondary)',
          fontWeight: '600',
          fontSize: '1.8rem',
          color: 'rgba(58, 58, 57, 0.644)',
          textTransform:'capitalize',

          "@media screen and (max-width:900px)": {
            fontSize:'1.4rem'
          }
        }
      }
    }
  }
});

let HouseText = {
  fontFamily: 'var(--ff-secondary)',
  fontWeight: '600',
  textTransform:'capitalize'
}
export const HouseTextTypo = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          ...HouseText,
          fontSize: '1.6rem',
          color: 'var(--secondary-color)',
        }
      }
    }
  }
});

export const HouseTextTypo2 = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          ...HouseText,
          fontSize: '1rem',
          color: 'rgba(58, 58, 57, 0.644)',
        }
      }
    }
  }
});