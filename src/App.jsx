import Section from './components/Section.jsx'
import PlanesList from './components/PlanesList.jsx'

import planes from './json/planes.json'


console.log("planes:", planes)

export default function App() {

  return (
    // <>
    //   <p>Привіт світ</p>
    // </>

    <Section title="Колекція літаків">
      <PlanesList items={planes} />
      {/* <p>Тут буде PlanesList</p> */}
    </Section>
  )
}