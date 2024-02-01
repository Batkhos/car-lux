import './FormContactStyle.css'

export default function FormContact() {
  return (
    <div className='form-cont'>
        <h1> Send Message To Us </h1>
        <form>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Subject' />
            <textarea placeholder='Message' rows="4"></textarea>
            <button>Submit</button> 
        </form>
    </div>
  ) 
}
