import React from 'react'
import HealthcareServices from './secondpage.jsx'
import WhyChooseUs from './thirdpage.jsx'
import HealthcareReviews from'./forthpage.jsx'
import HealthcareChat from './fifthpage.jsx'
import LoginAsPatient from './loginaspatient.jsx'
import LoginAsLaboratory from './LoginAsLaboratory.jsx'
import LoginAsNurse from './LoginAsNurse.jsx'
import LoginAsDoctor from './LoginAsDoctor.jsx'
import HomePage from './HomePage.jsx'
import Choose from './Choose.jsx'
import LoginAsPharmacy from './LoginAsPharmacy.jsx'






const App = () => {
  return (
    <div>
      <Choose> </Choose>

      <HomePage> </HomePage>

      <HealthcareServices></HealthcareServices>
       <WhyChooseUs></WhyChooseUs>
       <HealthcareReviews></HealthcareReviews>
       <HealthcareChat></HealthcareChat> 
       <LoginAsPatient></LoginAsPatient>
       <LoginAsDoctor></LoginAsDoctor>
       <LoginAsLaboratory></LoginAsLaboratory>
       <LoginAsNurse></LoginAsNurse>
       <LoginAsPharmacy> </LoginAsPharmacy>




 

    </div>
  )
}

export default App