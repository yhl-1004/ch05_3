import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppState } from "../store";
import { Button } from "../theme/daisyui";
import * as L from "../store/loading";

export default function LoadingTest() {
  const dispatch = useDispatch();
  const loading = useSelector<AppState, L.State>(({ loading }) => loading);

  const doTimedLoading = useCallback(() => {
    dispatch<any>(L.doTimedLoading(1000));
  }, [dispatch]);

  return (
    <section>
      <div>LoadingTest</div>
      <div className="mt-4">
        <div className="flex justify-center mt-4">
          <Button
            className="btn-sm btn-primary"
            onClick={doTimedLoading}
            disabled={loading}
          >
            do time loading
          </Button>
        </div>
        {loading && (
          <div className="flex items-center justify-center">
            <Button className="btn btn-circle loading" />
          </div>
        )}
      </div>
    </section>
  );
}
