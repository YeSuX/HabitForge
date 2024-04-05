import Footer from "./footer"
import Header from "./header"

type Props = {
  children:React.ReactNode
}

function MarketingLayout({ children }:Props) {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header/>
      <main className="mx-auto flex-1 flex flex-col item-center justify-center">
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default MarketingLayout
