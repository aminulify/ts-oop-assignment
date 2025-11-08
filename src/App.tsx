
function App() {

  return (
    <>
      <h2>
        Interfaces vs. Types: What’s the Difference?
      </h2>
      <p>
        Both interfaces and types help you describe the structure of an object, but they behave differently in a few key ways.
      </p>
      <p>
        1. Declaration and Extension <br />
        Interfaces are mainly used to describe object shapes and can be extended multiple times even across different files. This makes them great for defining reusable contracts in large codebases.
      </p>

      {/* ---- code Image ---  */}
       

      <p>Types, on the other hand, cannot be reopened once declared. They are more flexible for composing different kinds of structures.</p>

      {/* ---- code Image ---  */}

      <p>2. Use Cases Beyond Objects <br/>
        Types can represent unions, intersections, and primitive aliases — things interfaces can’t handle directly.</p>

      {/* ---- code Image ---  */}

      <p>3. Extending Behavior <br />
       You can extend both, but the syntax differs slightly.</p>

       {/* ---- code Image ---  */}

      <p>Both ways work, but interfaces use the extends keyword while types use intersection (&).</p>

      <h2>The keyof Keyword in TypeScript</h2>
      <p>The keyof keyword extracts all the keys from a type or interface as a union of string literal types. Think of it as asking TypeScript: “Give me all the property names of this type.”
      <br /> Here’s a quick example:</p>

      {/* ---- code Image ---  */}

      <p>You can then use keyof to build dynamic and type-safe code, such as generic utility functions:</p>
      
    </>
  )
}

export default App
