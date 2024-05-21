import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

const ProductsPage = () => {
    const navigate = useNavigate();
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'http://universities.hipolabs.com/search?country=United+States',
                headers: {
                  'content-type': 'application/json'
                }
            };
              
            try {
                const response = await axios.request(options);
                setColleges(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const goHomeHandler = () => {
       navigate('/');
    }
    return (
        <div>
            Products Page
            <p onClick={goHomeHandler} style={{textDecoration: 'underline' }}>Go home</p>

            <h2>Univeristy List</h2>
            {
                colleges.map((college, index) => index < 10 && (
                        <div key={college.name}>
                            <p>Name: <a href={college.web_pages} target="__blank">{college.name}</a></p>
                        </div>
                ))
            }
        </div>
    );
}

export default ProductsPage;