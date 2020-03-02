import React from 'react'
import Layout from '../components/layout'
const Contact = () => {
    return (
        <Layout>
            <section>
        <form>
         <h1>Kontakt</h1> 
         <div >
                    <form method='post' name='contact' action='/thanks' data-netlify='true'>
                    <input type="hidden" name="form-name" value="contact" />
                    
                    <div>
                        <label htmlFor="name">Imię</label>
                        <input type='text' name='name' />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type='text' name='email' />
                    </div>
                    <div >
                        <label htmlFor="message">Wiadomość</label>
                        <textarea name='message' rows='6'></textarea>
                    </div>
                    <submit>
                    <button type='submit' >Wyślij</button>
                    </submit>
                    </form>
        </div> 
        </form>
        </section>
        </Layout>
    )
}
export default Contact