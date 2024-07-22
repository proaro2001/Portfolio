import PropTypes from "prop-types";

const Card = (props) => {
  // extract from props
  const {
    card_icon,
    card_name,
    card_description,
    card_bg_color,
    card_border_color, // cyan-300 or uw-gold or uw-purple, etc
    card_link,
  } = props;

  return (
    <div className="justify-center m-5 sm:w-72 w-36">
      <a href={card_link} target="_blank" rel="noopener noreferrer">
        <div
          className={`card transform transition-transform  hover:scale-105 h-40 bg-base-100 shadow-xl bg-opacity-1 image-full duration-300 cursor-pointer hover:h-auto hover:border-4 `}
          style={{
            borderColor: card_border_color,
            minHeight: "10rem",
          }}
        >
          <figure
            className={`h-full w-full justify-center text-7xl`}
            style={{
              backgroundColor: card_bg_color,
            }}
          >
            {card_icon}
          </figure>
          <div className="card-body opacity-0 hover:opacity-100 duration-300">
            <h2 className="card-title justify-start w-1/2">
              {card_name || ""}
            </h2>
            <p>{card_description}</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </a>
    </div>
  );
};

Card.propTypes = {
  card_icon: PropTypes.node.isRequired,
  card_name: PropTypes.string.isRequired,
  card_description: PropTypes.string.isRequired,
  card_bg_color: PropTypes.string,
  card_border_color: PropTypes.string,
  card_link: PropTypes.string,
};

export default Card;
