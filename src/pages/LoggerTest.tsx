import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function LoggerTest() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "hello", payload: "world" });
  }, []);

  return (
    <section className="mt-4">
      <div>LoggerTest</div>
      <div className="mt-4"></div>
    </section>
  );
}
