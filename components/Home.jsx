/* eslint-disable @next/next/no-img-element */
const Home = (data) => {
    return (
        <div style={{width:"30%",backgroundColor:"white",marginRight:"20px",paddingBottom:"10px",marginBottom:"20px" }}>
        <img src={data.data.download_url} style={{width:"380px",height:"250px"}} alt='Your image'></img>
        <p style={{fontFamily:"monospace",fontSize:"larger"}}>{data.data.author}</p>

        </div>
    )
}

export default Home;
