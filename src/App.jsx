import { Footer } from './components/Footer/Footer'
import { Gallery } from './components/Gallery/Gallery'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Services } from './components/Services/Services'
import { TestimonialContainer } from './components/TestimonialContainer/TestimonialContainer'

function App() {

  return (
    <>
      <main className='max-w-[1440px] mx-auto relative'>
        <Header />
        <Main />
        <Services />
        <TestimonialContainer />
        <Gallery />
        <Footer />
      </main>
    </>
  )
}

export default App
