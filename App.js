import './App.css';
import {useEffect, useState} from 'react';

function App() {

    let superhero={
          name:null,
          strength:null,
          intelligence:null,
          weapons:null,
          planet:null,
          imageURL:null
    };

    let [superheroes,setSuperheroes]=useState([]);

    let [createMargin,setCreateMargin]=useState(-30);

    useEffect(()=>{


        let localData=localStorage.getItem("superheroes");

        if(localData===null)
        {
          localStorage.setItem("superheroes",JSON.stringify([]));
        }
        else 
        {
          setSuperheroes(JSON.parse(localData));
        }


    },[])

    

    function createSuperhero()
    {
        let tempArray=[...superheroes,superhero];
        setSuperheroes(tempArray);

        localStorage.setItem("superheroes",JSON.stringify(tempArray));

        setCreateMargin(-30);

    }


    function deleteSuperhero(index)
    {
        let tempArray=[...superheroes];
        tempArray.splice(index,1);
        setSuperheroes(tempArray);
        localStorage.setItem("superheroes",JSON.stringify(tempArray));
    }


  return (
    <div className="App">


        <div className='create-form' style={{marginLeft:createMargin+"%"}}>

            <h1 className='section-title'>Add Superhero</h1>

            <input type="text" onChange={(e)=>{
                superhero.name=e.target.value;
            }} placeholder='Enter Name'/>

            <input type="text" onChange={(e)=>{
                superhero.strength=e.target.value;
            }} placeholder='Enter Strength'/>

            <input type="text" onChange={(e)=>{
                superhero.intelligence=e.target.value;
            }} placeholder='Enter Intelligence'/>

            <input type="text" onChange={(e)=>{
                superhero.weapons=e.target.value;
            }} placeholder='Enter Weapons'/>

            <input type="text" onChange={(e)=>{
                superhero.planet=e.target.value;
            }} placeholder='Enter Planet'/>

            <input type="text" onChange={(e)=>{
                superhero.imageURL=e.target.value;
            }} placeholder='Enter Image Link'/>

            <button className='form-btn' onClick={createSuperhero}>Create</button>



        </div>


        <div className='header'>
            <h1 className='page-title'>Superheroes</h1>
            <button className='btn' onClick={()=>{
              setCreateMargin(0);
            }}>Add Superhero</button>
        </div>

        <div className='display'>

          {
            superheroes.map((superhero,index)=>{
              return (

                  <div key={index} className='superhero'>
                    <div className='super-img'>
                        <img className='img' src={superhero.imageURL}/>
                    </div>
                    <div className='super-details'>
                        <div>
                          <h2 className='name'>{superhero.name}</h2>
                          <h3 className='planet'>{superhero.planet}</h3>
                        </div>

                        <div className='powerstats'>
                          <div>
                            <p>Strength</p>
                            <div className='full'>
                              <p className='strength' style={{width:superhero.strength+"%"}}></p>
                            </div>
                          </div>
                          <div>
                            <p>Intelligence</p>
                            <div className='full'>
                            <p className='intelligence' style={{width:superhero.intelligence+"%"}}></p>
                            </div>
                          </div>
                        </div>

                        <div className='actions'>
                          <i className="fa-solid fa-file-pen update"></i>
                          <i className="fa-solid fa-trash delete" onClick={()=>{
                            deleteSuperhero(index);
                          }}></i>
                        </div>

                        </div>
                    </div>

              )
            })
          }

            

        </div>

    </div>
  );
}

export default App;


