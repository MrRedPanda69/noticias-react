import React from 'react';
import Noticias from './Noticias';
import PropTypes from 'prop-types';

const ListadoNoticias = ({news}) => {
    return (
        <div className="row">
            {news.map(noticia => (
                <Noticias 
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
    );
}

ListadoNoticias.propTypes = {
    news: PropTypes.array.isRequired
}

export default ListadoNoticias;