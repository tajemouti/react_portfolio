import React, { useState } from 'react';
import { AiOutlineProject } from 'react-icons/ai';
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss';
import { filterData, portfolioData } from './utils';
import SocialFooter from '../../components/footer';

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems = filteredValue === 1 ? portfolioData
    : portfolioData.filter((item) => item.id === filteredValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Portfolio"
        icon={<AiOutlineProject size={40} />}
      />

      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? 'active' : ''}
              key={item.filterId}
              onClick={() => handleFilter(item.filterId)}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {
            filteredItems.map((item, index) => (
              <div
                key={item.name.trim()}
                className="portfolio__content__cards__item"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                  <img src={item.image} alt="" />
                </div>
                <div className="overlay">
                  {
                    index === hoveredValue && (
                      <div>
                        <p>{item.name}</p>
                        <a href={item.link} rel="noopener noreferrer" target="_blank">Visit</a>
                        <a href={item.code} rel="noopener noreferrer" target="_blank">Code</a>
                      </div>
                    )
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <SocialFooter />
    </section>
  );
};

export default Portfolio;