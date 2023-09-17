import React, { useEffect,useState} from 'react'
import {Box, List, ListItem} from '@mui/material'
import styled from '@emotion/styled'
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch, useSelector} from 'react-redux';
import {fetchBackendData} from '../redux/actions/productAction'
import {Link} from 'react-router-dom'

function Search() {

  const {products} = useSelector(state => state.getProducts);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchBackendData())
  },[dispatch])


    styled(Box)(({theme})=>({
        [theme.breakpoints.down('md')]:{
          width:'100vw',
          marginLeft: 10,
        }
      }))

    const Searchicon=styled(Box)`
    padding:5px;
    font-size:unset;
    color:#fff;
    `

    const[text,newText] = useState('');

    const handleSearch  = (e)=>{
      e.preventDefault();
      newText(e.target.value);
      console.log(e.target.value);
    }

    const clearSearch = ()=> {
      newText('');
    }

    const ListWrapper = styled(List)`
    position:absolute;
    background:#ffffff;
    color:#000;
    margin-top:40px;
    `

  return (
    <Box
    value={text}
    sx={{
      color:'#000',
      width:'38%',
      borderRadius:4,
      marginLeft: 20,
      display:'flex',
    }}>
      <input className='pl-[20px] w-[100%] flex rounded-xl rounded-md focus:outline-none focus:border-indigo-500' placeholder='Search for Prodects, Brands and More' 
      onChange={(e)=>{handleSearch(e)}}
      value={text}
      />  
      <Searchicon>
        <SearchIcon />
      </Searchicon>
     
      {
        text && 
        <ListWrapper onClick={clearSearch}>
        {
          products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(
            <ListItem >
              <Link to = {`/product/${product.id}`}>
                {product.title.longTitle}
              </Link>
            </ListItem>
          ))
        }
        </ListWrapper>
      }
    </Box>
  )
}

export default Search
