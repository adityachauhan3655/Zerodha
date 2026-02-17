import Hero from "./Hero"
import SignUpForm from "./SignUpForm"
import InvestOptions from "./InvestOption"
import Benefit from "./Benefit"
import OpenAccount from "../../OpenAccount";



function SignUp() {
    return ( 
        <>
            <Hero/>
            <SignUpForm/>
            <InvestOptions />
            <Benefit />
            <OpenAccount/>
        </>
     );
}

export default SignUp;