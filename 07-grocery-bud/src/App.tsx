function App() {
  return (
    <section className='section-center'>
      <form action='' className='grocery-form'>
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input type='text' className='grocery' placeholder='e.g. eggs' />
          <button type='submit' className='submit-btn'>
            submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default App;
