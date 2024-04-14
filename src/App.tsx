import Navigator from './components/Navigation/Navigation';
function App() {

  return (
    <section className="dark:text-white dark:bg-slate-900 duration-100">
      <Navigator/>

      <div className="mx-80 text-2xl text-justify">
        I'm a <span className="font-bold">Full-stack Engineer</span> focused on designing and developing products that transform your business 
        into commercial success. I am driven and determined to build innovative solutions to your business's existing challenges. I 
        am proficient in <span className="font-bold">product development and management, UX design, front-end and back-end development</span>.        I have highly effective <span className="font-bold">written and verbal communication skills </span> and excellent 
        <span className="font-bold">problem-solving and brand development skills</span>.
      </div>
      <div className="text-4xl"> My Recents Works</div>

      <div className="text-4xl">
        Skills I have. 
      </div>
      <div>
        languages
       <div>HTML 5</div>
       <div>Expert</div>
      </div>
      <div>
        Frameworks

       <div>React</div>
       <div>Expert</div>
      </div>
      <div>
        Tools
       <div>Figma</div>
       <div>Strong</div>
      </div>

    </section>
  )
}

export default App
