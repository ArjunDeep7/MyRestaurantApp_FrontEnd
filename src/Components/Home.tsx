import React from 'react';
import './Cstyle.css'

//export const ContactUs: React.FC = () => 
function Home()
{
  return (
    <><div style={{gap:"20px"}}>
          <h1>Welcome to Arjun's Bistro</h1>
          <img src="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1639565.jpg&fm=jpg" className='rest' alt="Restaurant" />
          <p style={{fontWeight: "bold"}}>At Arjun's Bistro, we pride ourselves on providing our customers with an exceptional dining experience. Our menu is crafted with care, using only the freshest and highest-quality ingredients to create dishes that are both delicious and beautiful.

Our passion for food extends beyond the kitchen. We believe in sustainability and ethical sourcing, and work with local farmers and producers to ensure that our ingredients are not only of the highest quality, but also responsibly sourced. We believe that great food can also be good for the planet.

Our commitment to excellence extends to our service as well. Our friendly and knowledgeable staff are dedicated to ensuring that every guest leaves our restaurant feeling satisfied and happy. Whether you're joining us for a quick lunch or a celebratory dinner, we promise to provide you with an unforgettable dining experience.

Thank you for choosing Arjun's Bistro. We look forward to serving you soon.</p>

      </div><div>
              <footer style={{fontWeight: "bold"}}>
                  <h2>Contact Us</h2>
                  <p>Address: Vatika Business Park
                      Sector-49, Gurugram
                  </p>
                  <p>Phone: (555) 555-5555</p>
                  <p>Email: info@myrestaurant.com</p>
              </footer>

          </div></>
  );
};

export default Home;
