import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../product/product';

export default function AllProducts() {
  const [allProduct, setAllProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getAllProducts() {
    setIsLoading(true);
    try {
      let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
      setAllProduct(data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <section className="top-background">
        <div className="container">
          <div className="back-color pt-5 text-center">
            <h3>Shop</h3>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="icon">
                <i className="fa fa-chevron-right"></i>
              </li>
              <li>
                <a href="shop.html">Shop</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="shoping p-0 col-12">
        <div className="container p-0">
          <div className="row m-0">
            <div className="col-lg-3 col-md-4 mt-30 filter-side">
              <div className="col-12">
                <h3>All Department</h3>
                <ul>
                  <li><a href="">Furniture</a></li>
                  <li><a href="">Decoration</a></li>
                  <li><a href="">Lighting</a></li>
                  <li><a href="">Kitchen</a></li>
                  <li><a href="">Office</a></li>
                  <li><a href="">Accessories</a></li>
                  <li><a href="">Relax Chairs</a></li>
                  <li><a href="">For Bedroom</a></li>
                  <li><a href="">Coffee Furniture</a></li>
                </ul>
              </div>
              <div className="col-12 mt-40">
                <h3>Price</h3>
                <form>
                  <div className="radiobtn">
                    <input type="radio" id="price1" name="price" defaultChecked />
                    <label htmlFor="price1">$134.00 - $136.00 <span>(10)</span></label>
                  </div>
                  <div className="radiobtn">
                    <input type="radio" id="price2" name="price" />
                    <label htmlFor="price2">$134.00 - $136.00 <span>(5)</span></label>
                  </div>
                  <div className="radiobtn">
                    <input type="radio" id="price3" name="price" />
                    <label htmlFor="price3">$134.00 - $136.00 <span>(7)</span></label>
                  </div>
                  <div className="radiobtn">
                    <input type="radio" id="price4" name="price" />
                    <label htmlFor="price4">$134.00 - $136.00 <span>(7)</span></label>
                  </div>
                </form>
              </div>
              <div className="col-12 mt-40">
                <h3>Color</h3>
                <form>
                  <div className="palette">
                    <input type="radio" id="color1" name="color" defaultChecked />
                    <label className="pallet-color1" htmlFor="color1">Grey <span>(10)</span></label>
                  </div>
                  <div className="palette">
                    <input type="radio" id="color2" name="color" />
                    <label className="pallet-color2" htmlFor="color2">Red <span>(5)</span></label>
                  </div>
                  <div className="palette">
                    <input type="radio" id="color3" name="color" />
                    <label className="pallet-color3" htmlFor="color3">Blue <span>(7)</span></label>
                  </div>
                  <div className="palette">
                    <input type="radio" id="color4" name="color" />
                    <label className="pallet-color4" htmlFor="color4">Orange <span>(7)</span></label>
                  </div>
                  <div className="palette">
                    <input type="radio" id="color5" name="color" />
                    <label className="pallet-color5" htmlFor="color5">Green <span>(7)</span></label>
                  </div>
                </form>
              </div>
              <div className="col-12 mt-40">
                <h3>Size</h3>
                <form>
                  <div className="radiobtn">
                    <input type="radio" id="size1" name="size" defaultChecked />
                    <label htmlFor="size1">S <span>(10)</span></label>
                  </div>
                  <div className="radiobtn">
                    <input type="radio" id="size2" name="size" />
                    <label htmlFor="size2">M <span>(5)</span></label>
                  </div>
                  <div className="radiobtn">
                    <input type="radio" id="size3" name="size" />
                    <label htmlFor="size3">L <span>(7)</span></label>
                  </div>
                  <div className="radiobtn">
                    <input type="radio" id="size4" name="size" />
                    <label htmlFor="size4">XL <span>(7)</span></label>
                  </div>
                </form>
              </div>
              <div className="col-12 mt-4">
                <h3>Brand</h3>
                <form>
                  <div className="radiobtn">
                    <input type="radio" id="Brand1" name="Brand" defaultChecked />
                    <label htmlFor="Brand1">Ashley <span>(10)</span></label>
                  </div>
                  <div className="radiobtn">
                    <input type="radio" id="Brand2" name="Brand" />
                    <label htmlFor="Brand2">Decor Furniture <span>(5)</span></label>
                  </div>
                  <div className="radiobtn">
                    <input type="radio" id="Brand3" name="Brand" />
                    <label htmlFor="Brand3">Focuson <span>(7)</span></label>
                  </div>
                  <div className="radiobtn">
                    <input type="radio" id="Brand4" name="Brand" />
                    <label htmlFor="Brand4">Hound Design <span>(7)</span></label>
                  </div>
                  <div className="radiobtn">
                    <input type="radio" id="Brand5" name="Brand" />
                    <label htmlFor="Brand5">Montgomerys <span>(7)</span></label>
                  </div>
                  <div className="radiobtn">
                    <input type="radio" id="Brand6" name="Brand" />
                    <label htmlFor="Brand6">Other <span>(7)</span></label>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 mt-20">
              <div className="shoping-cards">
                <div className="option-grid-list">
                  <div className="title-grid-list d-flex align-items-center">
                    <select>
                      <option>Popularity</option>
                      <option>Last view</option>
                    </select>
                  </div>
                  <div className="box-grid-list">
                    <span>View</span>
                    <i className="fa fa-th-large list-grid-icon active" id="grid"></i>
                    <i className="fa fa-list-ul list-grid-icon" id="list"></i>
                  </div>
                </div>
                <div className="grid-and-list">
                  {isLoading ? (
                    <div className="d-flex justify-content-center align-items-center my-5 py-5">
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <div className="row">
                      {allProduct.map((product, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-6 item-col" key={index}>
                          <Product product={product} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
