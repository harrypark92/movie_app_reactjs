import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState('');

    const getDetails = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoading(false);
        setDetail(json.data.movie);
    }

    useEffect(() => getDetails(), []);
    console.log(detail)

    return (
        <div>
            {
                loading ?
                    <h1>now loading...</h1> :
                    <div>
                        <img src={detail.large_cover_image}></img>
                        <h1>{detail.title_long}</h1>
                        <h3>{detail.runtime} min / rate : {detail.rating} / like_count : {detail.like_count}</h3>
                        {detail.genres ? detail.genres.map((x)=> <p>{x}</p>):null}
                        <p>{detail.description_full}</p>
                    </div>
            }
        </div>
    )
}

export default Detail;