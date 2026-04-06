import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Demo from './components/Demo'
import Features from './components/Features'
import Workflow from './components/Workflow'
import UseCases from './components/UseCases'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WaitlistModal from './components/WaitlistModal'

function App() {
  const [showWaitlist, setShowWaitlist] = useState(false)

  const openWaitlist = () => setShowWaitlist(true)
  const closeWaitlist = () => setShowWaitlist(false)

  return (
    <>
      <Navbar />
      <Hero onJoinWaitlist={openWaitlist} />
      <Demo />
      <Features />
      <Workflow />
      <UseCases />
      <FAQ />
      <FinalCTA onJoinWaitlist={openWaitlist} />
      <Footer />
      <WaitlistModal isOpen={showWaitlist} onClose={closeWaitlist} />
    </>
  )
}

export default App
