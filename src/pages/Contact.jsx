import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import { playerAnimations } from "../constants";

import { Player } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [animation, setCurrentAnimation] = useState(playerAnimations.idle);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size and set `isMobile`
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this value based on desired threshold
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    setCurrentAnimation(playerAnimations.pointing);
    setTimeout(() => {
      setCurrentAnimation(playerAnimations.idle);
    }, 4000);

    const interval = setInterval(() => {
      setCurrentAnimation(playerAnimations.idle2);
      setTimeout(() => {
        setCurrentAnimation(playerAnimations.idle);
      }, 4000);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation(playerAnimations.dance);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation(playerAnimations.idle);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation(playerAnimations.idle);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text no-select text-black dark:text-white'>Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14 no-select'
        >
          <label className='text-black-500 dark:text-gray-200 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input dark:bg-slate-800 dark:text-white'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className='text-black-500 dark:text-gray-200 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input no-select dark:bg-slate-800 dark:text-white'
              placeholder='John@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className='text-black-500 dark:text-gray-200 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea dark:bg-slate-800 dark:text-white'
              placeholder='Write your thoughts here...'
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='btn'
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      {!isMobile && (
        <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
          <Canvas
            camera={{
              position: [0, 1, 4],
              fov: 30,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={1} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />

            <Suspense fallback={<Loader />}>
              <Player scale={0.9} rotation={[0, -Math.PI / 3, 0]} position={[0, -1, 0]} animation={animation} />
            </Suspense>

            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>
      )}
    </section>
  );
};

export default Contact;
