import Contact from "./components/contact.jsx"

export default function AppCats() {
    return (
        <>
            <main className="contacts">
                <Contact
                    img="/images/mr-whiskerson.png"
                    name="Mr.Whiskerson"
                    phone="(212) 555-1234"
                    email="mr.whiskaz@catnap.meow"
                />
                <Contact
                    img="images/fluffykins.png"
                    name="Fluffykins"
                    phone="(212) 555-1231"
                    email="fluff@me.meow"
                />
                <Contact
                    img="./images/felix.png"
                    name="Felix"
                    phone="(212) 555-4567"
                    email="thecat@hotmail.com"
                />
                <Contact
                    img="./images/pumpkin.png"
                    name="Pumkin"
                    phone="(0800) CAT KING"
                    email="pumpkin@scrimba.com"
                />
            </main >
        </>
    )
}
