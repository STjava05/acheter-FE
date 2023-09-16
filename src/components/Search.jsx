import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { setSearch } from '../reducers/apiSlice';
import { Form, InputGroup, Button } from 'react-bootstrap';
import './navBar.css'



function Search() {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(setSearch(searchText));
        console.log(searchText);
        setSearchText('');
      };
    
  return (
    <div>
    <Form onSubmit={handleSearch}>
        <InputGroup>
            <Form.Control
                type="text"
                placeholder="Search.."
                name="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <Button type="submit" variant="outline-secondary">
                <i className="fa fa-search"></i>
            </Button>
        </InputGroup>
    </Form>
</div>
  )
}

export default Search
