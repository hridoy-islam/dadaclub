import { toast } from 'react-toastify';
const notify = () => {
    toast.success("Congratulations! You have succesfully completed the tasks", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

export default notify;