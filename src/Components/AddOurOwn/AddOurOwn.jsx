import Feature from "../Feature/Feature";

const AddOurOwn = () => {
  const AddConfig = {
    icon: (
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_1044)">
          <path
            d="M16 2.66663C8.64002 2.66663 2.66669 8.63996 2.66669 16C2.66669 23.36 8.64002 29.3333 16 29.3333C23.36 29.3333 29.3334 23.36 29.3334 16C29.3334 8.63996 23.36 2.66663 16 2.66663ZM21.3334 17.3333H17.3334V21.3333C17.3334 22.0666 16.7334 22.6666 16 22.6666C15.2667 22.6666 14.6667 22.0666 14.6667 21.3333V17.3333H10.6667C9.93335 17.3333 9.33335 16.7333 9.33335 16C9.33335 15.2666 9.93335 14.6666 10.6667 14.6666H14.6667V10.6666C14.6667 9.93329 15.2667 9.33329 16 9.33329C16.7334 9.33329 17.3334 9.93329 17.3334 10.6666V14.6666H21.3334C22.0667 14.6666 22.6667 15.2666 22.6667 16C22.6667 16.7333 22.0667 17.3333 21.3334 17.3333Z"
            fill="#0096C8"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1044">
            <rect width={32} height={32} fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Add your own",
    description:
      "Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page",
    btnText: "Add new",
    color: "#0096C8",
  };
  return (
    <div className="add_our_own py-5">
      <Feature fet={AddConfig} />
    </div>
  );
};

export default AddOurOwn;
