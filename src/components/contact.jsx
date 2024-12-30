export default function Contact({img, name, phone, email}) {
    return (
        <article className="contact-card">
            <img
                src={img}
                // both methods works to inject a prop name to string
                alt={`Photo of ${name}`}
                // alt={"Photo of " + props.name}
            />
            <h3>{name}</h3>
            <div className="info-group">
                <img
                    src="./images/phone-icon.png"
                    alt="phone icon"
                />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img
                    src="./images/mail-icon.png"
                    alt="mail icon"
                />
                <p>{email}</p>
            </div>
        </article>
    )
}

const person = {
    img: "./images/mr-whiskerson.png",
    name: "Mr. Whiskerson",
    phone: "(212) 555-1234",
    email: "mr.whiskaz@catnap.meow"
}

// this would create the `img` and `person` variables
// by copying the value out of the `person` object
const {img, name} = person
console.log(img)
console.log(name)
console.log(person)
