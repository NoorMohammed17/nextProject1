import MeetupList from "../components/meetups/MeetupList";

function HomePage() {
    const DUMMY_MEETUPS = [
        {
            id : 1,
            title : 'first one',
            image : 'https://images.pexels.com/photos/2598630/pexels-photo-2598630.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=700&w=1200',
            address : 'fiest oine meetup',
            description : 'first'
        },
        {
            id : 1,
            title : 'second one',
            image : 'https://images.pexels.com/photos/2598630/pexels-photo-2598630.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=700&w=1200',
            address : 'second oine meetup',
            description : 'second'
        }
    ]
    return(
       
            <MeetupList meetups={DUMMY_MEETUPS}/>

       
    )
}
export default HomePage;