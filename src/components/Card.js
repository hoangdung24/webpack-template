import React from 'react';
import HtmlRender from './HtmlRender';

const Card = (props) => {

    // useEffect(() => {
    //     console.log(props.location.pathname);

    //     if (props.location.pathname.includes(props.post.slug)) {
    //         setNp('np-in-card');
    //     }
    // })

    const classes = ['card'];
    classes.push(props.np);

    // console.log("Card", useParams());
    // console.log("Card", props);
    return (
        <div className={classes.join(' ')}>
            <div className="rounded">
                <img className="card-img-top" src={props.post.post_image.meta.download_url} />
            </div>
            <div className="card-body">
                <h4 className="card-title">{props.post.title}</h4>
                <p className="card-text">
                    <HtmlRender content={props.post.post_excerpt} />
                </p>
            </div>
        </div>
    )
}

export default Card
