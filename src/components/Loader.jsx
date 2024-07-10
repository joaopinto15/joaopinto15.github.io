import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600 dark:border-blue-400 border-t-blue-950 dark:border-t-blue-600"></div>
      </div>
    </Html>
  );
};

export default Loader;
