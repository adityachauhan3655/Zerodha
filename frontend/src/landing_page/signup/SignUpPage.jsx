import Hero from "./Hero"
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import SignUpForm from "./SignUpForm"
import InvestOptions from "./InvestOption"
import TutorialAccount from "./TutorialAccount"
import Benefit from "./Benefit"
import AccountType from "./AccountType"
import Faqs from "./Faqs"

function SignUp() {
    return ( 
        <>
            <Hero/>
            <SignUpForm/>
            <InvestOptions/>
            <TutorialAccount/>
            <Benefit/>
            <AccountType/>
            <Faqs />
        </>
     );
}

export default SignUp;