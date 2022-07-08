import React from 'react';
import { useDispatch } from 'react-redux';
import API from '../../axios/API';
import ProductImage from './productdetailComponent/productImage'
import ProductMain from './productdetailComponent/productMain';
const ProductDetail = (props) => {
    const {id} = props
    const [detailProduct, setDetailProduct] = React.useState(null)
    const dispatch = useDispatch()

    React.useEffect(() => {
        const callAPI = async () => {
            const res = await API(`product/${id}`, "GET")
            setDetailProduct(res.data)
        }
        callAPI()
    }, [id])
    const [index, setIndex] = React.useState(0)
    const getIndexImg = (index) => {
        setIndex(index)
    }
    return (
        <div>
            {detailProduct &&
                <React.Fragment>
                    <ProductMain detailProduct={detailProduct} getIndexImg={getIndexImg} indexPress={index} />
                    <ProductImage detailProduct={detailProduct} index={index}/>
                </React.Fragment>
            }
        </div>
    )
}

export default ProductDetail