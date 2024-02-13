import { useState } from "react";

const Accordion = ({ data }) => {
  const { title, likes } = data;
  const [show, setShow] = useState(true);
  return (
    <div className="accordion">
      <p
        onClick={() => setShow(!show)}
        className="fs-4 d-flex align-items-center justify-content-between"
      >
        <span>{title}</span>

        <div
          style={{
            transform: show ? "rotate(180deg)" : "rotate(0deg)",
            transition: "all 0.3s ease",
          }}
          className="accordion_icon"
        >
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_1506)">
              <path
                d="M5.41335 9.80646L8.00001 7.2198L10.5867 9.80646C10.8467 10.0665 11.2667 10.0665 11.5267 9.80646C11.7867 9.54646 11.7867 9.12647 11.5267 8.86647L8.46668 5.80647C8.20668 5.54647 7.78668 5.54647 7.52668 5.80647L4.46668 8.86647C4.20668 9.12647 4.20668 9.54646 4.46668 9.80646C4.72668 10.0598 5.15335 10.0665 5.41335 9.80646Z"
                fill="#08090A"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1506">
                <rect
                  width={16}
                  height={16}
                  fill="white"
                  transform="matrix(-1 0 0 -1 16 16)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </p>

      <ul
        className="nav flex-column"
        style={{
          height: show ? "fit-content" : "0px",
          overflow: "hidden",
          transition: ".3s ease",
        }}
      >
        {likes.map((like) => (
          <li key={like} className="nav-item">
            <a href="#" className="nav-link text-muted px-0">
              {like}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
