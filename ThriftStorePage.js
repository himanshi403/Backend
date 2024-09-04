
import React, { useState } from 'react';
import './ThriftStorePage.css'; 
import Brands from './Brands';

const ThriftStorePage = () => {
    const [currentPage, setCurrentPage] = useState('thriftStore'); 
  
    // Function to switch pages
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    return (
      <div className="thrift-store">
        

        

      <main>
        <section className="welcome-section">
            
        <img class="img" src="https://img.freepik.com/premium-photo/bustling-thrift-store-interior-with-vintage-clothes-accessories_1235831-53216.jpg?size=626&ext=jpg&ga=GA1.1.808235247.1725279949&semt=ais_hybrid" alt="Welcome" className="welcome-image" />
        <div className="blue">
          <h2><b>Welcome to Our</b></h2> 
          <h2>Thrift Store: </h2>
          <h2> Discover Unique</h2>
          <p>Discover unique items at affordable prices.</p>
          <button className="shop-now-button">Shop Now</button>
          </div>
        </section>

        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJ4jGbCbAXbnPJuLKSnsIg_hRO9ZB5tw1VQ&s" alt="Product 1" />
              
              <p>$9.99</p>
              <button className="cart-button">Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSCZKu0SJx47zRmqNiXrr6zuxu2IwJuziH5xJ-jhxnVLoMSFNdJfmLiUkg7B_shAU2wlbZkpiyFjN214ZKOco1dYuy9qdoA39ajY32ye4J2WL4wWdnz3zMKz6nwLV2MgEVEkLObpCaNZ9o&usqp=CAc" alt="Product 2" />
              
              <p>$14.99</p>
              <button className="cart-button">Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="https://images-na.ssl-images-amazon.com/images/I/41rJ-cXXsnL._SX240_QL100_AC_SCLZZZZZZZ_.jpg" alt="Product 3" />
              
              <p>$7.99</p>
              <button className="cart-button">Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="https://m.media-amazon.com/images/I/71O-AV89z5L._AC_SY200_.jpg" alt="Product 2" />
              
              <p>$14.99</p>
              <button className="cart-button">Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="https://m.media-amazon.com/images/I/91hkVz3NnAL._SX425_.jpg" alt="Product 5" />
              
              <p>$14.99</p>
              <button className="cart-button">Add to Cart</button>
            </div>
           
          </div>
        </section>


        <section className="featured-products">
          
          <div className="product-grid">
            <div className="product-card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJb-UXCR6Jx-B6Ldo7WO_U4YbztduoIUYpQ&s" alt="Product 1" />
              
              <p>$9.99</p>
              <button className="cart-button">Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VfYuIbfj7NEG5kEfm6jdbXd4w64I9JhyBg&s" alt="Product 2" />
            
              <p>$14.99</p>
              <button className="cart-button">Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVpaXoGSTVzfUl88to9CDFgRSsVEVzndl_JA&s" alt="Product 3" />
              
              <p>$7.99</p>
              <button className="cart-button">Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAZMbgpviJqI2wOm7Cz5RtqUu5olm5QfJ9zQ&s" alt="Product 2" />
              
              <p>$14.99</p>
              <button className="cart-button">Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-fif2vNgfeBNbSWByHNhftdnTpeMsKlXwug&s" alt="Product 5" />
              
              <p>$14.99</p>
              <button className="cart-button">Add to Cart</button>
            </div>
           
          </div>
        </section>

        <section className="featured-products">
          
          <div className="product-grid">
            <div className="product-card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-B5ux16WOhKk6n427a1ZZoiSAOKoslL182Q&s" alt="Product 1" />
              
              <p>$9.99</p>
              <button className="cart-button">Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRslXO-k02ofwSefM8wN3_CtykhvPO3Yl2O4w&s" alt="Product 2" />
              
              <p>$14.99</p>
              <button className="cart-button">Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHwkFMmSstr84YrQNpcijAfiS6zRh_RYT3_w&s" alt="Product 3" />
              
              <p>$7.99</p>
              <button className="cart-button">Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK4xWab3Ln_gkUSQP4jO8AoQTSh79Q_0--iQ&s" alt="Product 2" />
              
              <p>$14.99</p>
              <button className="cart-button">Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQzQDdbz2yhW1K9ZDrh5mCIVatFwhMbYED-Z1eBxnkOFWaTwKLTysHZpc5irQBn-GlIuN_rje5ufb7Qs0Q1p_o6uZUfLhOYu58U6roP1HyJ58WCv_6hias2hqs8ZVPw72s3HwscHQ&usqp=CAc" alt="Product 5" />
              
              <p>$14.99</p>
              <button className="cart-button">Add to Cart</button>
            </div>
           
          </div>
        </section>
        
        <section className="image-text-section">
    
          <div className="image-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qDahsO8RmkK6dSiI0AD1LpFy2uQpxrgJ7A&s" alt="Image 1" className="image1" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBTaR8B2VnV2g7GZc5Pk60zzJ1qYaXzh4hg&s" alt="Image 2" className="image2" />
          </div>
          <div className="text-container">
            <h2 className="main-heading">Thrifting: A Sustainable Choice</h2>
            <p className="sub-text">Thrifting not only helps you find unique items but also contributes to a more sustainable future by reducing waste.</p>
          </div>
          
        </section>
        <div className="grey">
        <Brands/>
        </div>

        <section className="additional-info">
          <h2>Discover the Thrift Store Difference</h2>
         
        </section>

        <div className="flex">
  <div className="image-text-pair">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2VZxU3ulA7LI_t_NqJqomMdao7hLMuPKEw&s" alt="Image 1" className="pair-image" />
    <div className="pair-text">
      <p><b>Vintage Vibes</b></p>
      <p>Timeless Classics,Reborn</p>
    </div>
  </div>

  <div className="image-text-pair">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi1gjxS7gh6pmY_lHKdcYzn4R4iYlmZoYPTg&s" alt="Image 2" className="pair-image" />
    <div className="pair-text">
      <p><b>Thrifting Made Easy</b></p>
      <p>Sustanaible Style,Rediscovered</p>
    </div>
  </div>
</div>



<div className="pink">
<div className="flex">
  <div className="image-text-pair">
  <img width="100" height="100" src="https://img.icons8.com/ios-filled/50/F25081/shopping-cart.png" alt="shopping-cart"/>
    <div className="pair-text">
      <p>Shop Smarter,Save More</p>
      
    </div>
  </div>

  <div className="image-text-pair">
  <img width="100" height="100" src="https://img.icons8.com/plasticine/100/jacket.png" alt="jacket"/>
    <div className="pair-text">
      <p>Thrifting:A circular fashion</p>
      <p>Movement</p>
    </div>
  </div>

  <div className="image-text-pair">
  <img width="100" height="100" src="https://img.icons8.com/dotty/80/shopping-cart.png" alt="shopping-cart"/>
    <div className="pair-text">
      <p>Thrift With a Purpose</p>
      
    </div>
  </div>
</div>
</div>

<section className="image-text-section">
<div className="text-container">
            <h >Sustainable shopping</h>
            <p className="sub-text">find unique treasures reduce waste </p>
            <p className="sub-text2">Embrace the thrift lifestyle</p>

            <p className="sub-text2">Thrifting is more than just shopping-it's a way to create a personalised wardrobe that reflects your style and values.</p>

            <p className="sub-text">At our Thrift store, we believe that every item has the potential to be someone's new favaourite</p>

            <p className="sub-text2">Shop Sustainably</p>
            
          </div>
          <div className="image-contain">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBECxilHgOxdLN2KlupioAEXdboHFQaqj5mw&s" alt="Image 1" className="image1" />
           
          </div>
         
        </section>


      </main>

      <footer className="footer">
        <p>&copy; 2023 Thrift Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ThriftStorePage;