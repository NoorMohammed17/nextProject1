import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  function addMeetupHandler(enteredData) {
    console.log(enteredData)
  }
  return (
   
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
 
  );
};

export default NewMeetupPage;
