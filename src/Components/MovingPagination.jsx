import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export default function MovingPagination({setPage, Nbr}) {
  const handlePage = (page) => {
    setPage(page);
    window.scrollTo(0, 0);
  };
  const  style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop : '0.3rem',
  }
  return (
    <div className="stackmaterialui" style={style}>
      <Stack spacing={2} style = {{backgroundColor : '#ececec', borderRadius : '20px', marginTop : '3px', height : '2rem'}}>
      <Pagination count={Nbr} onChange = {(t) => handlePage(t.target.textContent)} />
    </Stack>
    </div>
  )
}
