import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const PostReviewForm = (props) => {
  const initialValues = {
    movieTitle: props.movieTitle,
    userRating: "",
    userComment: "",
    createdBy: props.createdBy,
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object().shape({
    userRating: Yup.number().max(5),
    userComment: Yup.string().max(250),
  });

  return (
    <>
      {/* Rating and Comment Feature */}

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Field name="movieTitle" hidden autoComplete="off" />
          <label>Your rating:</label>
          <ErrorMessage name="userRating" component="span" />
          <Field name="userRating" autoComplete="off" />
          <label>Your thoughts on this film?:</label>
          <ErrorMessage name="userComment" component="span" />
          <Field name="userComment" autoComplete="off" />
          <button type="reset">Clear Fields</button>
          <button type="submit">Submit Review</button>
        </Form>
      </Formik>
    </>
  );
};
export default PostReviewForm;
