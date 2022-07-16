// import { Form } from "rsuite";
import { Formik, Form, Field, ErrorMessage } from "formik";

const PostReviewForm = () => {
  return (
    <>
      {/* Rating and Comment Feature */}
      <Formik
      //   initialValues={ }
      //   onSubmit={ }
      //   validationSchema={ }
      >
        <Form>
          <Field name="movieTitle" hidden />
          <label>Your rating:</label>
          <Field name="userRating" />
          <label>Your thoughts on this film?:</label>
          <Field name="userComment" />
        </Form>
      </Formik>
    </>
  );
};
export default PostReviewForm;
