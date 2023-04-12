import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center p-4 ">Gallery</h2>
      <p className="text-center pb-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
        modi aperiam sequi natus alias impedit delectus, nisi minima,
        consequuntur facere praesentium cupiditate, culpa iusto voluptate
        distinctio nihil molestias quasi debitis.
      </p>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHN1c2hpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN1c2hpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1562158074-d49fbeffcc91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHN1c2hpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1617196905100-216ffe128142?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHN1c2hpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
