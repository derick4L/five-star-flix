import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const PostReviewForm = (props) => {
  const [successBanner, setSuccessBanner] = useState(null);
  const [previousReviews, setPreviousReviews] = useState([]);

  const initialValues = {
    movieTitle: props.movieTitle,
    userRating: "",
    userComment: "",
    createdBy: props.createdBy,
  };

  const onSubmit = (values) => {
    axios
      .post("http://localhost:3001/ratedmovies", values)
      .then((res) => {
        console.log(res);

        setSuccessBanner("Thanks for your review!");

        setTimeout(() => {
          setSuccessBanner(null);
        }, 10000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const validationSchema = Yup.object().shape({
    userRating: Yup.number().max(5).required("Can't send an empty rating"),
    userComment: Yup.string()
      .max(250)
      .required("Must give a comment to support your rating!"),
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/ratedmovies`)
      .then((res) => {
        setPreviousReviews(
          res.data.filter((review) =>
            console.log(review.movieTitle === props.movieTitle)
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {successBanner === null ? (
        <>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form>
              <Field name="movieTitle" hidden autoComplete="off" />
              <label>Your rating:</label>
              <Field name="userRating" autoComplete="off" />
              <ErrorMessage name="userRating" component="span" />
              <label>Your thoughts on this film?:</label>
              <Field name="userComment" autoComplete="off" />
              <ErrorMessage name="userComment" component="span" />
              <button type="reset">Clear Fields</button>
              <button type="submit">Submit Review</button>
            </Form>
          </Formik>
          <div>
            <p> You gave this film a {previousReviews.userRating}</p>
          </div>
        </>
      ) : (
        <p>{successBanner}</p>
      )}
    </>
  );
};
export default PostReviewForm;
