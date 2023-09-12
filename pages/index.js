import Head from "next/head";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
      id: 1,
      title: "first one",
      image:
        "https://images.pexels.com/photos/2598630/pexels-photo-2598630.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=700&w=1200",
      address: "first one meetup",
      description: "first",
    },
    {
      id: 1,
      title: "second one",
      image:
        "https://images.pexels.com/photos/2598630/pexels-photo-2598630.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=700&w=1200",
      address: "second one meetup",
      description: "second",
    },
  ];
function HomePage(props) {
 
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active react meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;

//     //fetch data from an API

//     return {
//         props:{
//             meetups : DUMMY_MEETUPS
//         }
//     }

// }

export async function getStaticProps() {
  //fetch data from an API

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
