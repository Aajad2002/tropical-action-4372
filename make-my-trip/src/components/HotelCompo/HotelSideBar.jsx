import React,{useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
const HotelSideBar = () => {
    const [searchParams,setSearchParmas]=useSearchParams();

//////////filter basis on star
const initialStar = searchParams.getAll("star")
const [star, setStar] = useState(initialStar || [])
// console.log(serachParams)
const handleChange = (e) => {
    let added = [...star];
    const value = e.target.value;
    if (added.includes(value)) {
        added = added.filter((el) => el !== value)
    } else {
        added.push(value)
    }
    setStar(added)
}

    /////////sorting logic
    const initialSort=searchParams.get('sort')
    console.log(initialSort)
    const [sort ,setSort]=useState(initialSort||'')
    const handleSort=(e)=>{
        let val=e.target.value;
        val==sort?setSort(null):setSort(val)
        // setSort(e.target.value)
    }
    useEffect(() => {
        if(sort||star){

            let params = {      
            }
            star &&( params.star=star);
            sort && (params.sort=sort)
            // search && (params.search=search)
            setSearchParmas(params)
        }
    }, [sort,star])
    return (
        <DIV>
            <h2>Sort By Price</h2>
            <input type="checkbox" checked={sort=="asc"} value={"asc"} onChange={handleSort} /><label>Low to High</label><br />
            <input type="checkbox" checked={sort=="desc"} value={'desc'} onChange={handleSort} /><label>High to Low</label>
            <br />
            <br />
            <h2>Star Category</h2>
            <input type='checkbox'onChange={handleChange} value={"5"} checked={star.includes("5")}/><label>5 Star</label><br />
            <input type='checkbox' onChange={handleChange} value={"4"} checked={star.includes("4")} /><label>4 Star</label><br />
            <input type='checkbox' onChange={handleChange} value={"3"} checked={star.includes("3")} /><label>3 Star</label>
            <br />
            <br />
            <h2>Guest Love</h2>
            <input type='checkbox' /><label>Swimming Pool</label><br />
            <input type='checkbox' /><label>Wi-Fi</label><br />
            <input type='checkbox' /><label>Spa</label><br />
        </DIV>
    )
}
const DIV=styled.div`
   
`
export default HotelSideBar