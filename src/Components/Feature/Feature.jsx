const Feature = ({ fet }) => {
  const { icon, title, description, color, btnText } = fet;
  return (
    <div className="feature text-center p-4" style={{ "--color": color }}>
      <h3>
        <span className="icon">{icon}</span> {title}
      </h3>
      <p>{description}</p>
      <button className="btn outline_btn" color={color}>
        {btnText}
      </button>
    </div>
  );
};

export default Feature;
