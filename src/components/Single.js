import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Single = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=17dfb2bb3935f937b92974d037cf4b4f`
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      {data && (
        <div
          className='py-5 single_movie'
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
          }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <img
                  src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                  className='img-fluid rounded'
                  alt=''
                />
              </div>
              <div className='col-md-8 align-self-center'>
                <h2>{data.original_title}</h2>
                {/* <p>ID - {id}</p> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Single;
