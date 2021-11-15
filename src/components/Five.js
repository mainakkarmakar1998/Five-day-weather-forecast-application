import React , {useEffect, useState} from "react";
import './style.css';

const Five = () =>{
    //-------------------------------------------
    const[city , setCity] = useState(null);
    const[search, setSearch]=useState(null); 
    //-------------------------------------------

    //Five day weather descripyion variables
    const[wt1, getW1]=useState();
    const[wt2, getW2]=useState();
    const[wt3, getW3]=useState();
    const[wt4, getW4]=useState();
    const[wt5, getW5]=useState();
   
    // Five day weather icon
    const[icon1,getIcon1]=useState();
    const[icon2,getIcon2]=useState();
    const[icon3,getIcon3]=useState();
    const[icon4,getIcon4]=useState();
    const[icon5,getIcon5]=useState();
    
    //Five day temp variables
    const[temp1,getTemp1]=useState();
    const[temp2,getTemp2]=useState();
    const[temp4,getTemp4]=useState();
    const[temp5,getTemp5]=useState();
    const[temp3,getTemp3]=useState();

    //Five day min temp variables
    const[mintemp1,getMintemp1]=useState();
    const[mintemp2,getMintemp2]=useState();
    const[mintemp3,getMintemp3]=useState();
    const[mintemp4,getMintemp4]=useState();
    const[mintemp5,getMintemp5]=useState();

    //Five day max temp variables
    const[maxtemp1,getMaxtemp1]= useState();
    const[maxtemp2,getMaxtemp2]= useState();
    const[maxtemp3,getMaxtemp3]= useState();
    const[maxtemp4,getMaxtemp4]= useState();
    const[maxtemp5,getMaxtemp5]= useState();

    //Five day date and time
    const [dt1, getdt1] = useState();
    const [dt2, getdt2] = useState();
    const [dt3, getdt3] = useState();
    const [dt4, getdt4] = useState();
    const [dt5, getdt5] = useState();

    const iconurl1= `http://openweathermap.org/img/wn/${icon1}.png`; 
    const iconurl2= `http://openweathermap.org/img/wn/${icon2}.png`; 
    const iconurl3= `http://openweathermap.org/img/wn/${icon3}.png`; 
    const iconurl4= `http://openweathermap.org/img/wn/${icon4}.png`; 
    const iconurl5= `http://openweathermap.org/img/wn/${icon5}.png`; 

 
     useEffect ( () => {
        const fetchApi = async() => {
            const url= `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=27276d912ba883cb4d1399268125be19`;

            const response = await fetch(url);
            const resJson= await response.json();
            setCity(resJson.list);
           
            try{ 
               
            //Weather description
           getW1(resJson.list[0].weather[0].description);
           getW2(resJson.list[8].weather[0].description);
           getW3(resJson.list[16].weather[0].description);
           getW4(resJson.list[24].weather[0].description);
           getW5(resJson.list[32].weather[0].description);
            
           
            //Weather icon
           getIcon1(resJson.list[0].weather[0].icon);
           getIcon2(resJson.list[8].weather[0].icon);
           getIcon3(resJson.list[16].weather[0].icon);
           getIcon4(resJson.list[24].weather[0].icon);
           getIcon5(resJson.list[32].weather[0].icon);
           
          
            //Getting Temperature
         getTemp1(resJson.list[0].main.temp);
         getTemp2(resJson.list[8].main.temp);
         getTemp3(resJson.list[16].main.temp);
         getTemp4(resJson.list[24].main.temp);
         getTemp5(resJson.list[32].main.temp);
         
           //Getting Min Temp
           getMintemp1(resJson.list[0].main.temp_min);
           getMintemp2(resJson.list[8].main.temp_min);
           getMintemp3(resJson.list[16].main.temp_min);
           getMintemp4(resJson.list[24].main.temp_min);
           getMintemp5(resJson.list[32].main.temp_min);

           //Getting Max Temp
           getMaxtemp1(resJson.list[0].main.temp_max);
           getMaxtemp2(resJson.list[8].main.temp_max);
           getMaxtemp3(resJson.list[16].main.temp_max);
           getMaxtemp4(resJson.list[24].main.temp_max);
           getMaxtemp5(resJson.list[32].main.temp_max);

           //Getting date and Time
            const Dt1 = resJson.list[0].dt; console.log(Dt1);
            var day1 = new Date(Dt1*1000);
            getdt1(day1.toDateString()); 

            const Dt2 = resJson.list[8].dt; console.log(Dt2);
            var day2 = new Date(Dt2*1000);
            getdt2(day2.toDateString());

            const Dt3 = resJson.list[16].dt;
            var day3 = new Date(Dt3*1000);
            getdt3(day3.toDateString());

            const Dt4 = resJson.list[24].dt;
            var day4 = new Date(Dt4*1000);
            getdt4(day4.toDateString());

            const Dt5 = resJson.list[32].dt;
            var day5 = new Date(Dt5*1000);
            getdt5(day5.toDateString());

                
          
        }
        catch{
           
        }
      };
        fetchApi();
    },[search] )
   
    return( <> 
              <div><h1 className="Heading">Weather Forecast Application</h1> 
              <div className="inputData"> 
              <label className="label">Enter the City</label>&nbsp;<input type="search" value={search}Cel className="inputField" onChange={(event)=>{setSearch(event.target.value)}}/>

    </div>   {
                    !city? (
                        <p className="errorMsg">No City Found</p>
                        
                        
                    ) :( <div>
                        
                        <div><h1 className="location">{search} </h1></div>
                         <div className="parent">
                        
                   
                       
            <div className="Box">
                <div className="daydiv">
                <h1 className="day">{dt1}</h1>
                </div><hr></hr>
               
              
                        <div className="D">  
                        
                            <div className="info">
                   
                                <h1 className="weather">{wt1}&nbsp;<img  className="image" src={iconurl1} height={40} width={40}/></h1>
                                <h1 className="citytemp">{temp1}°Cel </h1>
                                 <h3> <span>Min : {mintemp1}°Cel&nbsp;</span> &nbsp;<span>Max : {maxtemp1}°Cel</span></h3>
                                
                            </div>
                            
                        </div>
                        </div>
                        &nbsp;
                        <div className="Box">
                <div className="daydiv">
                <h1 className="day">{dt2}</h1>
                </div><hr></hr>
               
              
                        <div className="D">  
                        
                            <div className="info">
                   
                                <h1 className="weather">{wt2}&nbsp;<img  className="image" src={iconurl2} height={40} width={40}/></h1>
                                <h1 className="citytemp">{temp2}°Cel </h1>
                                 <h3> <span>Min : {mintemp2}°Cel&nbsp;</span> &nbsp;<span>Max : {maxtemp2}°Cel</span></h3>
                                
                            </div>
                            
                        </div>
                        </div>
                        &nbsp;
                        <div className="Box">
                <div className="daydiv">
                <h1 className="day">{dt3}</h1>
                </div><hr></hr>
               
              
                        <div className="D">  
                        
                            <div className="info">
                   
                                <h1 className="weather">{wt3}&nbsp;<img  className="image" src={iconurl3} height={40} width={40}/></h1>
                                <h1 className="citytemp">{temp3}°Cel </h1>
                                 <h3> <span>Min : {mintemp3}°Cel&nbsp;</span> &nbsp;<span>Max : {maxtemp3}°Cel</span></h3>
                                
                            </div>
                            
                        </div>
                        </div>
                        &nbsp;
                        <div className="Box">
                <div className="daydiv">
                <h1 className="day">{dt4}</h1>
                </div><hr></hr>
               
              
                        <div className="D">  
                        
                            <div className="info">
                   
                                <h1 className="weather">{wt4}&nbsp;<img  className="image" src={iconurl4} height={40} width={40}/></h1>
                                <h1 className="citytemp">{temp4}°Cel </h1>
                                 <h3> <span>Min : {mintemp4}°Cel&nbsp;</span> &nbsp;<span>Max : {maxtemp4}°Cel</span></h3>
                                
                            </div>
                            
                        </div>
                        </div>
                        &nbsp;
                        <div className="Box">
                <div className="daydiv">
                <h1 className="day">{dt5}</h1>
                </div><hr></hr>
               
              
                        <div className="D">  
                        
                            <div className="info">
                   
                                <h1 className="weather">{wt5}&nbsp;<img  className="image" src={iconurl5} height={40} width={40}/></h1>
                                <h1 className="citytemp">{temp5}°Cel </h1>
                                 <h3> <span>Min : {mintemp5}°Cel&nbsp;</span> &nbsp;<span>Max : {maxtemp5}°Cel</span></h3>
                                
                            </div>
                            
                        </div>
                        </div>
                        </div> </div> )
                   
                }   
                
           
       
            </div>
            

    </>
    )

}
export default Five;