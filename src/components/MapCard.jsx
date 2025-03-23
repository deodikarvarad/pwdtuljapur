import React from 'react';

const MapCard = ({ images = [], name = "Unnamed Project", mapSrc }) => {

  return (
    <div className="flex flex-col items-center p-4 rounded-2xl bg-gray-200 hover:bg-gray-300 w-full max-w-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
      
      {/* Google Map Iframe */}
      {mapSrc ? (
        <iframe
          src={mapSrc}
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ) : (
        <div className="w-full h-[350px] bg-gray-400 flex items-center justify-center">
          <span className="text-white">No Map Available</span>
        </div>
      )}

      {/* Project Name */}
      <h2 className="text-xl mt-4 text-center">{name}</h2>
    </div>
  );
};

export default MapCard;
