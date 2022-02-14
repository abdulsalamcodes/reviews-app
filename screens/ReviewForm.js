import { Formik } from "formik";
import React from "react";
import {
  Button,
  TextInput,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import * as yup from "yup";

const reviewSchema = yup.object().shape({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("isNum1-5", "Rating must be a number between 1 and 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

const ReviewForm = ({ addReview }) => {
  return (
    <Formik
      validationSchema={reviewSchema}
      initialValues={{ title: "", body: "", rating: "" }}
      onSubmit={(values) => {
        console.log("users", values);
        addReview(values);
      }}
    >
      {({
        handleChange,
        values,
        handleSubmit,
        errors,
        touched,
        handleBlur,
      }) => {
        return (
          <>
            <Text
              style={{
                ...globalStyles.title,
                textAlign: "center",
                marginTop: 20,
              }}
            >
              Review Form
            </Text>
            <TextInput
              style={globalStyles.input}
              onChangeText={handleChange("title")}
              value={values.title}
              placeholder="Review Title"
              onBlur={handleBlur("title")}
            />
            {touched.title && (
              <Text style={globalStyles.errorText}>
                {touched.title && errors.title}
              </Text>
            )}
            <TextInput
              multiline
              minHeight={100}
              style={globalStyles.input}
              onChangeText={handleChange("body")}
              name="body"
              value={values.body}
              placeholder="Review body"
              onBlur={handleBlur("body")}
            />
            {touched.body && (
              <Text style={globalStyles.errorText}>
                {touched.body && errors.body}
              </Text>
            )}
            <TextInput
              style={globalStyles.input}
              onChangeText={handleChange("rating")}
              value={values.rating}
              placeholder="Rating(1-5)"
              keyboardType="numeric"
              onBlur={handleBlur("rating")}
            />
            {touched.rating && (
              <Text style={globalStyles.errorText}>{errors.rating}</Text>
            )}
            <TouchableHighlight
              style={{
                backgroundColor: "blue",
                borderRadius: 3,
                paddingVertical: 10,
              }}
              onPress={handleSubmit}
            >
              <Button title="Submit" color="white" onPress={handleSubmit} />
            </TouchableHighlight>
          </>
        );
      }}
    </Formik>
  );
};

export default ReviewForm;
