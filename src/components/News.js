import React from 'react';
import PropTypes from 'prop-types';
import '../components/News.module.css';


const News = ( {news} ) => {
    // extract data from api
    const { urlToImage, url, title, description, source } = news;

    // if image not exist do not show anything
    const image = (urlToImage) ?
                <div className="card-image">
                    <img src={urlToImage} alt={title} />
                    <span className="card-title"> {source.name} </span>
                </div>
    : null;

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                {image}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="waves-effect waves-light btn"
                    > Read More</a>
                </div>
            </div>
        </div>
    )
}
News.propTypes = {
    news: PropTypes.object.isRequired
}
export default News;

