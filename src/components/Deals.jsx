import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Deals = () => {
  return (
    <div id="deals" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center pb-2">Deals & Promos</h2>
      <p className="text-center pb-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        mollitia aperiam magni nihil minus quaerat consectetur! Cum ipsum fugiat
        ipsam.
      </p>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="w-100 h-80 object-cover"
              src="https://images.unsplash.com/photo-1590987337605-84f3ed4dc29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHN1c2hpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3> Lorem, ipsum dolor.</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                tempora?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="w-100 h-80 object-cover"
              src="https://images.unsplash.com/photo-1617196034564-65baf56380ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHN1c2hpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3> Lorem, ipsum dolor.</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                tempora?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="w-100 h-80 object-cover"
              src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3> Lorem, ipsum dolor.</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                tempora?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="w-100 h-80 object-cover"
              src="https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3> Lorem, ipsum dolor.</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                tempora?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="w-100 h-80 object-cover"
              src="https://images.unsplash.com/photo-1607301406259-dfb186e15de8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHN1c2hpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3> Lorem, ipsum dolor.</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                tempora?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Deals;
