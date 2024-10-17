import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <>
      <hr className='border-slate-300 dark:border-slate-600 my-8' />

      <section className='cta'>
        <p className='cta-text text-black dark:text-white'>
          Have a project in mind? <br className='sm:block hidden' />
          Let’s build something together!
        </p>
        <Link to='/contact' className='btn'>
          Contact
        </Link>
      </section>
    </>
  );
};

export default CTA;
