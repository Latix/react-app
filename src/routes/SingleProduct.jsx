import { useParams } from 'react-router-dom';
// import { useEffect } from "react";

const SingleProduct = () => {
    const param = useParams();

    return (
        <div>
            Single Product {param.id}
        </div>
    );
}

export default SingleProduct;