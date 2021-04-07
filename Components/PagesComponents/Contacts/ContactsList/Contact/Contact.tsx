import Link from "next/link";

/*====================*/

type PropsType = {
  href: string;
  image: string;
};

/*====================*/

const Contact: React.FC<PropsType> = function ({ href, image }) {
  return (
    <Link href={href}>
      <a target="_blank" className="flex-container animated-icon contacts__contact">
        <img className="" src={image} alt="" />
      </a>
    </Link>
  );
};

/*====================*/

export default Contact;
