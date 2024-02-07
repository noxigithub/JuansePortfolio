import React, { useContext, useEffect } from 'react';
import '../css/portfolioStyle.css';
import Website from './website';
import wocnexWeb from '../images/wocnexPage.png';
import casaHotel from '../images/casahotel.png';
import love from '../images/2love1.png';
import coffeShop from '../images/coffeShop.png';
import nookstore from '../images/booksStore.png';
import practidocs from '../images/practidocs.png'

import { SkillContext } from '../helpers/context';



function Portfolio() {

    return (
        <div id="section-portfolio" className='portfolioContainer'>

            <h2>Proyectos</h2>

            <Website
                image={wocnexWeb}
                title='Wocnex'
                description='Empresa de publicidad enfocada en multimedia'
                link='https://wocnex.com.co/'
                stats={['HTML', 'JavaScript', 'CSS']}
            />
            <Website
                image={casaHotel}
                title='Casa Hotel el Compadre'
                description='Hotel ubicado en filandia Quindio colombia'
                link='https://www.casahotelelcompadre.co/'
                stats={['HTML', 'JavaScript', 'CSS','PHP', 'Bootstrap']}
            />

            <Website
                image={love}
                title='2Love1'
                description='servicios enfocados en al salud mental'
                link='https://2love1.org/'
                stats={['WordPress', 'JavaScript','PHP','CSS']}
            />

            <Website
                image={coffeShop}
                title='A Coffe Shop'
                description='Pagína modelo para pequeña cafetería local'
                link='http://horrible-pocket.surge.sh/'
                stats={['HTML', 'JavaScript', 'CSS']}
            />



            <Website
                image={nookstore}
                title='Nookstore'
                description='Pagina modelo para una tienda de libros'
                link='http://flowery-summer.surge.sh/'
                stats={['HTML', 'JavaScript', 'CSS', 'Bootstrap']}
            />

            <Website
                image={practidocs}
                title='Practidocumentos'
                description='Pagina de servicios y venta de documentos legales'
                link='https://practidocumentos.com'
                stats={['HTML','REACT','PHP','CSS','Bootstrap']}
            />



        </div>
    )


}

export default Portfolio;