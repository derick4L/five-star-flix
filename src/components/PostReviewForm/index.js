import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const PostReviewForm = (props) => {
  const [successBanner, setSuccessBanner] = useState(null);

  const initialValues = {
    movie_title: props.movie_title,
    user_rating: "",
    user_comment: "",
    created_by: props.created_by,
  };

  const onSubmit = (values) => {
    axios
      .post("http://localhost:3001/ratedmovies", values)
      .then((res) => {
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
    user_rating: Yup.number().max(5).required("Can't send an empty rating"),
    user_comment: Yup.string()
      .max(250)
      .required("Must give a comment to support your rating!"),
  });

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
        </>
      ) : (
        <p>{successBanner}</p>
      )}
    </>
  );
};
export default PostReviewForm;
