import Layout from "../components/Layout";
import Header from "../components/Header";
import Features from "../components/Features";
import AboutMe from "../components/AboutMe";
import Calendar from "../components/Calendar";
import Link from "next/link";

const Profile = () => {
  return (
    <Layout>
      <div>
        <Header></Header>
        <div class="row mx-auto mt-5" style={{ maxWidth: 1000 }}>
          <Features></Features>
          <AboutMe></AboutMe>
        </div>
        <div class="row mx-auto mt-5" style={{ maxWidth: 1000 }}>
          <div class="col-sm-8">
            <Calendar></Calendar>
          </div>
          <div class="col-sm-4">
            <Link href="/results">
              <button type="button" class="btn btn-primary float-right ">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
