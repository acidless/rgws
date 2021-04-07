import { Form, Formik } from "formik";
import NameField from "./Fields/NameField/NameField";
import EmailField from "./Fields/EmailField/EmailField";
import MessageField from "./Fields/MessageField/MessageField";
import { useDispatch } from "react-redux";
import { SendMessageThunk } from "../../../../redux/reducers/Messages/MessagesReducer";
import SendMessageStatus from "./SendMessageStatus/SendMessageStatus";

/*====================*/

function SendMessage() {
  const dispatch = useDispatch();

  /*====================*/

  return (
    <section className="light-block">
      <div className="container">
        <h2 className="custom-heading">Оставить сообщение</h2>
        <SendMessageStatus />
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={(values) => {
            dispatch(SendMessageThunk(values));
          }}
        >
          {({ handleSubmit, errors, touched }) => {
            return (
              <Form className="send-message-form" onSubmit={handleSubmit}>
                <div className="line flex-container content-center">
                  <NameField error={errors.name} touched={touched.name} />
                </div>
                <div className="line flex-container content-center">
                  <EmailField error={errors.email} touched={touched.email} />
                </div>
                <div className="line flex-container content-center">
                  <MessageField error={errors.message} touched={touched.message} />
                </div>
                <div className="flex-container content-center">
                  <button type="submit">Отправить</button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
}

/*====================*/

export default SendMessage;
