import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import ArticleList from './components/Artilce/ArticleList'
import ArticleListUsingArray from './components/ArtilceUsingArray/ArticleListUsingArray'

function App() {

  return (
  <>
    <Header />
    <ArticleList />
    -------------------------------------------------------------------------------------------------------
    <ArticleListUsingArray />
    <Footer />
  </>
    )
}

export default App
