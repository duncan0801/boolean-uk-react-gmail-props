import '../styles/Emails.css'

import Email from "./Email"

function Emails(props) {
    return (
        <main className="emails">
            <ul>
            {props.filteredEmails.map((email, index) => (
                <Email key={index} toggleRead={props.toggleRead} toggleStar={props.toggleStar} filteredEmails={props.filteredEmails}
                email={email}/>
            ))}
            </ul>
        </main>
    )
}
export default Emails