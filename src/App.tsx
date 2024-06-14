import Navigator from './components/Navigation/Navigation';
import { SkillCard } from './components/SkillCard/SkillCard';
import { Footer } from './components/footer/footer';
import { Contact } from './components/Contact/contact';
function App() {

  return (
    <section className="dark:text-white dark:bg-neutral-950 duration-100">
      <Navigator />

      <div className="mx-80 text-sm font-firaSans text-justify">
        I'm a <span className="font-bold">Full-stack Engineer</span> focused on designing and developing products that transform your business
        into commercial success. I am driven and determined to build innovative solutions to your business's existing challenges. I
        am proficient in <span className="font-bold">product development and management, UX design, front-end and back-end development</span>.        I have highly effective <span className="font-bold">written and verbal communication skills </span> and excellent
        <span className="font-bold">problem-solving and brand development skills</span>.
      </div>
      <div className="font-PPEditNew text-4xl"> My Recents Works</div>

      <div className="font-PPEditNew text-4xl">
        Skills I have.
      </div>
      <SkillCard />
      <Contact />
      <Footer />
    </section>
  )
}

export default App
