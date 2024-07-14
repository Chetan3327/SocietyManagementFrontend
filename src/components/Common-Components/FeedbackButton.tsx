import { Link } from "react-router-dom";

const FeedbackButton = () => {
    return (
      <Link
        to='/feedbackform' className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-2 rounded-full ">
        Feedback
      </Link>
    );
}

export default FeedbackButton;