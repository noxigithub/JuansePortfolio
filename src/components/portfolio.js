import React, { useContext, useEffect } from 'react';
import '../css/portfolioStyle.css';
import Website from './website';
import wocnexWeb from '../images/wocnexPage.png';
import casaHotel from '../images/casahotel.png';
import love from '../images/2love1.png';
import coffeShop from '../images/coffeShop.png';
import nookstore from '../images/booksStore.png';

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
                description='Proband los props 2'
                link='https://www.casahotelelcompadre.co/'
                stats={['HTML', 'JavaScript', 'CSS','PHP']}
            />

            <Website
                image={love}
                title='2Love1'
                description='Proband los props 3'
                link='https://2love1.org/'
                stats={['WordPress', 'JavaScript']}
            />

            <Website
                image={coffeShop}
                title='A Coffe Shop'
                description='Proband los props 3'
                link='http://horrible-pocket.surge.sh/'
                stats={['HTML', 'JavaScript', 'CSS']}
            />



            <Website
                image={nookstore}
                title='Nookstore'
                description='Proband los props 3'
                link='http://flowery-summer.surge.sh/'
                stats={['HTML', 'JavaScript', 'CSS', 'Bootstrap']}
            />



        </div>
    )


}

export default Portfolio;