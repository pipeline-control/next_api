import Home from '../components/Home'
import { Typography } from '@material-ui/core';
const index = (data) => {
    console.warn("data",data);
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <Typography variant="h4" align='center' style={{fontFamily:"monospace",fontWeight:"bolder",fontSize:"50px"}}>Next Api</Typography>
      <div style={{display:'flex',marginTop:"20px",flexWrap:"wrap",justifyContent:"center"}}>
      {data.data.map((e)=>{
        return(
          <Home data = {e}
          key={data.data.indexOf(e)}/>
        )
      })
}
</div>
    </div>
  )
}

export const getStaticProps= async()=>{
  const res = await fetch('https://picsum.photos/v2/list');
  const data = await res.json();
    return{
 props:{
   data:data,
 }
 
  }
}

export default index;
