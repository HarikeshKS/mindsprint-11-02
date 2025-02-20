import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const { id } = useParams(); //it will get the data from URL Parameters
    const [product, setProduct] = useState(null);
    const fetchData = async () => {
        try {
            const resp = await axios.get('https://dummyjson.com/products/' + id);
            // console.log(resp)
            setProduct(resp.data)
        } catch (error) {
            console.log(error)
        }
    }
    //this effect will execute only one when the component load
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            {
                product &&
                <div>
                    <h3>{product.title}</h3>
                    <img src={product.thumbnail} />
                    <p><b>Only at ${product.price}</b></p>
                    <p>{product.description}</p>
                    <p>Category:{product.category}</p>
                    <h5>Reviews</h5>
                    {
                        product.reviews.map(review=>(
                            <>
                                <p>
                                    Rating: {review.rating} <br/>
                                    Commet: {review.comment} <br/>
                                    User Name: {review.reviewerName} <br/>
                                    Date: {review.date}
                                </p>
                                <hr/>
                            </>
                        ))
                    }
                </div>
            }
        </div>
    );
}

export default ProductDetails;