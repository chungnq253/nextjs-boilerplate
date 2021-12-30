import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {

  return (
    <div id="layout">
      <Meta />

      <Header />

      <main>
        {props.children}
      </main>

      <Footer />
    </div>
  )
}