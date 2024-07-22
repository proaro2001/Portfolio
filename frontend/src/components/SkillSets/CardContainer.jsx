/*
Container and different cards
*/

import Card from "./Card";
import PropTypes from "prop-types";

const CardContainer = (props) => {
  const { card_list } = props;
  return (
    <div className="h-auto">
      <ul className="flex flex-row flex-wrap justify-center">
        {card_list.map((card, index) => (
          <li key={index}>
            <Card
              card_icon={card.icon}
              card_name={card.name}
              card_description={card.description}
              card_bg_color={card.bg_color}
              card_border_color={card.border_color}
              card_link={card.link}
              card_icon_color={card.icon_color}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

CardContainer.propTypes = {
  card_list: PropTypes.array.isRequired,
};

export default CardContainer;
