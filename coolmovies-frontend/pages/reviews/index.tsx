import { useEffect } from "react";
import { TopBar } from "../../common/components";
import { moviesActions, useAppDispatch, useAppSelector } from "../../redux";

const Reviews = () => {
  const dispatch = useAppDispatch();
  const moviesState = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(moviesActions.fetch());
  }, [dispatch]);

  return (
    <div>
      <TopBar title="Reviews" />
      <div>
        {moviesState?.moviesData?.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
