// import React from "react";

// function Card({ gifs }) {
//   return (
//     <div className="card-grid">
//       {gifs.map((gif, index) => (
//         <img key={index} src={gif} alt={`GIF ${index + 1}`} className="gif" />
//       ))}
//     </div>
//   );
// }

// export default Card;
import React from "react";

function Card({ gifs, handleClick }) {
  return (
    <div className="card-grid">
      {gifs.map((gif, index) => (
        <img
          key={index}
          src={gif}
          alt={`GIF ${index + 1}`}
          className="gif"
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

export default Card;
