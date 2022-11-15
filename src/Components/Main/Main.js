import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import './Main.scss'
import SearchIcon from '../../Assets/Search.png'
import axios from 'axios';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Rating,  } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'




function Main() {
  //const [open, setOpen] = useState(false)
  const [category, setCategory] = useState([])
  const [nextPage, setNextPage] = useState({meals:[]})
  const [search, setSearch] = useState("")
  const [value, setValue] = useState(null)
  const [canadianMeals, setCanadianMeals] = useState({meals:[]});
  const [searchMeal, setSearchMeal] = useState({meals:[]})
  const [hide, setHide] = useState(false);
  const [categoryRender, setCategoryRender] = useState({meals:[]})

  const canadianURL = "https:themealdb.com/api/json/v1/1/filter.php?a=Canadian"
  const searchMealURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  const categoryURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`

  const apiRequest = async() => {
   await  axios.get(canadianURL)
     .then(res => setCanadianMeals(res.data)) 
  }

  const searchMealRequest = async() => {
    await axios.get(searchMealURL)
    .then(res => setSearchMeal(res.data))
  }

  const categoryFilter = () => {
     axios.get(categoryURL)
    .then(res => setCategoryRender(res.data))
  }

  const nextPageRequest = async() => {
    await  axios.get(canadianURL)
      .then(res => setNextPage(res.data)) 
   }
 
  useEffect(() => {
    apiRequest();
    previousPage();
  },[])

  useEffect(() => {
    categoryFilter();
  },[category])



  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });

 

 
  const onSubmit =  (e) => {
    e.preventDefault( );
    searchMealRequest();
    setHide(true);

  }

  const handlePaginations = () => {
    nextPageRequest();
    setHide(true);
  }

  const previousPage = () => {
    apiRequest();
  }
 



  return (
    <div >
        <NavBar></NavBar>

        <div className='main'>

          <header className='main-header'>
              <h1 className='main-headerTittle'>
                <span className='span1'>¡BIENVENIDOS!</span>
                <span className= 'span2'>navega por las más</span>
              
                <span><p className='span3'>deliciosas recetas...</p></span>
            </h1>
          </header>

          <form onSubmit={onSubmit} className='header-search'>
            
            <img src={SearchIcon} alt=""></img>
            <input type="text" onChange={(e) => setSearch(e.target.value)} className="header-searchInput" placeholder='Coockies...'></input>
            <input type ='submit'className="header-searchInput2" value="Buscar!"></input>
          </form>


         
          <div className='flex justify-center items-center mt-3 mb-[-10px]'>
          <div className='flex justify-center ml-10'>
            <Dropdown text="Categorias" floating labeled button className='icon' style={{width: 200, marginLeft: -50, textAlign: "center" }}>
							<Dropdown.Menu >
									<Dropdown.Item onClick={ () => {
                    const newCategory = "breakfast" ;
                    setCategory(newCategory);
                    setHide(true);
                  console.log(category);
                 }
                  }> Breakfast
									</Dropdown.Item>
									<Dropdown.Item onClick={ () => {setCategory("Chicken") ;
                  console.log(category);
                  setHide(true);
                categoryFilter();
                 }}> Chicken
									</Dropdown.Item>
									<Dropdown.Item onClick={ () => {setCategory("Desert") ;
                  console.log(category);
                  setHide(true);
                categoryFilter();
                 }}> Desert
									</Dropdown.Item>
									<Dropdown.Item onClick={ () => {setCategory("Lamb") ;
                  console.log(category);
                  setHide(true);
                categoryFilter();
                 }}> Lamb
									</Dropdown.Item>
									<Dropdown.Item onClick={ () => {setCategory("Miscellaneous") ;
                  setHide(true);
                  console.log(category);
                categoryFilter();
                 }}> Miscellaneous
									</Dropdown.Item>
									<Dropdown.Item onClick={ () => {setCategory("Pasta") ;
                  console.log(category);
                  setHide(true);
                categoryFilter();
                 }}> Pasta
									</Dropdown.Item>
									<Dropdown.Item onClick={ () => {setCategory("Pork") ;
                  console.log(category);
                  setHide(true);
                categoryFilter();
                 }}> Pork
									</Dropdown.Item>
									<Dropdown.Item onClick={ () => {setCategory("Seafood") ;
                  console.log(category);
                  setHide(true);
                categoryFilter();
                 }}> Seafood	
									</Dropdown.Item>
									<Dropdown.Item onClick={ () => {setCategory("Side") ;
                  console.log(category);
                  setHide(true);
                categoryFilter();
                 }}> Side
									</Dropdown.Item>
									<Dropdown.Item onClick={ () => {setCategory("Starter") ;
                  console.log(category);
                  setHide(true);
                categoryFilter();
                 }}> Starter
									</Dropdown.Item>
									<Dropdown.Item onClick={ () => {setCategory("Vegan") ;
                  console.log(category);
                  setHide(true);
                categoryFilter();
                 }}> Vegan
									</Dropdown.Item>
									<Dropdown.Item onClick={ () => {setCategory("Vegetarian") ;
                  console.log(category);
                  setHide(true);
                categoryFilter();
                 }}> Vegetarian
									</Dropdown.Item>
									<Dropdown.Item onClick={ () => {setCategory("Beef") ;
                  console.log(category);
                  setHide(true);
                categoryFilter();
                 }}> Beef
									</Dropdown.Item>
									<Dropdown.Item onClick={ () => {setCategory("Goat") ;
                  console.log(category);
                  setHide(true);
                categoryFilter();
                 }}> Goat
									</Dropdown.Item>
								</Dropdown.Menu >
							</Dropdown>
						</div>
            <p className='search-term'> Busquedas recientes:  </p>
          </div>

         

          { canadianMeals.meals.slice(8).map((meal, i) => {

          return (<div className={ hide == false ? "inline-block" : "hidden"}><div key={meal.idMeal}>
            <div className='w-[250px] ml-[45px] my-8 p-2 bg-white rounded-xl border border-gray-200 shadow-md'>
              <img className='rounded-lg object-contain cursor-pointer '  src={meal.strMealThumb} alt="" />
              <h2 className='text-center'>{meal.strMeal}</h2>

              <Rating 
              className='mt-2 mr-5 ml-5'
                      value={value}
                      onChange={(e, newValue) => {
                      setValue(newValue)}}>        
             </Rating>

               <StyledRating
                      
                      defaultValue={0}
                      precision={1}
                      max={1}
                      icon={<FavoriteIcon fontSize="inherit" />}
                      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />

            </div>
          </div></div>)} 
          )}

          
          {searchMeal.meals === null ?
          
          (<div className='text-center m-10'>Lo lamentamos, aún no hay una receta bajo ese criterio.</div>) 
          
          : searchMeal.meals.map((result, i) => {

            return (<div className='inline-block '><div key={result.idMeal}>
            <div className='w-[300px] ml-[45px]  my-8 p-2 bg-white rounded-xl border border-gray-200 shadow-md'>
              <img className='rounded-lg w-[100%] cursor-pointer' src={result.strMealThumb}  alt="" />
              <h2 className='text-center'>{result.strMeal}</h2>

              <Rating 
              className='mt-2 mr-5 ml-5'
                      value={value}
                      onChange={(e, newValue) => {
                      setValue(newValue)}}>        
             </Rating>

               <StyledRating
                      
                      defaultValue={0}
                      precision={1}
                      max={1}
                      icon={<FavoriteIcon fontSize="inherit" />}
                      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />

            </div>
          </div></div>)} 
           )}


           {categoryRender.meals === null ? null : categoryRender.meals.map((result, i) => {

              return (<div className='inline-block '><div key={result.idMeal}>
              <div className='w-[300px] ml-[45px]  my-8 p-2 bg-white rounded-xl border border-gray-200 shadow-md'>
                <img className='rounded-lg w-[100%] cursor-pointer' src={result.strMealThumb}  alt="" />
                <h2 className='text-center'>{result.strMeal}</h2>

                <Rating 
                className='mt-2 mr-5 ml-5'
                        value={value}
                        onChange={(e, newValue) => {
                        setValue(newValue)}}>        
              </Rating>

                <StyledRating
                        
                        defaultValue={0}
                        precision={1}
                        max={1}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                      />
                      
              </div>
              </div>
              </div>)})
           }

           {nextPage.meals.splice(3, 5).map((item, i) => {
            return (<div className='inline-block '><div key={item.idMeal}>
            <div className='w-[300px] ml-[45px]  my-8 p-2 bg-white rounded-xl border border-gray-200 shadow-md'>
              <img className='rounded-lg w-[100%] cursor-pointer' src={item.strMealThumb}  alt="" />
              <h2 className='text-center'>{item.strMeal}</h2>

              <Rating 
              className='mt-2 mr-5 ml-5'
                      value={value}
                      onChange={(e, newValue) => {
                      setValue(newValue)}}>        
             </Rating>

               <StyledRating
                      
                      defaultValue={0}
                      precision={1}
                      max={1}
                      icon={<FavoriteIcon fontSize="inherit" />}
                      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />

            </div>
          </div></div>)
           } )}


           
           

         


          <div className='flex justify-center border-b-[10px] border-transparent m-[40px]'>
           
            <button onClick={handlePaginations} className={categoryRender === null || searchMeal === null ? "hidden" : "ml-3 bg-indigo-600 w-[100px] h-[30px] rounded-3xl text-white"}>Siguiente</button>
          </div>
        </div> 
        
    </div>
    
  )
}

export default Main

