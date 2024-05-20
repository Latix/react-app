import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
    const navigate = useNavigate();

    const goHomeHandler = () => {
       navigate('/');
    }
    return (
        <div>
            Products Page
            <p onClick={goHomeHandler} style={{textDecoration: 'underline' }}>Go home</p>
        </div>
    );
}

export default ProductsPage;