import { testimonials_img } from "../../../assets";
import VoiceNote from "../VoiceNote/VoiceNote";

const Testimonials = () => {
  return (
    <div className="testimonials py-5 px-3 px-md-5">
      <h1>
        <span className="icon">
          <svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.468 28.8C22.8191 28.8 28.8 22.8191 28.8 15.468C28.8 13.2847 28.2249 11.2439 27.2923 9.42438L26.1336 7.46755L24.1338 5.46775L21.5051 3.64111C19.6871 2.71048 17.6493 2.13605 15.468 2.13605C8.11692 2.13605 2.13599 8.11698 2.13599 15.468C2.13599 22.8191 8.11692 28.8 15.468 28.8ZM19.4676 20.1329C17.9951 20.1329 16.8012 18.9391 16.8012 17.4665C16.8012 17.4092 16.8148 17.3553 16.8181 17.2986C16.8088 17.2446 16.8012 17.1893 16.8012 17.1319C16.8012 16.9486 16.8363 12.6069 19.8673 10.3331C20.0473 10.1985 20.2575 10.1326 20.4662 10.1326C20.7702 10.1326 21.0702 10.2717 21.2669 10.5336C21.5982 10.9756 21.509 11.6019 21.0677 11.9332C20.0625 12.6872 19.5055 13.8143 19.1942 14.8275C19.2855 14.8182 19.3736 14.8001 19.4676 14.8001C20.9401 14.8001 22.134 15.994 22.134 17.4665C22.134 18.9391 20.9401 20.1329 19.4676 20.1329ZM11.4684 20.1329C9.99587 20.1329 8.80199 18.9391 8.80199 17.4665C8.80199 17.4092 8.81558 17.3553 8.81891 17.2986C8.80958 17.2446 8.80199 17.1893 8.80199 17.1319C8.80199 16.9486 8.83706 12.6069 11.8681 10.3331C12.0481 10.1985 12.2583 10.1326 12.467 10.1326C12.771 10.1326 13.071 10.2717 13.2677 10.5336C13.599 10.9756 13.5098 11.6019 13.0685 11.9332C12.0633 12.6872 11.5063 13.8143 11.195 14.8275C11.2863 14.8182 11.3744 14.8001 11.4684 14.8001C12.9409 14.8001 14.1348 15.994 14.1348 17.4665C14.1348 18.9391 12.9409 20.1329 11.4684 20.1329Z"
              fill="#8064A2"
            />
          </svg>
        </span>{" "}
        Testimonials
      </h1>
      <p className="mb-5">
        In a fast growing and ever changing city like Bangalore, it sometimes
        becomes very difficult to find or connect with like minded people.
        Websites like hobbycue.com is a great service which helps me get in
        touch with, communicate, connect, and exchange ideas with other dancers.
        It also provides the extra benefit of finding products and services that
        I can avail, which I can be assured is going to be of great quality as
        it comes recommended by people of the hobbycue community. To have
        discussions, to get visibility, and to be able to safely explore various
        hobbies and activities in my city, all under one roof, is an excellent
        idea and I highly recommend it.
      </p>
      <div className="d-flex flex-column flex-md-row justify-content-between">
        <VoiceNote
          className="img-container w-100 text-danger order-2 order-md-1 me-0 me-md-3"
          style={{ width: "40%" }}
        />
        <div
          className="testimonials_card d-flex align-items-center gap-3 mb-3 order-1"
          // style={{ width: "50%" }}
        >
          <div className="img-container" style={{ minWidth: "75px" }}>
            <img src={testimonials_img} className="w-100" alt="" />
          </div>
          <div className="text " style={{ minWidth: "200px" }}>
            <div className="purple fs-5">Shubha Nagarajan </div>
            <div className="blue fs-6">Classical Dancer </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
